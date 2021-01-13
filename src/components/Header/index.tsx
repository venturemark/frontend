import React from 'react';

import { MdHome, MdAccountCircle } from 'react-icons/md';

import NavigationBar from '../NavigationBar';

import { Container } from './styles';

const Header: React.FC = () => (
  <>
    <NavigationBar />
    <Container>
      <MdHome color="#f0f0f0" visibility="hidden" size={32} />
      <h2>V E N T U R E M A R K</h2>
      <MdAccountCircle color="#000" size={32} />
    </Container>
  </>
);

export default Header;
