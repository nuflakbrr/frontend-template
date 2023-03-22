import { FC } from 'react';

import Navbar from '@/components/Common/Navbar/Navbar';
import Footer from '@/components/Common/Footer';
import { PageSEO } from '@/components/SEO';
import { siteMetadata } from '@/data/siteMetaData';
import TodoList from './components/TodoList';

const ContainerHome: FC = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <Navbar />

      <main className="py-24">
        <section className="max-w-7xl mx-auto h-96">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <TodoList />
                <h1 className="text-3xl font-bold underline my-5">
                  Hello world from{' '}
                  <a
                    href="https://docs.pmnd.rs/zustand/getting-started/introduction"
                    target={'_blank'}
                    rel="noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Zustand
                  </a>
                  !
                </h1>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContainerHome;
