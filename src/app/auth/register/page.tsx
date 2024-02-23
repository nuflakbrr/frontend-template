import { FC } from 'react';
import type { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import ContainerRegister from '@/components/Containers/Auth/Register';

// Fungsi dibawah ini digunakan untuk memblokir halaman Register jika user sudah ter-autentikasi
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

const Register: FC = () => {
  return <ContainerRegister />;
};

export default Register;
