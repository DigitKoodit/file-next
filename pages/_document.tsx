import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Html, Body } from '../components/Styled/Common';

interface props {
  styleTags: any;
}

import Router from 'next/router';

Router.events.on('routeChangeComplete', () => {
  if (process.env.NODE_ENV !== 'production') {
    const els = document.querySelectorAll('link[href*="/styled/Common.ts"]');
    const timestamp = new Date().valueOf();
    els[0].href = '/styled/Common.ts' + timestamp;
  }
})

// Document component is strongly typed with `@types/next`
export default class MyDocument extends Document<props> {
  static getInitialProps({ renderPage }: any) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Quattrocento&display=swap" rel="stylesheet"/>
          {this.props.styleTags}
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    );
  }
}
