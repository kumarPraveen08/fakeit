const random = require("./random.js");
const fake = require("../data/alias.js");

/* @returns {object} 
- A awesome name */
exports.awesomeName = () => {
  const n = fake.names[random.r(fake.names)];
  const leetChars = {
    A: "4",
    E: "3",
    G: "6",
    I: "1",
    O: "0",
    S: "5",
    T: "7",
  };
  return {
    name: n.toUpperCase(),
    catchy_name: `${n
      .split("")
      .map((char) => leetChars[char.toUpperCase()] || char)
      .join("")
      .toUpperCase()}`,
  };
};

/* @returns {object} 
- A hacker name */
exports.hackerName = () => {
  const n = fake.names[random.r(fake.names)];
  const leetChars = {
    A: "4",
    E: "3",
    G: "6",
    I: "1",
    O: "0",
    S: "5",
    T: "7",
  };
  return `${n
    .split("")
    .map((char) => leetChars[char.toUpperCase()] || char)
    .join("")
    .toUpperCase()}`;
};
