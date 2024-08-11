import React from 'react';

import { siteMetadata } from '@/data/siteMetadata';
import MainLayout from '@/layouts/MainLayout';

const ContainerAbout = () => {
  return (
    <MainLayout>
      <section className="flex items-center justify-center min-h-screen mx-auto max-w-7xl">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                <div className="h-64 overflow-hidden bg-gray-100 rounded-lg shadow-lg md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                    loading="lazy"
                    alt="Laptop"
                    className="object-cover object-center w-full h-full"
                  />
                </div>

                <div className="md:pt-8">
                  <h1 className="mb-4 text-2xl font-bold text-center sm:text-3xl md:text-left md:mb-6">
                    Tentang Next.js Starter Project.
                  </h1>

                  <p className="mb-6 text-justify sm:text-lg md:mb-8">
                    <span className="p-1 font-mono bg-gray-200 rounded">
                      Next.js Starter Project
                    </span>{' '}
                    adalah sebuah templat proyek awal yang dibuat dengan
                    Next.js, dan beberapa <i>library</i> lainnya. Project ini
                    dibuat untuk mempermudah dalam membuat proyek baru dengan
                    Next.js.
                  </p>

                  <p className="mb-6 text-justify sm:text-lg md:mb-8">
                    Dibuatnya templat Proyek ini berawal dari sebuah keresahan{' '}
                    <a
                      href={siteMetadata.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline transition duration-100 hover:text-blue-600 active:text-blue-700"
                    >
                      Saya
                    </a>{' '}
                    saat membuat proyek baru dengan Next.js. Karena{' '}
                    <a
                      href={siteMetadata.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline transition duration-100 hover:text-blue-600 active:text-blue-700"
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
                      className="text-blue-500 underline transition duration-100 hover:text-blue-600 active:text-blue-700"
                    >
                      Saya
                    </a>{' '}
                    gunakan.
                  </p>

                  <p className="mb-6 text-justify sm:text-lg md:mb-8">
                    Dengan dibuatnya templat proyek ini diharapkan dapat
                    mempermudah dalam membuat proyek baru dengan Next.js. Hanya
                    dengan menjalankan perintah:{' '}
                    <span className="bg-gray-200 text-[15px] p-1 rounded font-mono">
                      npx degit nuflakbrr/frontend-template#nextjs-js
                      nama-proyek
                    </span>
                  </p>

                  <p className="mb-6 text-justify sm:text-lg md:mb-8">
                    Maka kita hanya perlu menjalankan perintah{' '}
                    <span className="bg-gray-200 text-[15px] p-1 rounded font-mono">
                      npm install
                    </span>{' '}
                    untuk menginstall semua <i>library</i> yang ada pada templat
                    proyek ini.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContainerAbout;
