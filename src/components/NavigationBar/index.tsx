import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';
import fakeData from '../../fakes/fakeData.json';

const NavigationBar: React.FC = () => {
  const [active, setActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showSidebar = () => setActive(!active);

  return (
    <div className="absolute top-0 bg-transparent p-5">
      <div>
        <button type="button" className="focus:outline-none" onClick={() => showSidebar()}>
          <FaBars color="#000" size={32} />
        </button>
      </div>
      <div className={`absolute top-16 h-screen bg-white border-r border-gray-200 transform transition-all duration-300 ease-linear ${active ? 'left-0' : '-left-80'}`}>
        <div className="mt-6 p-4">
          <h1 className="text-2xl font-black tracking-wider">Home</h1>
          <h4 className="font-light tracking-wider">New and noteworthy content,</h4>
          <h5>
            just for
            {' '}
            <strong>you</strong>
          </h5>
        </div>
        <div className="mt-5">
          <div className="flex items-center border-l-4 border-green-600">
            <img className="w-8 h-8 rounded-full mx-3" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <h3 className="font-bold text-lg">Home</h3>
          </div>
        </div>
        <div className="mt-5">
          {fakeData.map((data) => (
            <div className="p-4" key={data.id}>
              <div>
                <div
                  className="flex items-center"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <h3 className="font-bold capitalize">{data.organization}</h3>
                  {isHovered && (
                    <button type="button">
                      <MdAddCircle size={24} color="#029D7F" />
                    </button>
                  )}
                </div>
                {data.audiences.map((audience) => (
                  <div className="w-64 py-2">
                    <div className="flex w-full items-center font-light tracker-widest">
                      <img className="w-10 h-10 rounded-full" src={audience.img} alt="logo" />
                      <p className="flex-grow">{audience.name}</p>
                      <span className="ml-auto w-3 h-3 bg-green-600 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
