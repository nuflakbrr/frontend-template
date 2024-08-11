import { FC } from 'react';
import { Link } from 'react-router-dom';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/Common/CustomIcons';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  const primaryLink = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
  ];

  const secondaryLink = [
    { title: 'Career', url: '/career' },
    { title: 'Internship', url: '/internship' },
  ];

  const tertiaryLink = [
    { title: 'Contact Us', url: '/contact' },
    { title: 'FAQ', url: '/faq' },
  ];

  const legalLink = [
    { title: 'Terms of Service', url: '/terms-of-service' },
    { title: 'Privacy Policy', url: '/privacy-policy' },
  ];

  const socialLink = [
    { title: 'Facebook', icon: <FacebookIcon />, url: '/' },
    { title: 'Instagram', icon: <InstagramIcon />, url: '/' },
    { title: 'Twitter', icon: <TwitterIcon />, url: '/' },
    { title: 'LinkedIn', icon: <LinkedInIcon />, url: '/' },
  ];

  return (
    <div className="bg-slate-800">
      <footer className="px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-12 pt-10 mb-16 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            <div className="mb-4">
              <Link to="/" aria-label="logo" className='className="inline-flex items-center gap-2 text-xl font-bold text-gray-100 font-primary md:text-2xl"'>
                {/* <img
                  src="/apple-touch-icon.png"
                  alt="Brand Logo"
                  className="object-cover object-center w-8 h-8"
                /> */}
                Footer
              </Link>
            </div>

            <p className="mb-6 text-justify text-gray-400 sm:pr-8">
              about your company, and include information about your products.
            </p>

            <div className="flex gap-4">
              {socialLink?.map((f, i) => (
                <Link
                  to={f.url}
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  rel="noreferrer"
                  key={i}
                >
                  {f.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 font-bold tracking-widest text-gray-100 uppercase">
              Company
            </div>

            <nav className="flex flex-col gap-4">
              {primaryLink?.map((b, i) => (
                <div key={i}>
                  <Link to={b.url} className="text-gray-400 transition duration-100 hover:text-teal-500 active:text-teal-600">
                    {b.title}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div>
            <div className="mb-4 font-bold tracking-widest text-gray-100 uppercase">
              Others
            </div>

            <nav className="flex flex-col gap-4">
              {secondaryLink?.map((c, i) => (
                <div key={i}>
                  <Link to={c.url} className="text-gray-400 transition duration-100 hover:text-teal-500 active:text-teal-600">
                    {c.title}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div>
            <div className="mb-4 font-bold tracking-widest text-gray-100 uppercase">
              Helps
            </div>

            <nav className="flex flex-col gap-4">
              {tertiaryLink?.map((d, i) => (
                <div key={i}>
                  <Link to={d.url} className="text-gray-400 transition duration-100 hover:text-teal-500 active:text-teal-600">
                    {d.title}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div>
            <div className="mb-4 font-bold tracking-widest text-gray-100 uppercase">
              Legal
            </div>

            <nav className="flex flex-col gap-4">
              {legalLink?.map((e, i) => (
                <div key={i}>
                  <Link to={e.url} className="text-gray-400 transition duration-100 hover:text-teal-500 active:text-teal-600">
                    {e.title}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="py-8 text-sm text-center text-gray-400 border-t border-gray-800">
          © {year} - Naufal Akbar Nugroho. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
