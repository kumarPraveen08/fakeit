const fake = require("../data/space.js");
const random = require("./random.js");

/* @returns {object} 
- A planet name */
exports.planet = () => {
  return fake.planets[random.r(fake.planets)];
};

/* @returns {object} 
- A moon name */
exports.moon = () => {
  return fake.moons[random.r(fake.moons)];
};

/* @returns {object} 
- A star name */
exports.star = () => {
  return fake.stars[random.r(fake.stars)];
};

/* @returns {object} 
- A galaxy name */
exports.galaxy = () => {
  return fake.galaxies[random.r(fake.galaxies)];
};
