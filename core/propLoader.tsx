import * as React from 'react';
import Layout from '../components/Layout';
import { Page } from '../components/Styled/Common';

const propLoader = (Component: any, loader?: (options: any) => void) => {
  return class extends React.Component<any, any> {
    static getInitialProps(options: any) {
      if (loader) {
        return loader(options);
      }
    }
    render() {
      return (
        <Layout>
          <Page>
            <Component {...this.props} />
          </Page>
        </Layout>
      );
    }
  };
};

export default propLoader;
