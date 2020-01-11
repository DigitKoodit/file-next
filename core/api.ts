import { createClient } from 'contentful';

const ARTICLE_TYPE: 'article' = 'article';

export function createApi() {
  console.log('Creating api', process.env);
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN
  });
  return {
    fetchContentTypes: () => {
      return client
        .getContentTypes()
        .then(response => response.items)
        .catch(error => console.error('err', error)); // tslint:disable-line
    },

    fetchContentfulData: id => {
      return client
        .getEntries({ content_type: id, include: 2 })
        .then(response => response.items)
        .catch(err => console.error('API-call went wrong', err)); // tslint:disable-line
    }
  };
}

export const fetchAllArticles = () => async () => {
  return createApi()
    .fetchContentfulData(ARTICLE_TYPE)
    .then((data: any) => {
      return { data: data.map(item => ({ ...item.fields })) };
    });
};

export const fetchArticle = () => async (options: any) => {
  const { pathname, query } = options;
  console.log(query, pathname);
  return createApi()
    .fetchContentfulData(ARTICLE_TYPE)
    .then(data => {
      const correct =
        data && data.find((item: any) => item.fields.id === query.id);
      if (!correct) {
        return {
          type: 'error',
          data: null
        };
      }
      return {
        type: 'success',
        data: correct.fields
      };
    });
};
