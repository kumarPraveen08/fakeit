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

/* @returns {string} 
- A food name */
exports.foodName = () => {
  let r = Math.random();
  let res;
  r < 1 / 5
    ? (res = `${fake.foodType[random.r(fake.foodType)]} ${
        fake.foodIngredient[random.r(fake.foodIngredient)]
      } ${fake.nonVegfood[random.r(fake.nonVegfood)]}`)
    : r < 2 / 5
    ? (res = `${fake.foodType[random.r(fake.foodType)]} ${
        fake.foodIngredient[random.r(fake.foodIngredient)]
      } ${fake.seaFood[random.r(fake.seaFood)]}`)
    : r < 3 / 5
    ? (res = `${fake.foodType[random.r(fake.foodType)]} ${
        fake.foodIngredient[random.r(fake.foodIngredient)]
      } ${fake.makingFoodType[random.r(fake.makingFoodType)]}`)
    : r < 4 / 5
    ? (res = `${fake.vegFood[random.r(fake.vegFood)]} and ${
        fake.vegFood[random.r(fake.vegFood)]
      } ${fake.sideFood[random.r(fake.sideFood)]}`)
    : r < 5 / 5
    ? (res = `${fake.vegFood[random.r(fake.vegFood)]} ${
        fake.sideFood[random.r(fake.sideFood)]
      }`)
    : "";
  return res;
};

/* @returns {string} 
- A drink name */
exports.drink = () => {
  return `${fake.drinkPrefix[random.r(fake.drinkPrefix)]} ${
    fake.drinkSuffix[random.r(fake.drinkSuffix)]
  }`;
};
