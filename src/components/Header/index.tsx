import React from 'react';

import { MdHome, MdAccountCircle } from 'react-icons/md';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <MdHome color="#fff" size={32} />
    <h1>VENTUREMARK</h1>
    <MdAccountCircle color="#fff" size={32} />
  </Container>
);

export default Header;
