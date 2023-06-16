const fake = require("../data/house.js");
const random = require("./random.js");

/* @returns {string} 
- house room */
exports.room = () => {
  return fake.rooms[random.r(fake.rooms)];
};

/* @returns {string} 
- house furniture */
exports.furniture = () => {
  return fake.furnitures[random.r(fake.furnitures)];
};

/* @returns {string} 
- house instrument */
exports.instrument = () => {
  return fake.instruments[random.r(fake.instruments)];
};

/* @returns {string} 
- house kitchen item */
exports.kitchen = () => {
  return fake.kitchenItems[random.r(fake.kitchenItems)];
};

/* @returns {string} 
- house flower name */
exports.flower = () => {
  return fake.flowers[random.r(fake.flowers)];
};
