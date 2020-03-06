import * as React from 'react';
import { fetchArticle } from '../core/api';
import propLoader from '../core/propLoader';
import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styled from 'styled-components';
import { Document } from '@contentful/rich-text-types';
import { ArticleObject } from 'types';
import Markdown from '../components/Styled/Markdown';
import { renderToStaticMarkup } from 'react-dom/server'
// import { createClient, getEntries } from 'contentful';

const Image = styled.img`
  width: 90%;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-self: center;
`;
const Video = styled.div`
  max-width: 90%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-self: center;
`;

// Returns JSX
function renderMedia(file) {
  if (file.contentType === 'video/mp4') {
    return (
      <Video>
        <div className='embed-responsive embed-responsive-16by9'>
          <video controls>
            <source src={file.url} type='video/mp4'/>
            <p>Your browser doesnt support HTML5 video.</p>
          </video>
        </div>
      </Video>
    )
  } else if (file.contentType === 'image/jpeg') {
    return (<Image src={file.url} />)
  } else {
    return (<p>Unknown content type</p>)
  }
}

let options = {
  renderNode: {
    'embedded-asset-block': (node) => {
      let file = node.data.target.fields.file
      // I'm using react so it was easier for me to use JSX for what I was doing
      // here your renderMedia function could just return DOM strings and
      // the renderToStaticMarkup function can be ignored (it's react specific)
      let jsx = renderMedia(file)
      let markup = renderToStaticMarkup(jsx)
      return markup
    }
  }
}

const sanitizeHtml = (document: Document) => {
  const contentfulHtml = documentToHtmlString(document, options);
  return { __html: contentfulHtml };
};

const RichHtmlBlock = styled.section`
  white-space: pre-line;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: justify;
  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
    text-align: left;
  }
`;

interface Props {
  type: 'success' | 'error';
  data: Entry<ArticleObject> | null;
}

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_TOKEN
// });

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
      <h1><Markdown content={props.data.fields.title} /></h1>
      <b><Markdown content={props.data.fields.description} /></b>

      <RichHtmlBlock
        dangerouslySetInnerHTML={sanitizeHtml(props.data.fields.content)}
      />
      {console.log(props.data.fields.content)}
    </React.Fragment>
  );
};

export default propLoader(Article, fetchArticle());
