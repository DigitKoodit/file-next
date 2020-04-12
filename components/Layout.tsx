import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Footer from './Footer';
import { initGA, logPageView } from '../core/analytics';
import Header from '../components/Header';

export const fonts = {
  sans: 'Open Sans, sans-serif',
  serif: 'Open Sans, serif',
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  background: #F3F7F9;
  font-family: ${fonts.sans};
  line-height: 1.5;
  text-decoration: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  overflow: auto;

  * {
    box-sizing: border-box;
  }
`;

type Props = {
  title?: string;
  children: any;
};

export const Page = styled.div`
  margin: 0 auto;
  text-decoration: none;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 900px;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  background: white;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0px;
  }
`;

class Layout extends React.Component<Props> {
  componentDidMount() {
    if (!window['GA_INITIALIZED']) {
      initGA();
      window['GA_INITIALIZED'] = true;
    }
    logPageView();
  }
  render() {
    const { children } = this.props;
    return (
      <>
        <Head>
          <title>File-lehti</title>
        </Head>
        <Container>
          <Page>
            <Header />
            {children}
          </Page>
          <Footer />
        </Container>
      </>
    );
  }
}

export default Layout;
