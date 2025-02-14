import { FC, ReactNode } from 'react';

import Navbar from '@/components/Mixins/Navbar';
import Footer from '@/components/Mixins/Footer';

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;
