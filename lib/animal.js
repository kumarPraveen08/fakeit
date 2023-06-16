const fake = require("../data/animal.js");
const random = require("./random.js");

// ANIMALS

/* @returns {string} 
- A bird name */
exports.bird = () => {
  return fake.birds[random.r(fake.birds)];
};

/* @returns {string} 
- A pet name */
exports.petName = () => {
  return fake.petNames[random.r(fake.petNames)];
};

/* @returns {string} 
- A mammal name */
exports.mammal = () => {
  return fake.mammals[random.r(fake.mammals)];
};

/* @returns {string} 
- A reptile name */
exports.reptile = () => {
  return fake.reptiles[random.r(fake.reptiles)];
};

/* @returns {string} 
- A fish name */
exports.fish = () => {
  return fake.fish[random.r(fake.fish)];
};

/* @returns {string} 
- A insect name */
exports.insect = () => {
  return fake.insects[random.r(fake.insects)];
};

/* @returns {string} 
- A amphibian name */
exports.amphibian = () => {
  return fake.amphibians[random.r(fake.amphibians)];
};

/* @returns {string} 
- A mollusk name */
exports.mollusk = () => {
  return fake.mollusks[random.r(fake.mollusks)];
};

/* @returns {string} 
- A crustacean name */
exports.crustacean = () => {
  return fake.crustaceans[random.r(fake.crustaceans)];
};

/* @returns {string} 
- A arachnid name */
exports.arachnid = () => {
  return fake.arachnids[random.r(fake.arachnids)];
};

/* @returns {string} 
- A echinoderm name */
exports.echinoderm = () => {
  return fake.echinoderms[random.r(fake.echinoderms)];
};

/* @returns {string} 
- A annelid name */
exports.annelid = () => {
  return fake.annelids[random.r(fake.annelids)];
};

/* @returns {string} 
- A sponge name */
exports.sponge = () => {
  return fake.sponges[random.r(fake.sponges)];
};

/* @returns {string} 
- A cat breed */
exports.catBreed = () => {
  return fake.catBreeds[random.r(fake.catBreeds)];
};

/* @returns {string} 
- A dog breed */
exports.dogBreed = () => {
  return fake.dogBreeds[random.r(fake.dogBreeds)];
};

/* @returns {object} 
- A animal name and type */
exports.animalInfo = () => {
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
