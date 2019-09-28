import * as React from 'react';
import propLoader from '../core/propLoader';
import { fetchAllArticles } from '../core/api';
import styled from 'styled-components';
import { fonts } from '../styles/stylesheet';

interface Props {
  data: FieldObject[];
}

interface FieldObject {
  id: string;
  title: string;
  description: string;
  content: string; // It's markdown.
}

const Short = styled.div`
  h3 {
    font-size: 1.3rem;
    font-family: ${fonts.serif};
    font-weight: 600;
    color: gray;
  }

  p {
    font-family: ${fonts.serif};
    font-weight: 400;
    line-height: 1.2;
  }
`;

const Articles: React.SFC<any> = (props: Props) => {
  console.log(props);
  return (
    <React.Fragment>
      {props.data.map(item => (
        <Short key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Short>
      ))}
    </React.Fragment>
  );
};

const pageLoader = fetchAllArticles();

export default propLoader(Articles, pageLoader);
