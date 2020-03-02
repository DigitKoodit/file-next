import * as React from 'react';
import propLoader from '../core/propLoader';
import { fetchFirstX } from '../core/api';
import styled, { keyframes } from 'styled-components';
import { fonts } from '../styles/stylesheet';

const scale = keyframes`
  0%: transform: scale(1.0)
  100%: transform: scale(1.03)
`;

const ArticleLink = styled.a`
  width: 100%;
  text-decoration: none;
  color: black;
`;
const Short = styled.div`
  overflow: none;
  text-align:left;
  width: 100%;
  background: #f7f7f7;
  margin-bottom: 15px;
  padding: 10px 20px 20px 20px;
  border-radius: 10px 10px 10px 10px;
  h3 {
    text-decoration: none;
    font-size: 1.3rem;
    font-family: ${fonts.serif};
    font-weight: 600;
    color: gray;
  }
  a {
    text-decoration: none;
    color: black;
    width: 100%;
  }

  p {
    text-decoration: none;
    font-family: ${fonts.serif};
    font-weight: 400;
    line-height: 1.2;
  }
  &:hover {
    animate: ${scale} 1s ease-in-out;
  }

  @media (max-width: 768px) {
    padding: 10px 50px 30px 30px;
  }
`;
const Digit = styled(Short)`
  background: url(static/digit.svg) top right no-repeat #f7f7f7;
  background-size: 130px 130px;
  //background: linear-gradient(135deg, rgba(247,247,247,1) 0%, rgba(251,255,201,1) 100%);
`;
const Asteriski = styled(Short)`
  background: url(static/asteriski.svg) top right no-repeat #f7f7f7;
  background-size: 130px 130px;
  //background: linear-gradient(135deg, rgba(247,247,247,1) 0%, rgba(233,255,213,1) 100%);
`;
const Nucleus = styled(Short)`
  background: url(static/nucleus.svg) top right no-repeat #f7f7f7;
  background-size: 130px 130px;
  //background: linear-gradient(135deg, rgba(247,247,247,1) 0%, rgba(224,225,255,1) 100%);
`;

const Index: React.SFC<any> = (props: any) => {
  const { data } = props;
  console.log(props);
  return (
    <React.Fragment>
      {data.map(item => (
        <ArticleLink  href={`/article?id=${item.sys.id}`}>
          {item.fields.guild == 'digit'?
            <Digit key={item.sys.id}>
              <h3>{item.fields.title}</h3>
              <p>{item.fields.description}</p>
            </Digit> 
          : item.fields.guild == 'asteriski' ?
            <Asteriski key={item.sys.id}>
              <h3>{item.fields.title}</h3>
              <p>{item.fields.description}</p>
            </Asteriski>
          :  item.fields.guild == 'nucleus' ?
            <Nucleus key={item.sys.id}>
              <h3>{item.fields.title}</h3>
              <p>{item.fields.description}</p>
            </Nucleus>
          :
            <Short key={item.sys.id}>
              <h3>{item.fields.title}</h3>
              <p>{item.fields.description}</p>
            </Short>
          }
        </ArticleLink>
        
      ))}
      {/* <p>{JSON.stringify(data, null, 2)}</p> */}
    </React.Fragment>
  );
};

export default propLoader(Index, fetchFirstX(3));
