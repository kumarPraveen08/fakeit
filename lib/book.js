const fake = require("../data/book.js");
const random = require("./random.js");

// BOOK

/* @returns {string} 
- A book title */
exports.title = () => {
  return fake.Books.title[random.r(fake.Books.title)];
};

/* @returns {string} 
- A book author name */
exports.author = () => {
  return fake.Books.author[random.r(fake.Books.author)];
};

/* @returns {string} 
- A book genre */
exports.genre = () => {
  return fake.Books.genre[random.r(fake.Books.genre)];
};

/* @returns {object} 
- A book Info */
exports.bookInfo = () => {
  return {
    title: this.title(),
    author: this.author(),
    genre: this.genre(),
  };
};
