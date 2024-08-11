'use client';
import React from 'react';

import MainLayout from '@/layouts/MainLayout';
import useScreenSize from '@/hooks/useScreenSize';
import useClipboard from '@/hooks/useClipboard';

const ContainerHome = () => {
  const screenSize = useScreenSize();
  const { copy } = useClipboard();

  return (
    <MainLayout>
      <section className="flex items-center justify-center min-h-screen gap-3">
        <h1>{screenSize}</h1>
        <button
          onClick={() => copy('Hello, World!')}
          className="px-3 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
        >
          Copy
        </button>
      </section>
    </MainLayout>
  );
};

export default ContainerHome;
