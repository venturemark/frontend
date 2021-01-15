import React from 'react';
import { MdHome } from 'react-icons/md';
import NavigationBar from '../NavigationBar';

const userLogged = {
  name: 'Thiago Vasconcellos',
  avatar: 'https://scontent.fssz1-1.fna.fbcdn.net/v/t1.0-9/p960x960/65542077_10219773292872562_841547186079531008_o.jpg?_nc_cat=104&ccb=2&_nc_sid=85a577&_nc_ohc=hBGjpSabL5UAX9hPcXd&_nc_ht=scontent.fssz1-1.fna&tp=6&oh=917b0ef11b0b51022d577fcee01c1b24&oe=60276844',
};

const Header: React.FC = () => (
  <div className="top-0 sticky z-30 bg-white">
    <NavigationBar />
    <div className="h-16 p-5 flex items-center justify-between">
      <MdHome color="#f0f0f0" visibility="hidden" size={32} />
      <h2 className="font-light tracking-widest leading-loose uppercase">Venturemark</h2>
      <img className="h-10 w-10 rounded-full" src={userLogged.avatar} alt="logo" />
    </div>
  </div>
);

export default Header;
