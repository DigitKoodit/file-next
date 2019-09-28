import * as React from 'react';
import { useRouter } from 'next/router';
import propLoader from '../core/propLoader';
import { fetchArticle } from '../core/api';

// async function dataFetcher(route: string, callback: (data: any) => void) {
//   React.useEffect(() => {
//     const data = fetchArticle(route);
//     callback(data);
//   }, []);

// }

const Article = () => {
  const router = useRouter();
  // const [ state, setState ] = React.useState(null);
  // const articleTitle = router.query.title;
  // dataFetcher(articleTitle as string, setState);
  return <div>{JSON.stringify(router.query, null, 2)}</div>;
};

export default propLoader(Article, fetchArticle());
