import React, { FC } from 'react';
import Head from 'next/head';

import Navbar from '@/components/Common/Navbar';
import Footer from '@/components/Common/Footer';

const ContainerHome: FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>

      <Footer />
    </div>
  );
};

export default ContainerHome;
