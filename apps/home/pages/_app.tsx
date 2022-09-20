import './styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { Header } from '@shopify/components';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to home!</title>
      </Head>
      <main className="app">
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
