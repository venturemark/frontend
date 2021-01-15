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
        <button type="button" className="focus:outline-none" onClick={() => showSidebar()}>
          <FaBars color="#000" size={32} />
        </button>
      </Navbar>
      <NavMenu isActive={active}>
        <MenuItem>
          <h1 className="text-3xl font-black">Home</h1>
          <h4 className="font-light tracking-wider">New and noteworthy content,</h4>
          <h5>
            just for
            {' '}
            <strong>you</strong>
          </h5>

        </MenuItem>
        <MenuContent>
          <div className="flex items-center border-l-4 border-green-600">
            <img className="w-8 h-8 rounded-full mx-3" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <h3 className="font-bold text-lg">Home</h3>
          </div>

        </MenuContent>
        <List>
          {fakeData.map((data) => (
            <Item key={data.id}>
              <Organization>
                <OrgHighlight
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <h3 className="font-bold capitalize">{data.organization}</h3>
                  {isHovered && (
                    <AddButton type="button">
                      <MdAddCircle size={24} color="#029D7F" />
                    </AddButton>
                  )}
                </OrgHighlight>
                {data.audiences.map((audience) => (
                  <Audience>
                    <div className="flex w-full items-center font-light tracker-widest">
                      <AudienceLogo src={audience.img} alt="logo" />
                      {audience.name}
                      <span className="ml-auto mr-10 w-3 h-3 bg-green-600 rounded-full" />
                    </div>
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
