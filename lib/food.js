const fake = require("../data/food.js");
const random = require("./random.js");

/* @returns {string} 
- A fruit name */
exports.fruit = () => {
  return fake.fruits[random.r(fake.fruits)];
};

/* @returns {string} 
- A vegetable name */
exports.vegetable = () => {
  return fake.vegetables[random.r(fake.vegetables)];
};
