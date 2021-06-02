import React from 'react';
import styled from 'styled-components';
import FooterList from '../FooterList/FooterList';
import Facebook_icon from './../../Assets/icon-facebook.svg';
import Twitter_icon from './../../Assets/icon-twitter.svg';
import Pinterest_icon from './../../Assets/icon-pinterest.svg';
import Insta_icon from './../../Assets/icon-instagram.svg';

/* Styling using Styled Componnets */

const Wrapper = styled.section`
  width: 100%;
  height: 270px;
  display: flex;
  justify-content: center;
  background-color: #232127;
`;

const MainContent = styled.section`
  width: 70%;
  height: 55px;
  display: flex;
`;

const BrandNameSection = styled.section`
  margin-top: 2.5rem;
  height: 100%;
  width: 25%;
`;

const FooterLinkSection = styled.section`
  margin-top: 2.5rem;
  height: 100%;
  width: 75%;
  display: flex;
  justify-content: space-between;
`;

const BrandTitle = styled.h1`
  font-family: 'Poppins';
  font-size: 25px;
  margin: 0;
  padding: 0;
  font-weight: 800;
  color: #ffff;
  text-align: left;
`;

const SocialLinksSection = styled.section`
  width: 25%;
  display: flex;
  justify-content: space-between;
`;

function Footer() {
  return (
    <Wrapper>
      <MainContent>
        <BrandNameSection>
          <BrandTitle>Shortly</BrandTitle>
        </BrandNameSection>
        <FooterLinkSection>
          <FooterList
            heading="Features"
            linkList={['Link Shortening', 'Branded Links', 'Analytics']}
          />
          <FooterList
            heading="Resources"
            linkList={['Blog', 'Developers', 'Support']}
          />
          <FooterList
            heading="Company"
            linkList={['About', 'Our Team', 'Careers', 'Contacts']}
          />
          <SocialLinksSection>
            <img
              style={{ width: '25px', height: '25px' }}
              src={Facebook_icon}
              alt="Facebook Icon"
            />
            <img
              style={{ width: '25px', height: '25px' }}
              src={Twitter_icon}
              alt="Twitter Icon"
            />
            <img
              style={{ width: '25px', height: '25px' }}
              src={Pinterest_icon}
              alt="Pinterest Icon"
            />
            <img
              style={{ width: '25px', height: '25px' }}
              src={Insta_icon}
              alt="Instagram Icon"
            />
          </SocialLinksSection>
        </FooterLinkSection>
      </MainContent>
    </Wrapper>
  );
}

export default Footer;
