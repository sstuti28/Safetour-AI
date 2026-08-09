import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* pt-16 accounts for fixed navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;