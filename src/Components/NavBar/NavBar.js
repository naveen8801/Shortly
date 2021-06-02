import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

/* Styling using Styled Componnets */

const NavbarWrapper = styled.section`
  width: 100%;
  height: 55px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;
`;

const Navbar = styled.section`
  width: 70%;
  height: 55px;
  display: flex;
  justify-content: space-between;
`;

const BrandTitle = styled.h1`
  font-family: 'Poppins';
  font-size: 25px;
  margin: 0;
  padding: 0;
  font-weight: 800;
  color: #3b3054;
  text-align: left;
  &:hover {
    cursor: pointer;
  }
`;

const ItemsflexBox = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavItems = styled.h4`
  text-align: left;
  font-size: 13.5px;
  margin: 0;
  padding: 0;
  font-weight: 700;
  color: #9e9aa7;
  font-family: 'Poppins';
  margin-left: 2.5rem;
  margin-right: 1rem;
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonsBox = styled.section`
  display: flex;
  align-items: center;
`;

function NavBar() {
  return (
    <NavbarWrapper>
      <Navbar>
        <ItemsflexBox>
          <BrandTitle>Shortly</BrandTitle>
          <NavItems>Features</NavItems>
          <NavItems>Pricing</NavItems>
          <NavItems>Resources</NavItems>
        </ItemsflexBox>
        <ButtonsBox>
          <NavItems>Login</NavItems>
          <Button text="Sign Up"/>
        </ButtonsBox>
      </Navbar>
    </NavbarWrapper>
  );
}

export default NavBar;
