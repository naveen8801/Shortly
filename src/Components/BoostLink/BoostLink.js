import React from 'react';
import styled from 'styled-components';
import BoostBanner from './../../Assets/bg-boost-desktop.svg';

const Wrapper = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${BoostBanner});
  background-color: #35323e;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 4vh;
  color: #fff;
  font-weight: 600;
  font-family: 'Poppins';
  text-align: center;
  margin: 0;
`;

const Button_ = styled.button`
  background: #2acfcf;
  width: 150px;
  height: 40px;
  margin-top: 1.5rem;
  color: #ffff;
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 700;
  padding: 0.25em 1em;
  border: none;
  border-radius: 22px;
  padding: 0.3em 1rem;
  &:hover {
    cursor: pointer;
  }
`;

function BoostLink() {
  return (
    <Wrapper>
      <Heading>Boost your link today</Heading>
      <Button_>Get Started</Button_>
    </Wrapper>
  );
}

export default BoostLink;
