import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../index.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../i18n';
import store from '../store';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2a2b29" />
        <meta name="description" content="Lucas Cipriani Site Portfolio" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Lucas Cipriani Portfolio</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
