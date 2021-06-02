import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ShortensLinksCard from '../ShortenLinksCard/ShortensLinksCard';
import BoostBanner from './../../Assets/bg-shorten-desktop.svg';
import { GetShortUrl } from './../../api/api';

/* Styling using Styled Componnets */

const Wrapper = styled.section`
  margin-top: -3rem;
  width: 60%;
`;

const InputSection = styled.section`
  background: url(${BoostBanner});
  background-color: #35323e;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  border-radius: 8px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 75%;
  height: 50px;
  border-radius: 8px;
  ::placeholder {
    font-family: 'Poppins';
    padding-left: 1rem;
    color: #9e9aa7;
  }
`;

const OnErrorInput = styled.input`
  border: 3px solid #f46262;
  outline: none;
  width: 75%;
  height: 50px;
  border-radius: 8px;
  ::placeholder {
    font-family: 'Poppins';
    padding-left: 1rem;
    color: #f46262;
  }
`;

const Button = styled.button`
  background: #2acfcf;
  width: 120px;
  height: 50px;
  border-radius: 8px;
  color: #ffff;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 700;
  padding: 0.25em 1em;
  border: none;
  padding: 0.3em 1rem;
  margin-left: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const Loadingbutton = styled.button`
  background: #2acfcf;
  width: 120px;
  height: 50px;
  border-radius: 8px;
  color: #ffff;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 700;
  padding: 0.25em 1em;
  border: none;
  padding: 0.3em 1rem;
  margin-left: 1rem;
`;

const ErrorText = styled.h5`
  font-size: 9px;
  font-family: 'Poppins';
  color: #f46262;
  width: 100%;
  margin: 0;
  margin-left: 2.5rem;
  margin-top: 0.5rem;
`;

const LinkSection = styled.section`
  width: 100%;
`;

function LinkShortner() {
  const [InputValue, setInputValue] = useState('');
  const [ShortenLinksList, setShortenLinkList] = useState([]);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  /* Input feild onChange Handler  */
  const InputHandler = (e) => {
    setInputValue(e.target.value);
  };
  /* Shorten it buttom onClick Handler  */
  const OnClickHandler = async () => {
    if (Validate(InputValue)) {
      seterror(true);
      return;
    }
    seterror(false);
    setloading(true);
    const result = await GetShortUrl(InputValue).then((res) => {
      const data = {
        Mainlink: InputValue,
        Newlink: res.data.result.short_link2,
      };
      setShortenLinkList([...ShortenLinksList, data]);
      setloading(false);
    });
  };

  /* Input field validation handler */
  const Validate = (InputText) => {
    if (!InputText || InputText.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Wrapper>
      <InputSection>
        {error ? (
          <OnErrorInput
            onChange={InputHandler}
            value={InputValue}
            placeholder="Shorten a link here.."
          />
        ) : (
          <Input
            onChange={InputHandler}
            value={InputValue}
            placeholder="Shorten a link here.."
          />
        )}
        {loading ? (
          <Loadingbutton>Wait...</Loadingbutton>
        ) : (
          <Button onClick={OnClickHandler}>Shorten It!</Button>
        )}
        {error ? <ErrorText>Input a link</ErrorText> : null}
      </InputSection> 
      <LinkSection>
        {ShortenLinksList.map((item) => (
          <ShortensLinksCard
            Mainlink={item.Mainlink}
            Newlink={item.Newlink}
            key={Math.random()}
          />
        ))}
      </LinkSection>
    </Wrapper>
  );
}

export default LinkShortner;
