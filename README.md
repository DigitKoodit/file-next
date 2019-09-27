# Jouluristeily - Next

Freshest iteration of the Jouluristeily application. This time built with next. The idea is for this version to replace both the website and the applications.

The application is built using `Next.js` and used `Contentful` as it's CMS.

## Features

- Dynamic data fetching from contentful
- Server rendering through next.js
- Typescript
- Styled components for styling

## Development

To run the applicatou need certain secretsion, y

```bash
```

## Release



## Contentful data models

Contentful data models have a bit of depth to them, so I felt it likely to be of use to provide samples here.


### Event elementti Contentfulissa
```javascript
  {
    sys: {
      space: { sys: { type: 'Link', linkType: 'Space', id: 'xxxxxx' } },
      id: 'xxxxx',
      type: 'Entry',
      createdAt: '2018-11-22T18:10:16.725Z',
      updatedAt: '2018-11-22T18:10:16.725Z',
      environment: {
        sys: { id: 'master', type: 'Link', linkType: 'Environment' }
      },
      revision: 1,
      contentType: {
        sys: { type: 'Link', linkType: 'ContentType', id: 'event' }
      },
      locale: 'en-US'
    },
    fields: {
      title: 'Trubaduuri Dibba Dirlandaa',
      description: 'Trubaduuri Dibba Dirlandaa viihdyttää Pubissa (Kansi 7)',
      startTime: '2018-11-29T20:00+02:00',
      endTime: '2018-11-29T21:45+02:00',
      location: 'Pubi',
      deck: 7
    }
  }
```

### Page elementti Contenfulissa
```javascript
  {
    sys: {
      space: { sys: { type: 'Link', linkType: 'Space', id: 'xxxxx' } },
      id: 'xxxxx',
      type: 'Entry',
      createdAt: '2018-11-10T13:29:35.764Z',
      updatedAt: '2018-11-18T16:04:03.827Z',
      environment: {
        sys: { id: 'master', type: 'Link', linkType: 'Environment' }
      },
      revision: 2,
      contentType: {
        sys: { type: 'Link', linkType: 'ContentType', id: 'page' }
      },
      locale: 'en-US'
    },
    fields: {
      title: 'Etusivu',
      text: 'Content of page in markdown format' // This is where the description would be.
      id: 'id_home'
    }
  }

```