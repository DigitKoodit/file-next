import * as React from 'react';
import styled from 'styled-components';
import marked from 'marked';
import { fadeInLeft } from './Common';
import { fonts } from '../../styles/stylesheet';

const Markdown = styled.div`
  ${fadeInLeft}
  overflow-y: none;
  overflow-wrap: break-word;
  width: 100%;¨
  font-weight: bold; 

  h1,
  h2,
  h3 {
    font-family: ${fonts.sans};
    opacity: 0;
    animation: fade-in-left 0.5s ease forwards;
    font-weight: 400;
    text-decoration: none;
  }

  & > h2,
  h3 {
    font-family: ${fonts.sans};
    opacity: 0;
    delay: 0.1s;
    font-weight: 400;
  }

  & > p {
    opacity: 0;
    animation: fade-in-left 0.5s ease forwards;
    animation-delay: 0.2s;
    font-family: ${fonts.serif};
  }

  & img {
    width: 400px;
    max-width: 100%;
    display: inherit;
    margin-left: auto;
    margin-right: auto;
  }
`;

interface Props {
  content: string;
}

export default ({ content = '### ...' }: Props) => (
  <Markdown
    dangerouslySetInnerHTML={{ __html: marked(content, { sanitize: true }) }}
  />
);
