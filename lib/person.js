const fake = require("../data/person.js");
const random = require("./random.js");

// PERSON

/* @returns {string} 
- A first name */
exports.gender = () => {
  return fake.Gender[random.r(fake.Gender)];
};

/* @returns {string} 
- A male first name */
exports.male = () => {
  return fake.Person.male[random.r(fake.Person.male)];
};

/* @returns {string} 
- A female first name */
exports.female = () => {
  return fake.Person.female[random.r(fake.Person.female)];
};

/* @returns {string} 
- A last name */
exports.surname = () => {
  return fake.Person.surname[random.r(fake.Person.surname)];
};

/* @returns {string} 
- A name prefix */
exports.prefix = () => {
  return fake.Person.prefix[random.r(fake.Person.prefix)];
};

/* @returns {string} 
- A name suffix */
exports.suffix = () => {
  return fake.Person.suffix[random.r(fake.Person.suffix)];
};

/* @returns {string} 
- A full name */
exports.name = () => {
  return `${
    Math.random() < 1 / 2 ? this.male() : this.female()
  } ${this.surname()}`;
};

/* @returns {object} 
- A full name with gender */
exports.person = () => {
  const gender = this.gender();
  const firstname = gender == "male" ? this.male() : this.female();
  return { name: `${firstname} ${this.surname()}`, gender };
};

/* @returns {object} 
- A person details */
exports.personDetails = () => {
  const gender = this.gender();
  let prefix = this.prefix();
  prefix =
    gender == "male" && (prefix == "Mrs." || prefix == "Miss")
      ? "Mr."
      : gender == "female" && prefix == "Mr."
      ? "Miss"
      : prefix;
  const suffix = this.suffix();
  const first = gender == "male" ? this.male() : this.female();
  const surname = this.surname();
  const fullname = `${first} ${surname}`;

  return { gender, prefix, suffix, first, surname, fullname };
};
