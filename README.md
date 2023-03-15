# novaposhtajs

[![npm version](https://badge.fury.io/js/novaposhtajs.svg)](https://badge.fury.io/js/novaposhtajs)

novaposhtajs is a TypeScript SDK for the NovaPoshta API. This library provides a simple, efficient, and flexible way to interact with the NovaPoshta API using JavaScript/TypeScript. The naming style for models and arguments has been changed to lower camel case, making the library more consistent with JavaScript style conventions.

## Features

- Full coverage of NovaPoshta API endpoints
- TypeScript support with type definitions
- Promisified methods for easy async/await usage
- Automatic request retries with customizable settings
- Lower camel case naming convention for models and arguments

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install novaposhtajs:

```bash
npm install novaposhtajs
```

## Usage
Here's a simple example of how to use the library:
```typescript
const { NovaPoshta, initNovaPoshta } = require('novaposhtajs');

const apiKey = 'your-api-key';
const novaPoshta: NovaPoshta = initNovaPoshta(apiKey);

// Get a list of cities
novaPoshta.address.getCities({ page: 1, limit: 10 })
  .then(cities => console.log(cities))
  .catch(error => console.error(error));
```

Export any response type
```typescript
const { AddressGetAreasResponse, initNovaPoshta } = require('novaposhtajs');

function anyActionWithArea(area: AddressGetAreasResponse) {
    console.log(area.ref, area.description);
}

const novaPoshta = initNovaPoshta();
const areas = await novaPoshta.address.getAreas({});
areas.map(area => anyActionWithArea(area))

```

## License
MIT
