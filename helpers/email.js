const random = require("../lib/random.js");
const person = require("../lib/person.js");

exports.domainTld = [
  "co",
  "in",
  "com",
  "info",
  "org",
  "net",
  "coin",
  "us",
  "uk",
  "kr",
  "jp",
];

exports.domainWord = (min = 4, max = 12) => {
  const c = "bcdfghjklmnpqrstvwxyz"; //consonants
  const v = "aeiou"; //vowels

  let s = ""; //syllable
  let l = random.rrn(min, max);

  for (let i = 0; i < l; i++) {
    if (i % 2 === 0) {
      s += c[random.r(c)];
    } else {
      s += v[random.r(v)];
    }
  }

  return s;
};
