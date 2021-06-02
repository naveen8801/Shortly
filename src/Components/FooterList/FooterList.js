import React from 'react';
import styled from 'styled-components';

/* Styling using Styled Componnets */

const Wrapper = styled.section`
  width: 25%;
  justify-content: center;
`;

const Heading = styled.h1`
  margin: 0;
  text-align: left;
  color: #ffff;
  font-family: 'Poppins';
  font-size: 15px;
  font-weight: 500;
`;

const LinksSection = styled.section`
  margin-top: 1.5rem;
`;

const LinkItem = styled.h4`
  margin-top: 0.3rem;
  text-align: left;
  color: #bfbfbf;
  font-family: 'Poppins';
  font-size: 12px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;

function FooterList(props) {
  return (
    <Wrapper>
      <Heading>{props.heading}</Heading>
      <LinksSection>
        {props.linkList.map((item) => (
          <LinkItem>{item}</LinkItem>
        ))}
      </LinksSection>
    </Wrapper>
  );
}

export default FooterList;
