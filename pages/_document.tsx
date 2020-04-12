import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import 'typeface-open-sans'

interface props {
  styleTags: any;
}


// Document component is strongly typed with `@types/next`
export default class MyDocument extends Document<props> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    // Retrieve styles from components in the page
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    // Extract the styles as <style> tags. Output the styles in the <Head>
    const styleTags = sheet.getStyleElement();
    if(!page || !sheet || !styleTags) {
      return console.log('shii')
    }
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="fi">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Quattrocento&display=swap" rel="stylesheet" />
          {this.props.styleTags}
          <link rel="shortcut icon" href="static/icon.svg" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
