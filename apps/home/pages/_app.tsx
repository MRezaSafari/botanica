import 'keen-slider/keen-slider.min.css';
import './styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

import { Footer, Header } from '@shopify/components';
import { MenuBasicModel } from '@shopify/models';
import { storefront } from '@shopify/utilities';
import { menuQuery } from '@shopify/graphql-queries';
import { NextPage } from 'next';

interface Props extends AppProps {
  menuData: MenuBasicModel;
}

const ShopifyApp: NextPage<Props> = ({
  Component,
  pageProps,
  menuData,
}: Props) => {
  return (
    <>
      <Head>
        <title>Botanical Skin Science</title>
      </Head>
      <main className="app">
        <Header menu={menuData.menu.items} />

        <Component {...pageProps} />
        <Footer />
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{ duration: 5000 }}
        />
      </main>
    </>
  );
};

ShopifyApp.getInitialProps = async ({ req, res }) => {
  
  res && res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const data = await storefront<any>(menuQuery);
  
  return {
    menuData: data.data,
  } as any;
};

export default ShopifyApp;
