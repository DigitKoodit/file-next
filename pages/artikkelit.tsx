import * as React from 'react';
import propLoader from '../core/propLoader';
import { fetchAllArticles } from '../core/api';
import styled from 'styled-components';
import { fonts } from '../styles/stylesheet';
import { RichTextContent } from 'contentful';

interface Props {
  data: FieldObject[];
}

interface FieldObject {
  id: string;
  title: string;
  description: string;
  content: RichTextContent;
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

function filterArticleBy(str: string) {
  const lowerCased = str.toLowerCase();
  return (target: FieldObject) => {
    const { content, description, title } = target;
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
  return <input placeholder="Filteröi" onChange={setFilter} />;
};

const Articles: React.SFC<any> = (props: Props) => {
  const [filter, setFilter] = React.useState('');
  const [filteredData, setFilteredData] = React.useState(props.data);
  React.useEffect(() => {
    const articleFilter = filterArticleBy(filter);
    setFilteredData(props.data.filter(articleFilter));
  }, [filter]);
  return (
    <React.Fragment>
      <SearchField
        setFilter={(event: React.ChangeEvent<HTMLInputElement>) =>
          setFilter(event.target.value)
        }
      />
      {filteredData.map(item => (
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
