const fake = require("../data/science.js");
const random = require("./random.js");

/* @returns {string} 
- A random periodic table element. */
exports.chemicalElement = () => {
  return fake.periodicTable[random.r(fake.periodicTable)];
};

/* @returns {string} 
- find a element by name */
exports.getChemicalElementByName = (name = "Hydrogen") => {
  return fake.periodicTable.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
};

/* @returns {string} 
- find a element by atomic number */
exports.getChemicalElementByAtomicNumber = (atomic_number = 1) => {
  return fake.periodicTable.find(
    (item) => item.atomic_number === atomic_number
  );
};

/* @returns {string} 
- find a element by symbol */
exports.getChemicalElementBySymbol = (symbol = "Og") => {
  return fake.periodicTable.find(
    (item) => item.symbol.toLowerCase() === symbol.toLowerCase()
  );
};

/* @returns {array} 
- find a element by group */
exports.getChemicalElementsByElementGroup = (group = "Nonmetal") => {
  return fake.periodicTable.filter(
    (item) => item.element_group.toLowerCase() === group.toLowerCase()
  );
};

/* @returns {array} 
- A scientific unit */
exports.unit = () => {
  return fake.siUnits[random.r(fake.siUnits)];
};
