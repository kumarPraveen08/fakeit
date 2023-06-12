const fake = require("../data/car.js");
const random = require("./random.js");

/* @returns {string} 
- A vehicle model */
exports.model = () => {
  return fake.carModels[random.r(fake.carModels)];
};

/* @returns {string} 
- A vehicle color */
exports.color = () => {
  return fake.carColors[random.r(fake.carColors)];
};

/* @returns {string} 
- A vehicle maker */
exports.maker = () => {
  return fake.carMakes[random.r(fake.carMakes)];
};

/* @returns {string} 
- A vehicle engine */
exports.engine = () => {
  return fake.engineTypes[random.r(fake.engineTypes)];
};

/* @returns {string} 
- A vehicle year */
exports.carYear = () => {
  const currentYear = new Date().getFullYear();
  return random.rn(currentYear - 1980 + 1) + 1980;
};

/* @returns {string} 
- A vehicle details */
exports.carDetails = () => {
  return {
    make: this.maker(),
    model: this.model(),
    color: this.color(),
    year: this.carYear(),
    engineType: this.engine(),
  };
};
