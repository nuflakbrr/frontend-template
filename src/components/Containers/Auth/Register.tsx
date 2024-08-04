import { FC } from 'react';
import Link from 'next/link';

import MainLayout from '@/layouts/MainLayout';

const ContainerRegister: FC = () => {
  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-10 lg:mb-0 w-full px-4 mx-5 lg:w-1/2">
              <img
                src="/assets/svg/undraw_register.svg"
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
                {/* {notifiedSuccess === 1 && (
                      <div className="mb-4 bg-green-500 p-3 rounded">
                        <p className="text-white text-sm font-bold">
                          Login Sukses, Selamat datang kembali!
                        </p>
                      </div>
                    )}

                    {notifiedSuccess === 2 && (
                      <div className="mb-4 bg-red-500 p-3 rounded">
                        <p className="text-white text-sm font-bold">
                          Username atau Password salah, silakan coba kembali!
                        </p>
                      </div>
                    )} */}

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
                    Daftar
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center mt-5">
                <p className="text-slate-600">
                  Sudah mempunyai akun?{' '}
                  <Link href="/login" legacyBehavior>
                    <a className="text-teal-500 font-bold">Masuk</a>
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

export default ContainerRegister;
