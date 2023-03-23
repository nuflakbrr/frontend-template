import { FC } from 'react';
import useSWR from 'swr';

import Navbar from '@/components/Common/Navbar/Navbar';
import Footer from '@/components/Common/Footer';
import { PageSEO } from '@/components/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import { useFetcher } from '@/hooks/fetcher';
import TodoList from './components/TodoList';

const ContainerHome: FC = () => {
  const { data, error, isLoading } = useSWR('/data.json', useFetcher);

  if (error) return <div>Terjadi kesalahan</div>;
  if (isLoading) return <div>Loading...</div>;

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

                {/* Example implement useSWR */}
                <div className="flex flex-col my-10">
                  <h1>
                    Dibawah ini adalah contoh output dari penggunaan useSWR
                  </h1>

                  <pre>{JSON.stringify(data)}</pre>
                </div>
                {/* Example implement useSWR */}

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
