const email = require("../helpers/email.js");
const random = require("./random.js");

exports.image = (w = 200, h = 200) => {
  return `http://lorempixel.com/${w}/${h}`;
};

exports.imageWithKeyword = (w = 200, h = 200, keyword = "dog") => {
  return `https://loremflickr.com/${w}/${h}/${keyword}`;
};

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

exports.url = () => {
  return `http://${email.domainWord(random.rrn(4, 10))}.com/${email.domainWord(
    random.rrn(5, 8)
  )}`;
};
