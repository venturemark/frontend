import React, { useState } from 'react';

import { FaBars } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';

import {
  Container, Navbar, NavMenu, MenuItem,
} from './styles';

import fakeData from '../../fakes/fakeData.json';

const NavigationBar: React.FC = () => {
  const [active, setActive] = useState(false);

  const showSidebar = () => setActive(!active);

  return (
    <Container>
      <Navbar>
        <button type="button" onClick={() => showSidebar()}>
          <FaBars color="#000" size={32} />
        </button>
      </Navbar>
      <NavMenu isActive={active}>
        { active && (
          <button type="button" onClick={() => showSidebar()}>
            <IoMdCloseCircle color="#000" size={32} />
          </button>
        )}
        <MenuItem>
          { fakeData.map((data) => (
            <li key={data.title}>
              <button type="button">
                {data.title}
              </button>
            </li>
          ))}
        </MenuItem>
      </NavMenu>
    </Container>
  );
};

export default NavigationBar;
