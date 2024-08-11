import React from 'react';

import ContainerNotFound from '@/components/Containers/ErrorPage/NotFound';

export const metadata = {
  title: 'Not Found',
  description: 'Not Found',
};

const NotFound = () => {
  return <ContainerNotFound />;
};

export default NotFound;
