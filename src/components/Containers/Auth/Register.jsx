import { Link } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';

const ContainerRegister = () => {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl">
        <div className="container">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="w-full px-4 mx-5 mb-10 lg:mb-0 lg:w-1/2">
              <img
                src="/assets/svg/undraw_register.svg"
                loading="lazy"
                alt="Hero Illustration"
                className="object-cover object-center w-full h-full"
              />
            </div>

            <div className="w-full px-4 mx-5 lg:w-1/2">
              <div className="flex items-center justify-center mb-5">
                <h1 className="text-2xl font-semibold text-center font-teal-500 lg:text-3xl">
                  Selamat Datang!
                </h1>
              </div>

              <form className="p-8 bg-white rounded-lg shadow-lg">
                {/* {notifiedSuccess === 1 && (
                      <div className="p-3 mb-4 bg-green-500 rounded">
                        <p className="text-sm font-bold text-white">
                          Login Sukses, Selamat datang kembali!
                        </p>
                      </div>
                    )}

                    {notifiedSuccess === 2 && (
                      <div className="p-3 mb-4 bg-red-500 rounded">
                        <p className="text-sm font-bold text-white">
                          Username atau Password salah, silakan coba kembali!
                        </p>
                      </div>
                    )} */}

                <div className="mb-3">
                  <label htmlFor="email" className="block mb-2 text-slate-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-500/70"
                    placeholder="Masukkan email"
                    autoFocus={true}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-slate-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-500/70"
                    placeholder="Masukkan password"
                    required
                  />
                </div>

                <div className="mb-3">
                  <button
                    type="button"
                    className="w-full py-2 mt-3 font-bold text-white transition duration-300 ease-in-out bg-teal-500 rounded-lg hover:bg-teal-600"
                  >
                    Daftar
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center mt-5">
                <p className="text-slate-600">
                  Sudah mempunyai akun?{' '}
                  <Link to="/login" className="font-bold text-teal-500">
                    Masuk
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
