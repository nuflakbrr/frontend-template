import React from 'react';

import { siteMetadata } from '@/data/siteMetadata';
import MainLayout from '@/layouts/MainLayout';

const ContainerContact = () => {
  return (
    <MainLayout>
      <section className="flex items-center justify-center min-h-screen mx-auto max-w-7xl">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <section className="text-gray-600 body-font">
                <div className="container flex flex-col items-center justify-center mx-auto">
                  <img
                    src="https://avatars.githubusercontent.com/u/83068205?v=4"
                    loading="lazy"
                    alt="hero"
                    className="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6"
                  />

                  <div className="w-full text-center lg:w-2/3">
                    <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
                      Naufal Akbar Nugroho
                    </h1>

                    <h1 className="mb-4 text-xl font-medium text-gray-900 title-font sm:text-2xl">
                      Frontend Developer | Undergraduate Information Systems
                      Student
                    </h1>

                    <p className="mb-8 leading-relaxed">
                      Saya bersemangat memberikan kontribusi untuk memberikan
                      pengetahuan teknologi bagi semua orang!
                    </p>

                    <div className="flex justify-center">
                      <a
                        href={siteMetadata.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex px-6 py-2 text-lg text-white bg-teal-500 border-0 rounded focus:outline-none hover:bg-teal-600"
                      >
                        GitHub Saya
                      </a>

                      <a
                        href={`mailto:${siteMetadata.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200"
                      >
                        Hubungi Saya
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContainerContact;
