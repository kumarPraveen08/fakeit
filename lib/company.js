const fake = require("../data/company.js");
const random = require("./random.js");
const country = require("./country.js");
const email = require("../helpers/email.js");

/* @returns {string} 
- A company slogan */
exports.smallSlogan = () => {
  const beginning = fake.beginnings[random.r(fake.beginnings)];
  const ending = fake.endings[random.r(fake.endings)];
  const slogan = `${beginning} ${ending}`;
  return slogan;
};

/* @returns {string} 
- A company large slogan */
exports.slogan = () => {
  const sloganWords = [];

  sloganWords.push(fake.words[random.r(fake.words)]);
  sloganWords.push(fake.phrases[random.r(fake.phrases)]);
  sloganWords.push(fake.begin[random.r(fake.begin)]);
  sloganWords.push(fake.end[random.r(fake.end)]);

  return sloganWords.join(" ");
};

/* @returns {string} 
- A company slogan with keyword */
exports.sloganWithKeyword = (keyword = "") => {
  const beginning = fake.beginnings[random.r(fake.beginnings)];
  const ending = fake.endings[random.r(fake.endings)];
  const slogan = `${beginning} ${keyword} ${ending}`;
  return slogan;
};

/* @returns {string} 
- A company name */
exports.companyName = () => {
  const adj = fake.adjectives[random.r(fake.adjectives)];
  const noun = fake.nouns[random.r(fake.nouns)];

  return `${adj} ${noun}`;
};

/* @returns {string} 
- A company domain address */
exports.domainName = () => {
  return email.domainWord();
};

/* @returns {string} 
- A company domain name */
exports.domain = () => {
  return `${this.domainName()}.${email.domainTld[random.r(email.domainTld)]}`;
};

const domain = this.domain();

/* @returns {string} 
- A company email */
exports.companyEmail = () => {
  const r = Math.random();
  const address = ["support", "noreply", "contact", "help", "reply", "writeus"];
  return `${address[random.r(address)]}${
    r < 1 / 3 ? "." : r < 2 / 3 ? "_" : ""
  }${this.domainName()}@${domain}`;
};

/* @returns {object} 
- A company details */
exports.companyInfo = () => {
  const result = {
    name: this.companyName(),
    slogan: this.slogan(),
    address: country.countryInfo().address,
    company_domain: domain,
    company_email: this.companyEmail(),
  };
  return result;
};
