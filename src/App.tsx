import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import Header from './components/Header';
import NavigationBar from './components/NavigationBar';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <NavigationBar />
    <Routes />
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
