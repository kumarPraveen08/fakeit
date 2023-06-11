const fake = require("../data/country.js");
const random = require("./random.js");
const { generatePostalCode } = require("../helpers/pincode.js");
const country = fake.Country[random.r(fake.Country)];
const states = country.states;
const choose = random.rn(5);

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

// ADDRESS

/* @returns {string} 
- A country state */
exports.state = () => {
  return states[choose].name;
};

/* @returns {string} 
- A country city */
exports.city = () => {
  const cities = states[choose].cities;
  return cities[random.r(cities)];
};

/* @returns {string} 
- A country pincode */
exports.postalCode = () => {
  const isoCode = this.isoCode();
  return (postalCode = generatePostalCode(isoCode));
};

/* @returns {string} 
- A house number */
exports.house = () => {
  return random.rn(100) + 1;
};

/* @returns {string} 
- A house address */
exports.address = () => {
  return `Street No. ${random.rn(10) + 1}, ${random.rn(10)}${
    ["A", "B", "C"][random.rn(3)]
  } Block`;
};

/* @returns {number} 
- A random lat */
exports.latitude = () => {
  return (Math.asin(Math.random() * 2 - 1) * (180 / Math.PI)).toFixed(7);
};

/* @returns {number} 
- A random lng */
exports.longitude = () => {
  return (Math.random() * 360 - 180).toFixed(7);
};

/* @returns {number} 
- A full address */
exports.fullAddress = () => {
  return `${this.house()} ${this.address()} - ${this.postalCode()} ${this.city()}, ${this.state()} - ${this.name()} ${this.isoCode()}`;
};

/* @returns {object} 
- A country details */
exports.countryDetails = () => {
  const currency = this.currency();
  const language = this.language();
  const callCode = this.callCode();
  const isoCode = this.isoCode();
  const timezone = this.timezone();
  const tld = this.tld();
  const houseNo = this.house();
  const address = this.address();
  const postalCode = this.postalCode();
  const city = this.city();
  const state = this.state();
  const country = this.name();
  const latitude = this.latitude();
  const longitude = this.longitude();
  const fullAddress = `${houseNo} ${address} - ${postalCode} ${city}, ${state} - ${country} ${isoCode}`;

  const result = {
    currency,
    language,
    callCode,
    isoCode,
    timezone,
    tld,
    houseNo,
    address,
    postalCode,
    city,
    state,
    country,
    latitude,
    longitude,
    fullAddress,
  };
  return result;
};
