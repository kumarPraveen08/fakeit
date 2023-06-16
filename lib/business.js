const fake = require("../data/keyword.js");
const random = require("./random.js");

/* @returns {string} 
- Random business name with keyword */
exports.name = (keyword = "pearl") => {
  let r = Math.random();
  let res;
  r < 1 / 3
    ? (res = `${fake.preffix[random.r(fake.preffix)]}${keyword}`)
    : r < 2 / 3
    ? (res = `${keyword}${fake.suffix[random.r(fake.suffix)]}`)
    : r < 3 / 3
    ? (res = `${keyword}${fake.actual_suffix[random.r(fake.actual_suffix)]}`)
    : "";
  return res.charAt(0).toUpperCase() + res.slice(1);
};
