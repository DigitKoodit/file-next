import * as React from 'react';
import propLoader from '../core/propLoader';
import { fetchAllArticles } from '../core/api';
import styled from 'styled-components';
import { fonts } from '../styles/stylesheet';
import { Entry } from 'contentful';
import { ArticleObject } from 'types';

interface Props {
  data: Entry<ArticleObject>[];
}

const Short = styled.div`
  text-align:left;
  width: 100%;
  h3 {
    font-size: 1.3rem;
    font-family: ${fonts.serif};
    font-weight: 600;
    color: gray;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    color: black;
  }

  p {
    font-family: ${fonts.serif};
    font-weight: 400;
    line-height: 1.2;
  }
`;
const Icon = styled.div`
  font-family: 'Material Icons';
  padding:5px;
  display: flex;
  align-items: center;
  font-size: 1.5em;
  width: 50%;
`;
const SearchInput = styled.input`
  padding: 5px;
  width: 100%;
  margin-left: 10px;
`;

function filterArticleBy(str: string) {
  const lowerCased = str.toLowerCase();
  return (target: Entry<ArticleObject>) => {
    const { content, description, title } = target.fields;
    if (!str) return true;
    // This is a bit of a cheat to read the deep contentful-data.
    const stringifiedContent = content && JSON.stringify(content);

    // If I recall correctly, indexOf is a fair bit faster than regex in most browsers.
    return (
      stringifiedContent.indexOf(lowerCased) !== -1 ||
      (description && description.toLowerCase().indexOf(lowerCased)) !== -1 ||
      (title && title.toLowerCase().indexOf(lowerCased)) !== -1
    );
  };
}

interface SearchFieldProps {
  setFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Very simple example filter.
const SearchField = (props: SearchFieldProps) => {
  const { setFilter } = props;
  return <SearchInput placeholder="Hae artikkeleista" onChange={setFilter} />;
};

const Articles: React.SFC<any> = (props: Props) => {
  console.log('Props in article', props.data);
  const [filter, setFilter] = React.useState('');
  const [filteredData, setFilteredData] = React.useState([]);
  React.useEffect(() => {
    const articleFilter = filterArticleBy(filter);
    console.log('Resetting this', props.data);
    if (!!props.data) {
      console.log(props.data);
      setFilteredData(props.data.filter(articleFilter));
    }
  }, [filter]);

  console.log();

  return (
    <React.Fragment>
      <Icon>search
      <SearchField
        setFilter={(event: React.ChangeEvent<HTMLInputElement>) =>
          setFilter(event.target.value)
        }
      />
      </Icon>
      {filteredData.map(item => (
        <Short key={item.sys.id}>
          <a href={`/article?id=${item.sys.id}`}><h3>{item.fields.title}</h3></a> 
        </Short>
      ))}
    </React.Fragment>
  );
};

const pageLoader = fetchAllArticles();

export default propLoader(Articles, pageLoader);
