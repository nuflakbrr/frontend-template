import React from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import MainLayout from '@/layouts/MainLayout';

const ContainerAbout = () => {
  return (
    <>
      <PageSEO
        title={`Tentang - ${siteMetadata.title}`}
        description={siteMetadata.description}
      />

      <MainLayout>
        <section className="max-w-7xl mx-auto">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                      loading="lazy"
                      alt="Laptop"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="md:pt-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">
                      Tentang Next.js Starter Project.
                    </h1>

                    <p className="sm:text-lg mb-6 md:mb-8 text-justify">
                      <span className="bg-gray-200 p-1 rounded font-mono">
                        Next.js Starter Project
                      </span>{' '}
                      adalah sebuah templat proyek awal yang dibuat dengan
                      Next.js, dan beberapa <i>library</i> lainnya. Project ini
                      dibuat untuk mempermudah dalam membuat proyek baru dengan
                      Next.js.
                    </p>

                    <p className="sm:text-lg mb-6 md:mb-8 text-justify">
                      Dibuatnya templat Proyek ini berawal dari sebuah keresahan{' '}
                      <a
                        href={siteMetadata.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 active:text-blue-700 underline transition duration-100"
                      >
                        Saya
                      </a>{' '}
                      saat membuat proyek baru dengan Next.js. Karena{' '}
                      <a
                        href={siteMetadata.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 active:text-blue-700 underline transition duration-100"
                      >
                        Saya
                      </a>{' '}
                      merasa harus membuat proyek baru dari awal, mulai dari
                      membuat folder <i>components</i>, <i>components</i>,{' '}
                      <i>containers</i>, <i>layouts</i>, <i>utils</i>, dan masih
                      banyak hal lain. Dan juga harus menginstall beberapa{' '}
                      <i>library</i> yang sering{' '}
                      <a
                        href={siteMetadata.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 active:text-blue-700 underline transition duration-100"
                      >
                        Saya
                      </a>{' '}
                      gunakan.
                    </p>

                    <p className="sm:text-lg mb-6 md:mb-8 text-justify">
                      Dengan dibuatnya templat proyek ini diharapkan dapat
                      mempermudah dalam membuat proyek baru dengan Next.js.
                      Hanya dengan menjalankan perintah:{' '}
                      <span className="bg-gray-200 text-[15px] p-1 rounded font-mono">
                        npx degit nuflakbrr/next-template#javascript-version
                        nama-proyek
                      </span>
                    </p>

                    <p className="sm:text-lg mb-6 md:mb-8 text-justify">
                      Maka kita hanya perlu menjalankan perintah{' '}
                      <span className="bg-gray-200 text-[15px] p-1 rounded font-mono">
                        npm install
                      </span>{' '}
                      untuk menginstall semua <i>library</i> yang ada pada
                      templat proyek ini.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default ContainerAbout;
