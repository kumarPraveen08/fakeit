const fake = require("../data/celebrity");
const random = require("./random");

/* @returns {string} 
- A random actor */
exports.actor = () => {
  return fake.actors[random.r(fake.actors)];
};

/* @returns {string} 
- A random business person */
exports.businessPerson = () => {
  return fake.businessPersons[random.r(fake.businessPersons)];
};

/* @returns {string} 
- A random sports person */
exports.sportsPersons = () => {
  return fake.sportsPersons[random.r(fake.sportsPersons)];
};
