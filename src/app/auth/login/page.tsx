import { FC } from 'react';
import type { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import ContainerLogin from '@/components/Containers/Auth/Login';

// Fungsi dibawah ini digunakan untuk memblokir halaman Login jika user sudah ter-autentikasi
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

const Login: FC = () => {
  return <ContainerLogin />;
};

export default Login;
