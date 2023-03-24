import React from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import MainLayout from '@/layouts/MainLayout';
import TodoList from './components/TodoList';

const ContainerHome = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <MainLayout>
        <section className="max-w-7xl mx-auto">
          <div className="container mt-40 mb-40">
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800">
                  {siteMetadata.title}
                </h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <TodoList />
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default ContainerHome;
