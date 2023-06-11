const fake = require("../data/country.js");
const random = require("./random.js");
const country = fake.Country[random.r(fake.Country)];

/* @returns {string} 
- A country name */
exports.name = () => {
  return country.name;
};

/* @returns {string} 
- A currency name */
exports.currency = () => {
  return country.currency;
};

/* @returns {string} 
- A calling code name */
exports.callCode = () => {
  return country.callCode;
};

/* @returns {string} 
- A iso code name */
exports.isoCode = () => {
  return country.isoCode;
};

/* @returns {string} 
- A language name */
exports.language = () => {
  return country.languages[random.r(country.languages)];
};

/* @returns {string} 
- A domain tld */
exports.tld = () => {
  return country.tld[random.r(country.tld)];
};

/* @returns {string} 
- A country timezone */
exports.timezone = () => {
  return country.timezone;
};

/* @returns {object} 
- A country details */
exports.countryDetails = () => {
  result = {
    name: this.name(),
    currency: this.currency(),
    language: this.language(),
    callCode: this.callCode(),
    isoCode: this.isoCode(),
    timezone: this.timezone(),
    tld: this.tld(),
  };
  return result;
};
