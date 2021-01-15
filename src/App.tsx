import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import './styles/main.css';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
