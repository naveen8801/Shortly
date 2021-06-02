import React, { useState } from 'react';
import styled from 'styled-components';

/* Styling using Styled Componnets */

const Wrapper = styled.section`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  background-color: #ffff;
  padding-left: 1.5rem;
  padding-right: 1rem;
  height: 50px;
`;

const ShortenLinkSection = styled.section`
  width: 35%;
  height: 100%;
  justify-content: flex-end;
  display: flex;
  align-items: center;
`;

const MainLinkSection = styled.section`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Linkurl = styled.h3`
  margin: 0;
  color: black;
  font-family: 'Poppins';
  font-weight: 500;
  width: 40%;
  font-size: 15px;
`;
const ShortLinkurl = styled.h3`
  margin: 0;
  color: #2acfcf;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 15px;
`;

const Buttoncopy = styled.button`
  background: #2acfcf;
  width: 80px;
  height: 35px;
  color: #ffff;
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 700;
  padding: 0.25em 1em;
  border: none;
  border-radius: 8px;
  padding: 0.3em 1rem;
  margin-left: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const Buttoncopied = styled.button`
  background: #3b3054;
  width: 80px;
  height: 35px;
  color: #ffff;
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 700;
  padding: 0.25em 1em;
  border: none;
  border-radius: 8px;
  padding: 0.3em 1rem;
  margin-left: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

function ShortensLinksCard(props) {
  const [copied, setcopied] = useState(false);

  /* Copy Button Handler */
  const CopyButtonHnadler = () => {
    navigator.clipboard.writeText(props.Newlink);
    setcopied(true);
  };

  return (
    <Wrapper>
      <MainLinkSection>
        <Linkurl>{props.Mainlink}</Linkurl>
      </MainLinkSection>
      <ShortenLinkSection>
        <ShortLinkurl>{props.Newlink}</ShortLinkurl>
        {copied ? (
          <Buttoncopied>Copied!</Buttoncopied>
        ) : (
          <Buttoncopy onClick={CopyButtonHnadler}>Copy</Buttoncopy>
        )}
      </ShortenLinkSection>
    </Wrapper>
  );
}

export default ShortensLinksCard;
