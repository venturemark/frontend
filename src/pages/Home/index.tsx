import React from 'react';

import { MdSend } from 'react-icons/md';

import Header from '../../components/Header';

import {
  Container, Title, Insert, Options, Timelines,
} from './styles';

const Home: React.FC = () => (
  <>
    <Header />
    <Container>
      <Title>
        <h3>Marketing Campaign</h3>
        <h4>We want to get 100 customers by April 1st.</h4>
        <h4>I really hope that you guys dont mind that Ive some minors changes.</h4>
      </Title>
      <Insert>
        <input placeholder="Create an update" />
        <button type="button">
          <MdSend />
        </button>
      </Insert>
      <Options>
        <button type="button">Select timeline</button>
        <button type="button">Select audience</button>
      </Options>
    </Container>
  </>
);

export default Home;
