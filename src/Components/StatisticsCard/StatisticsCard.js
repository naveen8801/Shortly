import React from 'react';
import styled from 'styled-components';

/* Styling using Styled Componnets */

const Wrapper = styled.section`
  width: 350px;
  height: 280px;
  margin: 1rem;
  background-color: #ffff;
  position: relative;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const Circle = styled.section`
  position: absolute;
  width: 75px;
  height: 75px;
  background-color: #3b3054;
  top: -36px;
  border-radius: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 22px;
  font-family: 'Poppins';
  font-weight: 800;
  color: #232127;
  margin: 0;
  padding: 0;
  margin-top: 4.5rem;
  text-align: left;
`;

const Subtext = styled.h3`
  font-family: 'Poppins';
  font-size: 14px;
  margin: 0;
  padding: 0;
  font-weight: 500;
  color: #9e9aa7;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;


function StatisticsCard(props) {
  return (
    <Wrapper style={{marginTop: `${props.margin}`}}>
      <Circle>
        <img src={props.logo} alt="logo" />
      </Circle>
      <Heading>{props.heading}</Heading>
      <Subtext>{props.description}</Subtext>
    </Wrapper>
  );
}

export default StatisticsCard;
