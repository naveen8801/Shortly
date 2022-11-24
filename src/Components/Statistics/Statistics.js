import React from 'react';
import styled from 'styled-components';
import LinkShortner from '../LinkShortner/LinkShortner';
import StatisticsCard from '../StatisticsCard/StatisticsCard';
import Brand_Recog_logo from './../../Assets/icon-brand-recognition.svg';
import Detailed_Records_logo from './../../Assets/icon-detailed-records.svg';
import Fully_Custom_logo from './../../Assets/icon-fully-customizable.svg';

/* Styling using Styled Componnets */

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  background-color: #e8e8e8;
`;

const MainContent = styled.section`
  width: 70%;
  height: 700px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 35px;
  font-family: 'Poppins';
  font-weight: 800;
  color: #232127;
  margin: 0;
  padding: 0;
  margin-top: 5rem;
  text-align: center;
`;

const Subtext = styled.h3`
  font-family: 'Poppins';
  font-size: 14.5px;
  margin: 0;
  padding: 0;
  font-weight: 700;
  color: #9e9aa7;
  width: 60%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 40%;
  text-align: center;
  display: inline-block;
`;

const CardWrapper = styled.section`
  margin-top: 1.5rem;
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: row;
`;

function Statistics() {
  return (
    <Wrapper>
      {/* <LinkShortner /> */}
      <MainContent>
        <Heading>Advanced Statistics</Heading>
        <Subtext>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </Subtext>
        <CardWrapper>
          <StatisticsCard
            logo={Brand_Recog_logo}
            heading="Brand Recognition"
            description="Boost your brand recognition with each click. Generic link don't mean a thing. Branded links help install confidence in your content"
          />
          <StatisticsCard
            logo={Detailed_Records_logo}
            heading="Detailed Records"
            margin="3rem"
            description="Boost your brand recognition with each click. Generic link don't mean a thing. Branded links help install confidence in your content"
          />
          <StatisticsCard
            logo={Fully_Custom_logo}
            heading="Fully Customizable"
            margin="6rem"
            description="Boost your brand recognition with each click. Generic link don't mean a thing. Branded links help install confidence in your content"
          />
        </CardWrapper>
      </MainContent>
    </Wrapper>
  );
}

export default Statistics;
