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

exports.age = (min = 12, max = 90) => {
  let num = 0;
  min > 1 && max < 110
    ? (num = random.rrn(min, max))
    : (num = random.rrn(1, 120));
  return num;
};

exports.birthDate = random.rn(31) + 1;
exports.birthMonth = random.rn(12) + 1;

exports.birth = (age = this.age(), seprator = "-") => {
  const currentYear = new Date().getFullYear();
  const y = currentYear - age;
  const m = this.birthMonth;
  const d = this.birthDate;
  return `${d}${seprator}${m}${seprator}${y}`;
};

exports.zodiac = (day, month) => {
  // Define the start and end dates for each zodiac sign
  const signs = [
    { name: "Aquarius", start: [20, 1], end: [18, 2] },
    { name: "Pisces", start: [19, 2], end: [20, 3] },
    { name: "Aries", start: [21, 3], end: [19, 4] },
    { name: "Taurus", start: [20, 4], end: [20, 5] },
    { name: "Gemini", start: [21, 5], end: [20, 6] },
    { name: "Cancer", start: [21, 6], end: [22, 7] },
    { name: "Leo", start: [23, 7], end: [22, 8] },
    { name: "Virgo", start: [23, 8], end: [22, 9] },
    { name: "Libra", start: [23, 9], end: [22, 10] },
    { name: "Scorpio", start: [23, 10], end: [21, 11] },
    { name: "Sagittarius", start: [22, 11], end: [21, 12] },
    { name: "Capricorn", start: [22, 12], end: [19, 1] },
  ];

  // Check if the given day and month fall within any of the zodiac signs
  for (let i = 0; i < signs.length; i++) {
    const { name, start, end } = signs[i];

    if (
      (month === start[1] && day >= start[0]) ||
      (month === end[1] && day <= end[0])
    ) {
      return name;
    }
  }

  // If no zodiac sign is found, return null
  return null;
};

/* @returns {string} 
- A person profile */
exports.profile = (w = 200) => {
  return `https://i.pravatar.cc/${w}`;
};

/* @returns {string} 
- A person profile with id */
exports.profileWithId = (w = 200, id = "") => {
  return `https://i.pravatar.cc/${w}${id && "?u="}${id}`;
};

/* @returns {string} 
- A person avatar 1 */
exports.avatar1 = (
  w = 200,
  h = 200,
  shape = "",
  bg = "ffffff",
  blur = 0,
  sat = 0
) => {
  return `https://doodleipsum.com/${w}x${h}/avatar?shape=${shape}&bg=${bg}&blur=${blur}&sat=-${sat}`;
};

/* @returns {string} 
- A person avatar 2 */
exports.avatar2 = (
  w = 200,
  h = 200,
  shape = "",
  bg = "ffffff",
  blur = 0,
  sat = 0
) => {
  return `https://doodleipsum.com/${w}x${h}/avatar-2?shape=${shape}&bg=${bg}&blur=${blur}&sat=-${sat}`;
};

/* @returns {string} 
- A person avatar 3 */
exports.avatar3 = (
  w = 200,
  h = 200,
  shape = "",
  bg = "ffffff",
  blur = 0,
  sat = 0
) => {
  return `https://doodleipsum.com/${w}x${h}/avatar-3?shape=${shape}&bg=${bg}&blur=${blur}&sat=-${sat}`;
};

/* @returns {string} 
- A person avatar 4 */
exports.avatar4 = (
  w = 200,
  h = 200,
  shape = "",
  bg = "ffffff",
  blur = 0,
  sat = 0
) => {
  return `https://doodleipsum.com/${w}x${h}/avatar-4?shape=${shape}&bg=${bg}&blur=${blur}&sat=-${sat}`;
};

/* @returns {string} 
- A person avatar 5 */
exports.avatar5 = (
  w = 200,
  h = 200,
  shape = "",
  bg = "ffffff",
  blur = 0,
  sat = 0
) => {
  return `https://doodleipsum.com/${w}x${h}/avatar-5?shape=${shape}&bg=${bg}&blur=${blur}&sat=-${sat}`;
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
  const age = this.age();
  const birth = this.birth(age);
  const birthDate = this.birthDate;
  const birthMonth = this.birthMonth;
  const zodiac = this.zodiac(birthDate, birthMonth);
  const profile = this.profile();
  const profileWithId = this.profileWithId();
  const avatar1 = this.avatar1();
  const avatar2 = this.avatar2();
  const avatar3 = this.avatar3();
  const avatar4 = this.avatar4();
  const avatar5 = this.avatar5();

  return {
    gender,
    prefix,
    suffix,
    first,
    surname,
    fullname,
    age,
    birth,
    zodiac,
    profile: { profile, profileWithId },
    avatar: { avatar1, avatar2, avatar3, avatar4, avatar5 },
  };
};
