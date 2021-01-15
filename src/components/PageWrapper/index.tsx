import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const PageWrapper: React.FC = ({ children }) => (
  <main>
    <Header />
    <div className="min-h-screen w-full bg-gray-100 p-5">
      {children}
    </div>
    <Footer />
  </main>
);

export default PageWrapper;
