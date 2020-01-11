# File - Next

New setup for File Magazine blog.

The application is built using `Next.js` and used `Contentful` as it's CMS.

## Features

- Dynamic data fetching from contentful
- Server rendering through next.js
- Typescript
- Styled components for styling

## Development

A set of secrets are needed to run the application and get data. Get them from
the maintainer and include them in a `.env` file. Replace with actual tokens,
these are used automatically by dotenv.

```bash
CONTENTFUL_SPACE_ID="id"
CONTENTFUL_TOKEN="token"
CONTENTFUL_DRAFT_TOKEN="token" # Used for
GA_ID="google analytics"
```
