# FAKEIT

Fake Info Generator  
145+ functions and coming more...

## Install

```javascript
npm install @praveen_prajapati/fakeit
```

## Simple Usage

### Require

```javascript
// ESM
import { person, country, book, animal } from "fakeit";
OR
import fake from "@praveen_prajapati/fakeit";

// CJS
const { person, country, book, animal } = require("fakeit");
OR
const fake from "@praveen_prajapati/fakeit";
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

```
{ person, country, book, animal, card, image, car, post, user, company, lorem, business, quote, alias, space, food, human, house, space, vehicle, song, science}
```

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
phoneFormat(string, string, string) String // ("9876543210", "-", "+1")
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
catBreed() String
dogBreed() String
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
urlLorempixel() String // (width, height, bgcolor, color, format, text)
urlPlaceholder() String // (width, height, text)
urlPicsumPhotos() String // (width, height, isGrayscale, blur)
urlLoremFlickr() String // (width, height, keyword)
avatarDoodleipsumFive() String // (width, height, shape, bgcolor, blur, saturation)
avatarDoodleipsumFour() String // (width, height, shape, bgcolor, blur, saturation)
avatarDoodleipsumThree() String // (width, height, shape, bgcolor, blur, saturation)
avatarDoodleipsumTwo() String // (width, height, shape, bgcolor, blur, saturation)
avatarDoodleipsumOne() String // (width, height, shape, bgcolor, blur, saturation)
avatarLegacy() String
avatarGitHub() String
avatar() String
city() String // (width, height, randomize:boolean)
business() String // (width, height, randomize:boolean)
food() String // (width, height, randomize:boolean)
url() String // (width, height, randomize:boolean)
fashion() String // (width, height, randomize:boolean)
animal() String // (width, height, randomize:boolean)
cat() String // (width, height, randomize:boolean)
dog() String // (width, height, randomize:boolean)
nature() String // (width, height, randomize:boolean)
nightlife() String // (width, height, randomize:boolean)
people() String // (width, height, randomize:boolean)
sports() String // (width, height, randomize:boolean)
transport() String // (width, height, randomize:boolean)
technics() String // (width, height, randomize:boolean)
abstract() String // (width, height, randomize:boolean)
bird() String // (width, height, randomize:boolean)
image() String // (width, height)
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
jcb() Object
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

### Quote

```javascript
animeQuote() Object
bibleVerse() Object
bhagavadGitaVerse() Object
quote() Object
tongueTwister() String
```

### Alias

```javascript
hackerName() String
awesomeName() Object
```

### Lorem

```javascript
paragraphs(num, paragraphType, sentenceType, type) Array // (2, 'small', 'medium', 'lorem')
sentences(num, sentenceType, type) Array // (2, 'large', 'english')
words(num, type) String // (8, 'lorem')
numberToWords(string) String // ('120') // one hundred twenty
```

### Business

```javascript
name(string) String; // ('pearl')
```

### Space

```javascript
planet() String
galaxy() String
star() String
moon() String
```

### House

```javascript
flower() String
kitchen() String
instrument() String
furniture() String
room() String
```

### Human

```javascript
bodyPart() String
emotion() String
```

### Food

```javascript
vegetable() String
fruit() String
foodName() String
drink() String
```

### Vehicle

```javascript
transport() String
```

### Song

```javascript
songName() String
genre() String
```

### Science

```javascript
unit() Object
findChemicalElementsByElementGroup(string) Object // ('Nonmetal')
findChemicalElementBySymbol(string) Object // ('He')
findChemicalElementByAtomicNumber(number) Object // (10)
findChemicalElementByName(string) Object // ('Oxygen')
chemicalElement() Object
```

### Special Thanks

> dummyimage.com  
> loremflickr.com  
> lorempixel.com  
> via.placeholder.com  
> picsum.photos  
> doodleipsum.com  
> cloudflare-ipfs.com avatar  
> github avatars

### To DO

#### Other methods and options are coming soon...
