'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './Navbar.module.css';
import { headerNavLinks } from '@/data/headerNavLinks';
import { classNames } from '@/lib/classNames';
import ThemeToggle from '@/components/Common/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  // Navbar fixed position if scrolling
  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector('header');
      const fixNav = header?.offsetTop ?? 0;

      if (window.pageYOffset > fixNav) {
        header?.classList.add(styles.navbarFixed);
      } else {
        header?.classList.remove(styles.navbarFixed);
      }
    };
  }, []);

  // Hamburger menu handler
  const hamburgerHandler = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#navMenu');

    setIsOpen(!isOpen);

    if (isOpen) {
      hamburger?.classList.remove(styles.hamburgerActive);
      navMenu?.classList.add('hidden');
    } else {
      hamburger?.classList.add(styles.hamburgerActive);
      navMenu?.classList.remove('hidden');
    }
  };

  // isMenuActive handler
  const isMenuActive = (path) => {
    const isHomePage = pathname === '/' && path === '/';

    if (isHomePage) {
      return true;
    }

    return pathname !== '/' && path !== '/' && pathname.includes(path);
  };

  return (
    <header className="absolute top-0 left-0 z-10 flex items-center w-full bg-transparent">
      <div className="container mx-auto">
        <div className="mx-auto max-w-7xl">
          <div className="relative flex items-center justify-between">
            <div className="px-4">
              <Link href="/" legacyBehavior>
                <a
                  className="inline-flex items-center gap-2 py-6 text-xl font-bold font-primary lg:text-2xl"
                  aria-label="logo"
                >
                  {/* <img
                    src="/apple-touch-icon.png"
                    alt="Brand Logo"
                    className="object-cover object-center w-8 h-8"
                  /> */}
                  Navbar
                </a>
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="absolute block right-4 lg:hidden"
                onClick={hamburgerHandler}
              >
                <span
                  className={`${styles.hamburgerLine} origin-top-left transition duration-300 ease-in-out`}
                ></span>
                <span
                  className={`${styles.hamburgerLine} transition duration-300 ease-in-out`}
                ></span>
                <span
                  className={`${styles.hamburgerLine} origin-bottom-left transition duration-300 ease-in-out`}
                ></span>
              </button>

              <nav
                id="navMenu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  {headerNavLinks?.map((a, i) => (
                    <li className="group" key={i}>
                      <Link
                        href={a.path}
                        className={classNames(
                          isMenuActive(a.path)
                            ? 'text-teal-500'
                            : 'text-black dark:text-zinc-50',
                          'font-secondary font-semibold text-base py-2 mx-8 lg:mx-2 flex group-hover:text-teal-500 transition duration-300 ease-in-out'
                        )}
                      >
                        {a.title}
                      </Link>
                    </li>
                  ))}
                  <li className="group">
                    <Link
                      href="/login"
                      className={classNames(
                        isMenuActive('/login')
                          ? 'text-teal-500'
                          : 'text-black dark:text-zinc-50',
                        'font-secondary font-semibold text-base py-2 mx-8 lg:mx-2 flex group-hover:text-teal-500 transition duration-300 ease-in-out'
                      )}
                    >
                      Masuk
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/register"
                      className={classNames(
                        isMenuActive('/register')
                          ? 'text-teal-500'
                          : 'text-black dark:text-zinc-50',
                        'font-secondary font-semibold text-base py-2 mx-8 lg:mx-2 flex group-hover:text-teal-500 transition duration-300 ease-in-out'
                      )}
                    >
                      Daftar
                    </Link>
                  </li>

                  <ThemeToggle />
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
