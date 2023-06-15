# FAKEIT

Fake Info Generator  
115+ functions and coming more...

## Install

```javascript
npm install fakeit ~~ upcoming
```

## Simple Usage

### Require

```javascript
// ESM
import { person, country, book, animal } from "fakeit";
OR
import fake from "fakeit";

// CJS
const { person, country, book, animal } = require("fakeit");
OR
const fake from "fakeit";
```

### Example

```javascript
// const { book } = require("fakeit");
const createRandomBook = () => {
  return {
    title: book.title(), // Pride and Prejudice
    author: book.author(), // William Faulkner
    genre: book.genre(), // Crime
    genre: book.bookInfo(), // Object
  };
};

// const fake = require("fakeit");
const createRandomBook = () => {
  return {
    title: fake.book.title(), // Pride and Prejudice
    author: fake.book.author(), // William Faulkner
    genre: fake.book.genre(), // Crime
    genre: fake.book.bookInfo(), // Object
  };
};
```

## All Methods

### Book

```javascript
title() String
author() String
genre() String
bookInfo() Object
```

### Country

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
countryInfo() Object
```

### Person

```javascript
gender() String
male() String
female() String
surname() String
name() String
person() Object
prefix() String
suffix() String
personInfo() Object
age() Number
birth() String
zodiac() String
profile(size) String // (200)
profileWithId(size, string) String // (200, 'user1')
avatar1(w,h,shape,bg,blur,sat) String // (200, 200, 'circle', 'ffffff', 50, 100)
avatar2(w,h,shape,bg,blur,sat) String // (200, 200, '', 'ffffff', 50, 100)
avatar3(w,h,shape,bg,blur,sat) String // (200, 200, 'circle', '000000', 50, 100)
avatar4(w,h,shape,bg,blur,sat) String // (200, 200, 'circle', 'ffffff', 50, 100)
avatar5(w,h,shape,bg,blur,sat) String // (200, 200, 'circle', 'ffffff', 50, 100)
personInfo(); Object
phone() Number
bloodGroup() String
personWeight() Number
personHeight() Number
favoriteColor() String
eyeColor() String
hairColor() String
favoriteStar() String
favoriteActress() String
favoriteActor() String
personCard() Object
personVehicle() Object
userAgent() String

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
animalInfo() Object
```

### Company

```javascript
companyName() String
slogan() String
smallSlogan() String
sloganWithKeyword(string) String
domain() String
companyEmail() String
companyInfo(); Object
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
userFirstName() String
userLastName() String
userAge() Number
userBirth(age) String // (29)
userProfileImage(size) String // size (200)
userZodiac() String
userGender() String
email() String
password(length, includeSpecialChars, includeSimilarChars) String // (16, true, true)
website() String
userAddress() Object
ipAddress() String
macAddress() String
ipV4Address() String
ipV4Address() String
ipV6Address() String
userInfo(size) Array // profile image size/(200)
```

### Credit Card

```javascript
visa() Object
mastercard() Object
unionpay() Object
diners() Object
discover() Object
amex() Object
card(string) Object // ('visa')
```

### Car

```javascript
maker() String
model() String
color() String
carYear() Number
engine() String
carInfo() Object
```

### Post

```javascript
post(postId) Object
hashtag() Array
getCommentsByPostId(postId) Object
getCommentById(commentId) Object
getUserById(userId) Object
getPostsByUserId(userId) Object
getPostById(postId) Object
posts() Object
comments() Object
users() Object
```

### To DO

#### Other methods and options are coming soon...
