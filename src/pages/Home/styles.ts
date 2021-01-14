import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 0.3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: 100vh;
`;

export const FixedContent = styled.div``;

export const MainInput = styled.div`
  padding: 0.8em;
  display: flex;
  align-items: center;
  background-color: #fff;
  margin-top: 45px;
  width: 55em;
  height: 6em;
  border: none;
  border-radius: 8px;

  img {
    margin-right: 0.8em;
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  input {
    width: 55em;
    height: 6em;
    border: none;
    border-radius: 8px;
  }
`;

export const RegularButton = styled.button`
  margin-top: 40px;
  border: none;
  height: 2.5em;
  width: 13em;
  font-weight: bold;
  margin-right: 1.5em;
  border-radius: 8px;
`;

export const SendButton = styled.button`
  background-color: #029D7F;
  border: none;
  height: 2.5em;
  width: 13em;
  font-weight: bold;

  color: #fff;

  border-radius: 8px;
  margin-left: 13.1em;
`;

export const Timeline = styled.div`
  margin-top: 65px;
`;

export const Update = styled.div`
  padding: 5px;
  display: flex;
  height: 10em;
  border: 2px solid tomato;

  img {
    border-radius: 50%;
    height: 64px;
    width: 64px;
  }

`;
