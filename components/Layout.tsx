import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Footer from './Footer';
import { initGA, logPageView } from '../core/analytics';
import Header from '../components/Header';

//import { Page } from '../components/Styled/Common';

type Props = {
  title?: string;
  children: any;
};

export const Page = styled.div`
  text-decoration: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20px;
  padding-bottom: 100px;
  max-width: 900px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100%;
  background: white;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0px;
  }
`;

const Content = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
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
      <React.Fragment>
        <Head>
          <title>File-lehti</title>
          <link rel="shortcut icon" href="static/icon.svg" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </Head>
        <Content>
          <Page>
            <Header />
            {children}
            <Footer />
          </Page>
        </Content>
      </React.Fragment>
    );
  }
}

export default Layout;
