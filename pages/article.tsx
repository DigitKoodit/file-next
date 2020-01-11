import * as React from 'react';
// import Markdown from '../components/Styled/Markdown';
import { fetchArticle } from '../core/api';
import propLoader from '../core/propLoader';
import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styled from 'styled-components';
import { Document } from '@contentful/rich-text-types';
import { ArticleObject } from 'types';
import Markdown from '../components/Styled/Markdown';

const sanitizeHtml = (document: Document) => {
  const contentfulHtml = documentToHtmlString(document);
  return { __html: contentfulHtml };
};

const RichHtmlBlock = styled.section`
  white-space: pre-line;
  display: block;
  width: 100%;
`;

interface Props {
  type: 'success' | 'error';
  data: Entry<ArticleObject> | null;
}

const Article = (props: Props) => {
  console.log('Props', props.data);
  if (!props.data) {
    return <span>No data yet... Loading...</span>;
  }
  if (props.type === 'error') {
    return <span>Could not load article, check for errors...</span>;
  }
  return (
    <React.Fragment>
      <Markdown content={props.data.fields.description} />

      <RichHtmlBlock
        dangerouslySetInnerHTML={sanitizeHtml(props.data.fields.content)}
      />
    </React.Fragment>
  );
};

export default propLoader(Article, fetchArticle());
