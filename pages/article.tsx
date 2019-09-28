import * as React from 'react';
// import Markdown from '../components/Styled/Markdown';
import { fetchArticle } from '../core/api';
import propLoader from '../core/propLoader';

interface Props {
  type: 'error' | 'success';
  data: any;
}

const Article = (props: Props) => {
  console.log(props.data);
  return (
    <div>
      {JSON.stringify(props.data.content, null, 2)}
      {/* <Markdown content={props.data.content} /> */}
    </div>
  );
};

export default propLoader(Article, fetchArticle());
