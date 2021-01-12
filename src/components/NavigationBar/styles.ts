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
  margin-top: 64px;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
  height: 100vh;
  background-color: #f0f0f0;

  ${(props) => props.isActive
    && css`
    left: 0;
    transition: 350ms;
  `
}
`;

export const MenuItem = styled.ul``;
