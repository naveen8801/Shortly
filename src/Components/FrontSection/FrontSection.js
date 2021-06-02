import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import banner from './../../Assets/illustration-working.svg';

/* Styling using Styled Componnets */

const Wrapper = styled.section`
  width: 100%;
  height: 480px;
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

const MainContent = styled.section`
  width: 85%;
  height: 400px;
  display: flex;
  justify-content: space-between;
`;

const FlexboxItem = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 9vh;
  font-family: 'Poppins';
  font-weight: 800;
  text-align: left;
  color: #232127;
  margin: 0;
  padding: 0;
  margin-top: 2rem;
  line-height: 4.5rem;
`;

const Subtext = styled.h3`
  font-family: 'Poppins';
  font-size: 13.5px;
  margin: 0;
  padding: 0;
  font-weight: 700;
  color: #9e9aa7;
  width: 60%;
  margin-top: 1rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
`;

function FrontSection() {
  return (
    <Wrapper>
      <MainContent>
        <FlexboxItem>
          <Heading>More than just shorter links</Heading>
          <Subtext>
            Build your brand's recognition and got detailed insights on how your
            links are performing
          </Subtext>
          <Button text="Get Started"></Button>
        </FlexboxItem>
        <img src={banner} alt="banner"/>
      </MainContent>
    </Wrapper>
  );
}

export default FrontSection;
