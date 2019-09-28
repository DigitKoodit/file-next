import * as React from 'react';
import Markdown from '../components/Styled/Markdown';

const Index: React.SFC<any> = (props: any) => {
  const { text } = props;
  return (
    <React.Fragment>
      <Markdown content={text} />
    </React.Fragment>
  );
};

export default Index;
