import React from 'react';

import { MdHome, MdAccountCircle } from 'react-icons/md';

import NavigationBar from '../NavigationBar';

import { Container } from './styles';

const userLogged = {
  name: 'Thiago Vasconcellos',
  avatar: 'https://scontent.fssz1-1.fna.fbcdn.net/v/t1.0-9/p960x960/65542077_10219773292872562_841547186079531008_o.jpg?_nc_cat=104&ccb=2&_nc_sid=85a577&_nc_ohc=hBGjpSabL5UAX9hPcXd&_nc_ht=scontent.fssz1-1.fna&tp=6&oh=917b0ef11b0b51022d577fcee01c1b24&oe=60276844',
};

const Header: React.FC = () => (
  <>
    <NavigationBar />
    <Container>
      <MdHome color="#f0f0f0" visibility="hidden" size={32} />
      <h2>V E N T U R E M A R K</h2>
      <img src={userLogged.avatar} alt="logo" />
    </Container>
  </>
);

export default Header;
