const animal = require("../data/animal.js");
const random = require("./random.js");

// ANIMALS

/* @returns {string} 
- A bird name */
exports.bird = () => {
  return animal.birds[random.r(animal.birds)];
};

/* @returns {string} 
- A pet name */
exports.petName = () => {
  return animal.petNames[random.r(animal.petNames)];
};

/* @returns {string} 
- A mammal name */
exports.mammal = () => {
  return animal.mammals[random.r(animal.mammals)];
};

/* @returns {string} 
- A reptile name */
exports.reptile = () => {
  return animal.reptiles[random.r(animal.reptiles)];
};

/* @returns {string} 
- A fish name */
exports.fish = () => {
  return animal.fish[random.r(animal.fish)];
};

/* @returns {string} 
- A insect name */
exports.insect = () => {
  return animal.insects[random.r(animal.insects)];
};

/* @returns {string} 
- A amphibian name */
exports.amphibian = () => {
  return animal.amphibians[random.r(animal.amphibians)];
};

/* @returns {string} 
- A mollusk name */
exports.mollusk = () => {
  return animal.mollusks[random.r(animal.mollusks)];
};

/* @returns {string} 
- A crustacean name */
exports.crustacean = () => {
  return animal.crustaceans[random.r(animal.crustaceans)];
};

/* @returns {string} 
- A arachnid name */
exports.arachnid = () => {
  return animal.arachnids[random.r(animal.arachnids)];
};

/* @returns {string} 
- A echinoderm name */
exports.echinoderm = () => {
  return animal.echinoderms[random.r(animal.echinoderms)];
};

/* @returns {string} 
- A annelid name */
exports.annelid = () => {
  return animal.annelids[random.r(animal.annelids)];
};

/* @returns {string} 
- A sponge name */
exports.sponge = () => {
  return animal.sponges[random.r(animal.sponges)];
};

/* @returns {object} 
- A animal name and type */
exports.animal = () => {
  const r = Math.random();
  let result;

  r < 1 / 12
    ? (result = { name: this.bird(), type: "bird" })
    : r < 2 / 12
    ? (result = { name: this.mammal(), type: "mammal" })
    : r < 3 / 12
    ? (result = { name: this.reptile(), type: "reptile" })
    : r < 4 / 12
    ? (result = { name: this.fish(), type: "fish" })
    : r < 5 / 12
    ? (result = { name: this.insect(), type: "insect" })
    : r < 6 / 12
    ? (result = { name: this.amphibian(), type: "amphibian" })
    : r < 7 / 12
    ? (result = { name: this.mollusk(), type: "mollusk" })
    : r < 8 / 12
    ? (result = { name: this.crustacean(), type: "crustacean" })
    : r < 9 / 12
    ? (result = { name: this.arachnid(), type: "arachnid" })
    : r < 10 / 12
    ? (result = { name: this.echinoderm(), type: "echinoderm" })
    : r < 11 / 12
    ? (result = { name: this.annelid(), type: "annelid" })
    : (result = { name: this.sponge(), type: "sponge" });

  return result;
};

console.log(this.animal());
