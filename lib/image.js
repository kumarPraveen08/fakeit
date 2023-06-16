const email = require("../helpers/email.js");
const random = require("./random.js");

/* @returns {string} 
- image with width and height */
exports.image = (w = 200, h = 200) => {
  return `http://lorempixel.com/${w}/${h}`;
};

/* @returns {string} 
- image with width, height and keyword */
exports.imageWithKeyword = (w = 200, h = 200, keyword = "dog") => {
  return `https://loremflickr.com/${w}/${h}/${keyword}`;
};

/* @returns {string} 
- placeholder image with width, height, bgcolor, color, format, text */
exports.templateImage = (
  w = 200,
  h = 200,
  b = "000",
  c = "fff",
  f = "",
  t = ""
) => {
  t = t.replaceAll(" ", "+");
  return `http://dummyimage.com/${w}x${h}/${b}/${c}${f}${t && "&text="}${
    t && t
  }`;
};

/* @returns {string} 
- random url address (URL is not valid) */
exports.url = () => {
  return `http://${email.domainWord(random.rrn(4, 10))}.com/${email.domainWord(
    random.rrn(5, 8)
  )}`;
};
