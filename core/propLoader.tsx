import * as React from 'react';
import Layout from '../components/Layout';

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
          <Component {...this.props} />
        </Layout>
      );
    }
  };
};

export default propLoader;
