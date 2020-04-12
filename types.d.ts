import { Document } from '@contentful/rich-text-types';

declare namespace JSX {
  interface IntrinsicAttributes {
    prop?: any;
  }
}

declare namespace process {
  interface env {
    CONTENTFUL_SPACE_ID: string;
    CONTENTFUL_TOKEN: string;
  }
}

declare var CONTENTFUL_SPACE_ID;
declare var CONTENTFUL_TOKEN;

type HttpRequestStatus = 'PENDING' | 'FULFILLED' | 'REJECTED' | '';

declare interface ArticleObject {
  id: string;
  guild: string;
  title: string;
  description: string;
  content: Document;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'

declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.svg" {
  const content: string;
  export default content;
}