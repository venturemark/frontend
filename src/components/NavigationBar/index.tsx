import React, { useState } from 'react';

import { FaBars } from 'react-icons/fa';

import { MdAddCircle } from 'react-icons/md';

import {
  Container,
  Navbar,
  NavMenu,
  MenuItem,
  MenuContent,
  List,
  Item,
  Organization,
  OrgHighlight,
  Audience,
  AudienceLogo,
  AddButton,
} from './styles';

import fakeData from '../../fakes/fakeData.json';

const NavigationBar: React.FC = () => {
  const [active, setActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showSidebar = () => setActive(!active);

  return (
    <Container>
      <Navbar>
        <button type="button" onClick={() => showSidebar()}>
          <FaBars color="#000" size={32} />
        </button>
      </Navbar>
      <NavMenu isActive={active}>
        <MenuItem>
          <h1>Home</h1>
          <h4>New and noteworthy content,</h4>
          <h5>
            just for
            {' '}
            <strong>you</strong>
          </h5>

        </MenuItem>
        <MenuContent>
          <h3>Home</h3>
        </MenuContent>
        <List>
          { fakeData.map((data) => (
            <Item key={data.id}>
              <Organization>
                <OrgHighlight
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <h3>{data.organization}</h3>
                  {isHovered && (
                    <AddButton type="button">
                      <MdAddCircle size={24} color="#029D7F" />
                    </AddButton>
                  )}
                </OrgHighlight>
                { data.audiences.map((audience) => (
                  <Audience>
                    <button type="button">
                      <AudienceLogo src={audience.img} alt="logo" />
                      {audience.name}
                    </button>
                  </Audience>
                ))}
              </Organization>
            </Item>
          ))}
        </List>
      </NavMenu>
    </Container>
  );
};

export default NavigationBar;
