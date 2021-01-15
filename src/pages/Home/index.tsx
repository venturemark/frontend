import React from 'react';
import Header from '../../components/Header';

const userLogged = {
  name: 'Thiago Vasconcellos',
  avatar: 'https://scontent.fssz1-1.fna.fbcdn.net/v/t1.0-9/p960x960/65542077_10219773292872562_841547186079531008_o.jpg?_nc_cat=104&ccb=2&_nc_sid=85a577&_nc_ohc=hBGjpSabL5UAX9hPcXd&_nc_ht=scontent.fssz1-1.fna&tp=6&ohgit =917b0ef11b0b51022d577fcee01c1b24&oe=60276844',
};

const Home: React.FC = () => (
  <>
    <section className="mt-10">
      <div className="flex w-full border-red-100 rounded shadow-lg bg-gray-50 px-3 py-6 space-x-10">
        <div className="flex items-center">
          <div className="h-10 w-10 bg-gray-200 rounded-full" />
        </div>
        <div className="flex items-center">
          <p className="text-md text-gray-400">Investors love to hear from you. Share an update...</p>
        </div>
      </div>
    </section>

    <div className="flex flex-col md:flex-row items-center justify-between space-x-6 mt-10">
      <div className="flex px-6 md:p-1 space-x-2 mb-3">
        <select id="organization" name="organization" className="py-2 md:px-4 md:font-medium bg-white border border-gray-100 rounded-md shadow-xl focus:outline-none">
          <option>Select Organization</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <select id="audience" name="audience" className="py-2 md:px-4 md:font-medium bg-white border border-gray-100 rounded-md shadow-xl focus:outline-none">
          <option>Select Audience</option>
          <option>Investors</option>
          <option>Startups</option>
          <option>Internal only</option>
        </select>
      </div>

      <button type="button" className="bg-green-600 shadow-xl text-white font-medium px-4 py-2 rounded hover:bg-green-800 focus:outline-none">Send Update</button>
    </div>

    <section className="mt-10">
      <div>
        <h2 className="text-gray-600 uppercase tracking-wide font-medium">New Updates</h2>
      </div>

      <article className="bg-white rounded-lg shadow-lg p-3 my-6">
        <div className="flex w-full border-red-100 px-3 py-3 space-x-10">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-gray-200 rounded-full" />
          </div>
          <div className="">
            <p className="text-md text-gray-800 space-x-2">
              <span className="font-bold">The Rock</span>
              <span>posted to</span>
              <span className="font-bold">Venturemark</span>
            </p>
            <p className="text-sm font-light">3 hours ago. Wins, Metrics</p>
          </div>
        </div>
        <p className="p-4">We finished fundraising, blah blah blah blah...</p>
        <div className="flex items-center space-x-3 border-t-2 border-gray-100 divide-x-2 divide-gray-100 divide-solid pt-3">
          <button type="button" className="text-green-600 font-medium px-4 py-2">Reply</button>
          <button type="button" className="text-green-600 font-medium px-4 py-2">View Startup</button>
        </div>
      </article>

    </section>

    <section className="mt-10">
      <div>
        <h2 className="text-gray-600 uppercase tracking-wide font-medium">Add Value</h2>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mt-6">

        <div className="bg-white rounded shadow-lg p-4 flex flex-col justify-start items-center h-64">
          <div className="mx-auto my-6 border-primary bg-green-600 text-green-200 w-12 h-12 rounded-full inline-flex items-center align-middle justify-center font-bold text-2xl">
            S
          </div>
          <h2 className="font-black">Shuyin Tang</h2>
          <p className="font-light text-sm text-gray-400">Patamar</p>
          <button type="button" className="mt-auto bg-white border border-gray-100 rounded font-semibold shadow-xl w-full mx-6 py-3 hover:bg-gray-200">Follow</button>
        </div>

        <div className="bg-white rounded shadow-lg p-4 flex flex-col justify-start items-center h-64">
          <div className="mx-auto my-6 border-primary bg-green-600 text-green-200 w-12 h-12 rounded-full inline-flex items-center align-middle justify-center font-bold text-2xl">
            S
          </div>
          <h2 className="font-black">Shuyin Tang</h2>
          <p className="font-light text-sm text-gray-400">Patamar</p>
          <button type="button" className="mt-auto bg-white border border-gray-100 rounded font-semibold shadow-xl w-full mx-6 py-3">Follow</button>
        </div>

        <div className="bg-white rounded shadow-lg p-4 flex flex-col justify-start items-center h-64">
          <div className="my-6 flex -space-x-2 overflow-hidden">
            <img className="inline-block w-12 h-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
            <img className="inline-block  w-12 h-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <h2 className="font-black">Shuyin Tang</h2>
          <p className="font-light text-sm text-gray-400">Patamar</p>
          <button type="button" className="mt-auto bg-white border border-gray-100 rounded font-semibold shadow-xl w-full mx-6 py-3">Follow</button>
        </div>

        <div className="bg-white rounded shadow-lg p-4 flex flex-col justify-start items-center h-64">
          <div className="mx-auto my-6 border-primary bg-green-600 text-green-200 w-12 h-12 rounded-full inline-flex items-center align-middle justify-center font-bold text-2xl">
            S
          </div>
          <h2 className="font-black">Shuyin Tang</h2>
          <p className="font-light">Patamar</p>
          <button type="button" className="mt-auto bg-white border border-gray-100 rounded font-semibold shadow-xl w-full mx-6 py-3">Follow</button>
        </div>
      </div>

    </section>

    <section className="mt-10">
      <div>
        <h2 className="text-gray-600 uppercase tracking-wide font-medium">Posts you might be interested in</h2>
      </div>
      <article className="bg-white rounded-lg shadow-lg p-3 my-6">
        <div className="flex w-full border-red-100 px-3 py-3 space-x-10">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-gray-200 rounded-full" />
          </div>
          <div className="">
            <p className="text-md text-gray-800 space-x-2">
              <span className="font-bold">Abraham Lincoln,</span>
              <span>an investor,</span>
              <span className="font-bold">started following you.</span>
            </p>
            <p className="text-sm font-light">4 hours ago</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 border-t-2 border-gray-100 divide-x-2 divide-gray-100 divide-solid pt-3">
          <button type="button" className="text-green-600 font-medium px-4 py-2">Message</button>
          <button type="button" className="text-green-600 font-medium px-4 py-2">View Profile</button>
        </div>
      </article>
    </section>
  </>
);

export default Home;
