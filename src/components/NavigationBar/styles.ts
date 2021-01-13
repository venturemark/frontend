import styled, { css } from 'styled-components';

interface INavMenuProps {
  isActive: boolean;
}

export const Container = styled.div`
  padding: 15px;
  position: absolute;
  top: 1;
  left: 0;

  button {
    background-color: transparent;
    border: none;
  }
`;

export const Navbar = styled.div``;

export const NavMenu = styled.nav<INavMenuProps>`
  margin-top: 68px;
  position: fixed;
  top: 0;
  left: -100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: 850ms;
  height: 100vh;
  width: 22em;
  background-color: #ffffff;
  border-right: solid 1.5em rgba(#000, .2);

  ${(props) => props.isActive
    && css`
    left: 0;
    transition: 350ms;
  `
}
`;

export const MenuItem = styled.ul`
  margin-top: 1.7em;

  h4, h5 {
    font-weight: normal;
    font-size: 16px;
  }
`;

export const MenuContent = styled.div`
  margin-top: 1.3em;
`;

export const List = styled.div`
  margin-top: 1.3em;

  list-style: none;
`;

export const Item = styled.div`
  padding: 15px;
`;

export const Organization = styled.div`
  padding: 7.5px;
`;

export const Audience = styled.div`
  display: flex;
  align-items: center;
  padding: 7.5px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
