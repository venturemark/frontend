import React from 'react';

import Header from '../../components/Header';

import {
  Container,
  Content,
  FixedContent,
  MainInput,
  RegularButton,
  SendButton,
  Timeline,
  Update,
} from './styles';

const userLogged = {
  name: 'Thiago Vasconcellos',
  avatar: 'https://scontent.fssz1-1.fna.fbcdn.net/v/t1.0-9/p960x960/65542077_10219773292872562_841547186079531008_o.jpg?_nc_cat=104&ccb=2&_nc_sid=85a577&_nc_ohc=hBGjpSabL5UAX9hPcXd&_nc_ht=scontent.fssz1-1.fna&tp=6&oh=917b0ef11b0b51022d577fcee01c1b24&oe=60276844',
};

const Home: React.FC = () => (
  <>
    <Header />
    <Container>
      <Content>
        <FixedContent>
          <MainInput>
            <img src={userLogged.avatar} alt="logo" />
            <input type="text" placeholder="Investors love to hear from you. Share an update" />
          </MainInput>
          <RegularButton type="button">Select Organization</RegularButton>
          <RegularButton type="button">Select Audience</RegularButton>
          <SendButton type="button">Send Update</SendButton>
        </FixedContent>
        <Timeline>
          <h5>NEW UPDATES</h5>
          <Update>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX49WIe4JJr-QFN7V85z7NlYX-dVj8ZzGr4Q&usqp=CAU" alt="logo" />
            <span>
              <strong>The Rock </strong>
              posted to
              {' '}
              <strong>Venturemark</strong>
            </span>
          </Update>
        </Timeline>
      </Content>
    </Container>
  </>
);

export default Home;
