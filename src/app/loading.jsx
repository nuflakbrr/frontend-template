'use client';
import React from 'react';

import Loader from '@/components/Common/Loader';

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-screen">
      <Loader />
    </div>
  );
};

export default Loading;
