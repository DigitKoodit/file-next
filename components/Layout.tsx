import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Footer from './Footer';
import { initGA, logPageView } from '../core/analytics';

type Props = {
  title?: string;
  children: any;
};

const Content = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
`;

export interface NaviItem {
  href: string;
  label: string;
  divider?: string;
}

const naviTree: NaviItem[] = [
  { href: '/index', label: 'Koti' },
  { href: '/artikkelit', label: 'Artikkelit' }
];

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
        </Head>
        <Content>
          {children}
          <Footer />
        </Content>
      </React.Fragment>
    );
  }
}

export default Layout;
