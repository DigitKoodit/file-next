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
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  background: #F3F7F9;
  font-family: ${fonts.sans};
  line-height: 1.5;
  * {
    box-sizing: border-box;
  }
`;


export const ContainerBody = styled.div`
  text-decoration: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;

  & > div {
    text-decoration: none;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

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
      <>
        <Head>
          <title>File-lehti</title>
        </Head>
        <Container>
          <ContainerBody>
            <Content>
              <Page>
                <Header />
                {children}
                <Footer />
              </Page>
            </Content>
          </ContainerBody>
        </Container>
      </>
    );
  }
}

export default Layout;
