const person = require("./data/person.js");
const random = require("./random.js");

// PERSON

/* @returns {string} 
- A first name */
exports.first = () => {
  return person.Person.first[random.r(person.Person.first)];
};

/* @returns {string} 
- A last name */
exports.last = () => {
  return person.Person.last[random.r(person.Person.last)];
};

/* @returns {string} 
- A name prefix */
exports.prefix = () => {
  return person.Person.prefix[random.r(person.Person.prefix)];
};

/* @returns {string} 
- A name suffix */
exports.suffix = () => {
  return person.Person.suffix[random.r(person.Person.suffix)];
};

/* @returns {string} 
- A full name */
exports.name = () => {
  return `${this.first()} ${this.last()}`;
};
