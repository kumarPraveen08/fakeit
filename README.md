# FAKEIT

Fake Details Generator  
50+ functions and coming more...

## Install

```javascript
npm install fakeit ~~ upcoming
```

## Simple Usage

### Require

```javascript
// ESM
import { person, country, book, animal } from "@praveen/fakeit";

// CJS
const { person, country, book, animal } = require("@praveen/fakeit");
```

### Person

```javascript
const createRandomPerson = () => {
  return {
    maleFirstName: person.male(), // sparsh
    femaleFirstName: person.female(), // hina
    lastname: person.surname(), // khandelwal
    fullname: person.name(), // sparsh khandelwal
    person: person.person(), // object - name with gender
    gender: person.gender(), // male
    prefix: person.prefix(), // Mr.
    suffix: person.suffix(), // III
    personDetails: person.personDetails(), // object
  };
};
```

### Book

```javascript
const createRandomBook = () => {
  return {
    title: book.title(), // Pride and Prejudice
    author: book.author(), // William Faulkner
    genre: book.genre(), // Crime
  };
};
```

### Country

```javascript
const createRandomCountry = () => {
  return {
    name: country.name(), // India
    state: country.state(), // Assam
    city: country.city(), // Silchar
    pincode: country.postalCode(), // 955094
    houseNo: country.house(), // 47
    address: country.address(), // Street No. 6, 4A Block
    tld: country.tld(), // .in
    latitude: country.latitude(), // 15.2464107
    longtitude: country.longtitude(), // 154.8926697
    currency: country.currency(), // { short: 'INR', long: 'Indian Rupee' }
    isoCode: country.isoCode(), // IN
    callCode: country.callCode(), // +91
    language: country.language(), // English
    timezone: country.timezone(), // Asia/Kolkata
    fullAdderss: country.fullAdderss(), // 47 Street No. 6, 4A Block - 955094 Silchar, Assam - India IN
    countryDetails: country.countryDetails(),
  };
};
```

## All Methods

### Book

```javascript
title() String
author() String
genre() String
bookDetails() Object
```

### Country

```javascript
male() String
female() String
surname() String
name() String
person() Object
gender() String
prefix() String
suffix() String
personDetails() Object
```

### Person

```javascript
name() String
state() String
city() String
postalCode() Number
house() Number
address() String
tld() String
latitude() Number
longtitude() Number
currency() String
isoCode() String
callCode() String
language() String
timezone() String
fullAdderss() String
countryDetails() Object
```

### Animal

```javascript
bird() String
mammal() String
reptile() String
fish() String
insect() String
amphibian() String
mollusk() String
crustacean() String
arachnid() String
echinoderm() String
annelid() String
sponge() String
animal() Object
```

### Company

```javascript
companyName() String
slogan() String
smallSlogan() String
sloganWithKeyword(string) String
domain() String
companyEmail() String
company(); Object
```

### Image

```javascript
image(w, h) String // (200, 200)
imageWithKeyword(w, h, string) String // (200, 200, dog)
templateImage(w, h, bgColor, color, format, text) String // (200, 300, 000000, ffffff, .png, placeholder)
```

### Url

```javascript
url() String
```

### User

```javascript
username() String
password(length, includeSpecialChars, includeSimilarChars) String // (16, true, true)
ipV4Address() String
ipV6Address() String
hashtag(num) Array
```

### To DO

#### Other methods and options are coming soon...

User
Credit card
Car
Post
