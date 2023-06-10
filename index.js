const book = require("./data/book.js");
const random = require("./random.js");

// BOOK

/* @returns {string} 
- A book title */
exports.title = () => {
  return book.Books.title[random.r(book.Books.title)];
};

/* @returns {string} 
- A book author name */
exports.author = () => {
  return book.Books.author[random.r(book.Books.author)];
};

/* @returns {string} 
- A book genre */
exports.genre = () => {
  return book.Books.genre[random.r(book.Books.genre)];
};

/* @returns {object} 
- A book name */
exports.bookObject = () => {
  return {
    title: this.title(),
    author: this.author(),
    genre: this.genre(),
  };
};
