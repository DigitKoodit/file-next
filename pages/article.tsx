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
import { fonts } from '../styles/stylesheet';

// import { createClient, getEntries } from 'contentful';

export const Html = styled.html`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  background: #F3F7F9;
  #background: #efefef;
  & * {
    font-family: ${fonts.sans};
    line-height: 1.5;
  }
  & * {
    box-sizing: border-box;
  }
`;

export const Body = styled.body`
  overflow: visible;
  text-decoration: none;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;

  & * {
    box-sizing: border-box;
  }

  & > div {
    text-decoration: none;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

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

const Image = styled.img`
  width: 90%;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-self: center;
`;
const VideoContainer = styled.div`
  max-width: 90%;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-self: center;
`;

const Video = styled.video`
  max-width:100%;
  border-radius: 10px;
`;

// Returns JSX
function renderMedia(file) {
  if (file.contentType === 'video/mp4') {
    return (
      <VideoContainer>
        <div className='embed-responsive embed-responsive-16by9'>
          <Video controls>
            <source src={file.url} type='video/mp4'/>
            <p>Your browser doesnt support HTML5 video.</p>
          </Video>
        </div>
      </VideoContainer>
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
  p {
    line-height: 1.75;
  }

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
