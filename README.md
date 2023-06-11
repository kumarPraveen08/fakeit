# FAKEIT

Fake Details Generator
<<<<<<< HEAD
20+ functions and coming more...
=======
>>>>>>> refs/remotes/origin/main

## Install

```javascript
npm install fakeit ~~ upcoming
```

## Usage

```javascript
// ESM
import { person, country, book } from "@praveen/fakeit";

// CJS
const { person, country, book } = require("@praveen/fakeit");

const createRandomPerson = () => {
  return {
    fisrtname: person.first(),
    lastname: person.surname(),
    fullname: person.fullname(),
    gender: person.gender(),
    prefix: person.prefix(),
    suffix: person.suffix(),
  };
};

const createRandomBook = () => {
  return {
    title: book.title(),
    author: book.author(),
    genre: book.genre(),
  };
};

const createRandomCountry = () => {
  return {
    name: country.name(),
    state: country.state(),
    city: country.city(),
    pincode: country.postalCode(),
    houseNo: country.house(),
    address: country.address(),
    tld: country.tld(),
    latitude: country.latitude(),
    longtitude: country.longtitude(),
    currency: country.currency(),
    isoCode: country.isoCode(),
    callCode: country.callCode(),
    language: country.language(),
    timezone: country.timezone(),
    fullAdderss: country.fullAdderss(),
  };
};
```

#### Other methods and options are coming soon...
