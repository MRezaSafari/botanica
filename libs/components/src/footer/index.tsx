import Image from 'next/future/image';
import Link from 'next/link';
import { IconBrandFacebook, IconBrandInstagram, IconBrandPinterest, IconBrandTiktok, IconBrandYoutube, IconMail } from '@tabler/icons';

const navigation = {
  products: [
    { name: 'DBC Skincare', href: '/collections/cbd-face-body-care' },
    { name: 'Face Care', href: '/collections/face-care' },
    { name: 'Bath and Body Care', href: '/collections/hand-body-self-care' },
  ],
  company: [
    { name: 'Contact Us', href: '/pages/contact' },
    { name: 'Our Story', href: '/pages/about' },
    { name: 'Privacy Policy', href: '/pages/privacy-policy' },
    { name: 'Refund policy', href: '/pages/refund-policy' },
    { name: 'Terms And Conditions', href: '/pages/terms-and-conditions' },
  ],
  account: [
    { name: 'Login', href: '/account/login' },
    { name: 'Register', href: '/account/register' },
    { name: 'My Account', href: '/account' },
    { name: 'My Orders', href: '/account/orders' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Tiktop',
      href: 'https://www.tiktok.com/@botanicalskinscience',
      icon: (props: any) => <IconBrandTiktok />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/botanicalskinscience/',
      icon: (props: any) => <IconBrandInstagram />,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/botanicalskinscience/',
      icon: (props: any) => <IconBrandFacebook />,
    },
    {
      name: 'Pinterest',
      href: 'https://www.pinterest.com/botanicalskinscience/',
      icon: (props: any) => <IconBrandPinterest />,
    },
    {
      name: 'Youtube',
      href: 'https://www.youtube.com/@botanicalskinscience',
      icon: (props: any) => <IconBrandYoutube />,
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-white px-6" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-1432 mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-0">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <div className="md:grid md:grid-cols-4 md:gap-16 space-y-8 md:space-y-0">
            <div>
              <h3 className="text-xs font-semibold text-dark tracking-wider uppercase">
                Products
              </h3>
              <ul className="mt-4 space-y-4">
                {navigation.products.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <a className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-dark tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <a className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-dark tracking-wider uppercase">
                Account
              </h3>
              <ul className="mt-4 space-y-4">
                {navigation.account.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <a className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-dark tracking-wider uppercase">
                Follow us
              </h3>
              <ul className="flex items-center mt-4">
                {navigation.social.map((item) => (
                  <li key={item.name} className="mr-2">
                    <a href={item.href} target="_blank" className="flex">
                      <item.icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
          <div className="mt-12 xl:mt-0 max-w-sm">
            <h3 className="text-xs font-bold text-dark tracking-wider uppercase">
              Newsletter
            </h3>
            <p className="mt-4 text-base text-[#8e8e8e]">
              For the latest news, product releases, and resources sent to your
              inbox weekly
            </p>
            <form className="mt-4 flex sm:max-w-md border rounded-3xl p-1 overflow-hidden">
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full border-none rounded-md  py-2 px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-indigo-500 focus:placeholder-gray-500"
                placeholder="Email address"
              />
              <div className="rounded-md sm:ml-3 sm:flex-shrink-0">
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
            <p className="text-[#8e8e8e] font-normal text-sm">
              Copyright ©2022 Botanical Skin Science, Inc.
            </p>
          </div>
          <div>
            <Image
              width={184}
              height={54}
              priority={true}
              src="/images/bosci_logo_off.svg"
              alt="botanical skin science"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
