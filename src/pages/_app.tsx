import React from 'react';
import { Provider } from 'react-redux';
import '@fortawesome/fontawesome-svg-core/styles.css';
import store from '../store';
import '../index.scss';
import '../i18n';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: any) {
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
