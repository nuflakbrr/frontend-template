'use client';

import { useEffect } from 'react';

import ErrorState from '@/components/Common/ErrorState';

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const reqError = error;
  const statusCode = reqError.status || reqError.statusCode || 500;

  return <ErrorState code={statusCode} error={error} />;
}
