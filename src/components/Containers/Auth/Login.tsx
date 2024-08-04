import { FC } from 'react';
import Link from 'next/link';

import { GitHubIcon } from '@/components/Common/CustomIcons';
import MainLayout from '@/layouts/MainLayout';

const ContainerLogin: FC = () => {
  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-10 lg:mb-0 w-full px-4 mx-5 lg:w-1/2">
              <img
                src="/assets/svg/undraw_login.svg"
                loading="lazy"
                alt="Hero Illustration"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="w-full px-4 mx-5 lg:w-1/2">
              <div className="flex items-center justify-center mb-5">
                <h1 className="font-teal-500 font-semibold text-2xl lg:text-3xl text-center">
                  Selamat Datang!
                </h1>
              </div>

              <form className="bg-white rounded-lg shadow-lg p-8">
                <div className="mb-3">
                  <label htmlFor="email" className="block text-slate-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-teal-500/70"
                    placeholder="Masukkan email"
                    autoFocus={true}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="block text-slate-600 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-teal-500/70"
                    placeholder="Masukkan password"
                    required
                  />
                </div>

                <div className="mb-3">
                  <button
                    type="button"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-bold transition duration-300 ease-in-out mt-3"
                  >
                    Masuk
                  </button>
                </div>

                <div className="relative flex items-center justify-center mb-3">
                  <span className="absolute inset-x-0 h-px bg-gray-300"></span>
                  <span className="relative bg-white px-4 text-sm text-gray-400">
                    Atau masuk dengan
                  </span>
                </div>

                <div>
                  <button className="w-full flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                    <GitHubIcon />
                    Lanjutkan Dengan GitHub
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center mt-5">
                <p className="text-slate-600">
                  Belum mempunyai akun?{' '}
                  <Link href="/register" legacyBehavior>
                    <a className="text-teal-500 font-bold">Daftar</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContainerLogin;
