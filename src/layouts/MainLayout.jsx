import React from 'react';

import Navbar from '@/components/Mixins/Navbar/Navbar';
import Footer from '@/components/Mixins/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main className="py-24">{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;
