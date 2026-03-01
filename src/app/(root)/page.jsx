'use client';
import React from 'react';

import Hero from './_components/Hero';
import Features from './_components/Features';
import Steps from './_components/Steps';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <Steps />
    </div>
  );
};

export default Home;
