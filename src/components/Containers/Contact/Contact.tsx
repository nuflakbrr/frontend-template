import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import MainLayout from '@/layouts/MainLayout';
import TopSection from './components/TopSection';

const ContainerContact: FC = () => {
  return (
    <>
      <PageSEO
        title={`Tentang - ${siteMetadata.title}`}
        description={siteMetadata.description}
      />

      <MainLayout>
        <section className="max-w-7xl mx-auto h-96">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <TopSection />
                <h1 className="text-3xl font-bold underline">Hello contact!</h1>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default ContainerContact;
