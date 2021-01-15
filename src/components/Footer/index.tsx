import React from 'react';

const Footer: React.FC = () => (
  <footer className="text-gray-600 body-font">
    <div className="container px-5 py-6 mx-auto">
      <div className="flex flex-wrap md:text-left text-center order-first">
        <div className="lg:w-3/4 md:w-1/2 w-full px-4">
          <h2 className="text-xl font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">VentureMark</h2>
          <nav className="list-none mb-10 space-y-3">
            <li>
              <a href="/#" className="text-gray-600 hover:text-gray-800">About us</a>
            </li>
            <li>
              <a href="/#" className="text-gray-600 hover:text-gray-800">Our startups</a>
            </li>
            <li>
              <a href="/#" className="text-gray-600 hover:text-gray-800">Our investors</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">
                Enter your email address below
                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </label>
            </div>
            <button type="button" className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          </div>
          <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
            We respect your privacy and will never send you spam mail
          </p>
        </div>
      </div>
    </div>
    <div className="bg-gray-50">
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">

        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
          &copy; 2020 VentureMark —
          <a href="/#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@venturemark</a>
        </p>

      </div>
    </div>
  </footer>
);

export default Footer;
