import { FC } from 'react';
/**
 * Jika Anda ingin menggunakan getServerSideProps untuk melindungi rute Anda, Anda dapat membatalkan komentar pada baris ini
 *
 * import type { GetServerSideProps } from 'next';
 * import { getSession } from 'next-auth/react';
 */

import ContainerHome from '@/components/Containers/Home/Home';

/**
 * Jika Anda ingin menggunakan getServerSideProps untuk melindungi rute Anda, Anda dapat membatalkan komentar pada baris ini
 *
 * export const getServerSideProps: GetServerSideProps = async ({ req }) => {
 *   const session = await getSession({ req });
 *
 *   if(!session) {
 *      return {
 *        redirect: {
 *          destination: '/login',
 *          permanent: false,
 *        },
 *      };
 *   }
 *
 *   return {
 *    props: {
 *      session,
 *    },
 *   }
 * };
 */

const Home: FC = () => {
  return <ContainerHome />;
};

export default Home;
