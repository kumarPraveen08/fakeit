const fake = require("../data/quotes.js");
const random = require("./random.js");

/* @returns {object} 
- A anime quote */
exports.animeQuote = () => {
  return fake.animeQuotes[random.r(fake.animeQuotes)];
};

/* @returns {object} 
- A quote */
exports.quote = () => {
  return fake.quotes[random.r(fake.quotes)];
};

/* @returns {object} 
- A bhagavad gita verse */
exports.bhagavadGitaVerse = () => {
  return fake.bhagavadGitaVerses[random.r(fake.bhagavadGitaVerses)];
};

/* @returns {object} 
- A bible verse */
exports.bibleVerse = () => {
  return fake.bibleVerses[random.r(fake.bibleVerses)];
};

/* @returns {object} 
- A tongue twister */
exports.tongueTwister = () => {
  return fake.tongueTwisters[random.r(fake.tongueTwisters)];
};
