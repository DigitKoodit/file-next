import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import styled from 'styled-components';

//import { Html, Body } from '../components/Styled/Common';

interface props {
  styleTags: any;
}

export const fonts = {
  sans: 'Open Sans, sans-serif',
  serif: 'Open Sans, serif',
};

export const Html = styled.html`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  background: #F3F7F9;
  #background: #efefef;
  & * {
    font-family: ${fonts.sans};
    line-height: 1.5;
  }
  & * {
    box-sizing: border-box;
  }
`;

export const Body = styled.body`
  overflow: visible;
  text-decoration: none;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;

  & * {
    box-sizing: border-box;
  }

  & > div {
    text-decoration: none;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

// Document component is strongly typed with `@types/next`
export default class MyDocument extends Document<props> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    // Retrieve styles from components in the page
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    // Extract the styles as <style> tags. Output the styles in the <Head>
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
