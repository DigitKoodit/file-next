import { createClient, Entry } from 'contentful';
import { ArticleObject } from 'types';

const ARTICLE_TYPE: 'article' = 'article';

export function createApi() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN
  });
  function fetchContentTypes() {
    return client
      .getContentTypes()
      .then(response => response.items)
      .catch(error => console.error('err', error)); // tslint:disable-line
  }

  function fetchContentfulEntries<T>(
    query: Partial<{
      limit: number;
      content_type: string;
      query: string;
    }>
  ): Promise<void | Entry<T>[]> {
    return (
      client
        // Read the documents for information on the query:
        // https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters
        .getEntries<T>(query)
        .then(response => response.items)
        .catch(err => console.error('API-call went wrong', err))
    ); // tslint:disable-line
  }

  function fetchSingleEntry<T>(query: string): Promise<Entry<T> | void> {
    return client
      .getEntry<T>(query)
      .then(response => response)
      .catch(err => console.error('Single entry fetching failed', err));
  }
  return {
    fetchContentTypes,
    fetchContentfulEntries,
    fetchSingleEntry
  };
}

// A response handler that provides a default response for the wanted data-types.
function buildResponseHandler<R, T extends { data: R | R[]; type: string }>(
  defaultData: Pick<T, 'data'>
) {
  return (data: void | R | R[]): { data: R | R[]; type: string } => {
    if (!data) {
      return { ...defaultData, type: 'error' };
    }
    return {
      ...defaultData,
      type: 'success',
      data
    };
  };
}

export const fetchAllArticles = () => async () => {
  const responseHandler = buildResponseHandler<Entry<ArticleObject>, any>({
    data: []
  });
  return createApi()
    .fetchContentfulEntries<ArticleObject>({
      content_type: ARTICLE_TYPE,
      limit: 20
    })
    .then(responseHandler);
};

export const fetchFirstX = (x: number) => async () => {
  const responseHandler = buildResponseHandler<Entry<ArticleObject>, any>({
    data: []
  });

  return createApi()
    .fetchContentfulEntries<ArticleObject>({
      content_type: ARTICLE_TYPE,
      limit: x
    })
    .then(responseHandler);
};

export const fetchArticle = () => async (options: any) => {
  const { query } = options;
  const reponseHandler = buildResponseHandler<Entry<ArticleObject>, any>({
    data: null
  });
  return createApi()
    .fetchSingleEntry<ArticleObject>(query.id)
    .then(reponseHandler);
};
