import React from 'react';
import ThemeToggle from '../features/Theme/ThemeToggle';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

const HeaderContainer = styled.header`
   background-color:rgb(255, 255, 255);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.03);
  height: 50px;
  margin-bottom: 20px;
  border-radius: 8px;
  margin-top: 30px;
`;

const Logo = styled.img`
  width: 140px;
  height: 110px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <ThemeToggle />
    </HeaderContainer>
  );
};

export default Header;