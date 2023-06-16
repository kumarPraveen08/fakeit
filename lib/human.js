const fake = require("../data/human.js");
const random = require("./random.js");

/* @returns {string} 
- human emotions */
exports.emotion = () => {
  return fake.emotions[random.r(fake.emotions)];
};

/* @returns {string} 
- human body part */
exports.bodyPart = () => {
  return fake.bodyParts[random.r(fake.bodyParts)];
};
