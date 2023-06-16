const fake = require("../data/car.js");
const random = require("./random.js");

/* @returns {string} 
- A transport vehicle name */
exports.transport = () => {
  return fake.vehicles[random.r(fake.vehicles)];
};
