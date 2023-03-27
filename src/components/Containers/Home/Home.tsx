import { FC } from 'react';
import { useSession, signOut } from 'next-auth/react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import MainLayout from '@/layouts/MainLayout';
import { classNames } from '@/lib/classNames';
import TodoList from './components/TodoList';

const ContainerHome: FC = () => {
  const { data: session } = useSession();

  async function handleSignOut() {
    await signOut();
  }

  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <MainLayout>
        <section className="max-w-7xl mx-auto">
          <div
            className={classNames(
              session ? 'mb-10' : 'mb-40',
              'container mt-40'
            )}
          >
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800">
                  {siteMetadata.title}
                </h1>
              </div>
            </div>
          </div>

          {session ? (
            <div
              className={classNames(session ? 'mb-10' : 'mb-40', 'container')}
            >
              <div className="flex flex-wrap">
                <div className="w-full px-4">
                  <h1 className="text-2xl font-bold text-center text-gray-800">
                    Welcome! you are logged in as
                  </h1>

                  <div className="flex items-center justify-center mt-5">
                    <img
                      src={session?.user?.image || ''}
                      alt={session?.user?.name || ''}
                      loading="lazy"
                      className="w-20 h-20 rounded-full object-cover object-center"
                    />

                    <div className="flex flex-col ml-5">
                      <h2 className="text-2xl font-bold text-gray-800">
                        {session?.user?.name}
                      </h2>

                      <h2 className="text-2xl font-bold text-gray-800">
                        {session?.user?.email}
                      </h2>

                      <div>
                        <button
                          onClick={handleSignOut}
                          className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-bold transition duration-300 ease-in-out mt-3"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}

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
