import { FC } from 'react';

import Navbar from '@/components/Common/Navbar/Navbar';
import Footer from '@/components/Common/Footer';
import { PageSEO } from '@/components/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import TopSection from './components/TopSection';

const ContainerAbout: FC = () => {
  return (
    <>
      <PageSEO
        title={`Tentang - ${siteMetadata.title}`}
        description={siteMetadata.description}
      />

      <Navbar />

      <main className="py-24">
        <section className="max-w-7xl mx-auto h-96">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <TopSection />
                <h1 className="text-3xl font-bold underline">Hello about!</h1>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContainerAbout;
