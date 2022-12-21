import { IconBrandAppstore, IconBrandGooglePlay } from '@tabler/icons';
import Image from 'next/future/image';
import Container from '../container';

const navigation = {
  mainMenu: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Face Care', href: '/collection/face-care' },
    { name: 'Bath & Body Care', href: '/collection/hand-body-self-care' },
    { name: 'DBC Skincare', href: '/collection/cbd-face-body-care' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '' },
    { name: 'Blog', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/botanicalskinscience',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/botanicalskinscience',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'hello@botanicalskinscience.com',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 18 24" {...props}>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M18 .5H2c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2zm-1.887 2L10 6.32 3.887 2.5h12.226zM2 11.5V3.679l7.47 4.669a1.002 1.002 0 0 0 1.06 0L18 3.678l.001 7.822H2z"
          ></path>
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  return (
    <>
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-xs font-bold font-poppins text-dark tracking-wider uppercase">
                    MAIN MENU
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.mainMenu.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base font-poppins text-dark hover:text-cool"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8"></div>
            </div>
            <div className="mt-8 xl:mt-0">
              <h3 className="text-xs font-bold font-poppins text-dark tracking-wider uppercase">
                newsletter
              </h3>
              <p className="mt-4 text-base text-[#8e8e8e] font-poppins ">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <form className="mt-4 sm:flex sm:max-w-md border rounded-3xl p-1 overflow-hidden">
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="font-poppins appearance-none min-w-0 w-full border-none rounded-md  py-2 px-4 text-base text-gray-900 placeholder-[#666666] focus:outline-none focus:ring-0 focus:border-indigo-500 focus:placeholder-[#666666]"
                  placeholder="Email Address"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full bg-highlight flex items-center justify-center border border-transparent rounded-3xl py-2 px-4 text-sm font-normal text-white hover:bg-indigo-700 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-between mt-20 items-end">
            <div>
              <p className="text-[#8e8e8e] font-poppins font-normal text-sm">
                Copyright ©2022 Botanical Skin Science, Inc.
              </p>
            </div>
            <div>
              <Image
                width={184}
                height={54}
                priority={true}
                src="/images/brand-logo-dark.svg"
                alt="botanical skin science"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
