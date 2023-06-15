const fake = require("../data/person.js");
const random = require("./random.js");
const car = require("./car.js");
const card = require("./card.js");

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
  return { firstname, lastname: this.surname(), gender };
};

/* @returns {object} 
- Age of the person */
exports.age = (min = 12, max = 90) => {
  let num = 0;
  min > 1 && max < 110
    ? (num = random.rrn(min, max))
    : (num = random.rrn(1, 120));
  return num;
};

/* @returns {object} 
- birthday date of the person */
exports.birthDate = random.rn(31) + 1;

/* @returns {object} 
- birthday month of the person */
exports.birthMonth = random.rn(12) + 1;

/* @returns {object} 
- date of birth of the person */
exports.birth = (age = this.age(), seprator = "-") => {
  const currentYear = new Date().getFullYear();
  const y = currentYear - age;
  const m = this.birthMonth;
  const d = this.birthDate;
  return `${d}${seprator}${m}${seprator}${y}`;
};

/* @returns {object} 
- zodiac of the person */
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
- A person blood group */
exports.bloodGroup = () => {
  var bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  return bloodGroups[random.r(bloodGroups)];
};

/* @returns {object} 
- A person favorite actor */
exports.favoriteActor = () => {
  const actors = [
    "Tom Cruise",
    "Angelina Jolie",
    "Brad Pitt",
    "Scarlett Johansson",
    "Leonardo DiCaprio",
    "Jennifer Lawrence",
    "Johnny Depp",
    "Emma Stone",
    "Ryan Gosling",
    "Natalie Portman",
  ];
  return actors[random.r(actors)];
};

/* @returns {object} 
- A person favorite actress */
exports.favoriteActress = () => {
  const actresses = [
    "Sandra Bullock",
    "Meryl Streep",
    "Anne Hathaway",
    "Cate Blanchett",
    "Julia Roberts",
    "Charlize Theron",
    "Reese Witherspoon",
    "Amy Adams",
    "Kate Winslet",
    "Emma Watson",
  ];
  return actresses[random.r(actresses)];
};

/* @returns {object} 
- A person hair color */
exports.hairColor = () => {
  const hairColors = ["black", "brown", "blonde", "red", "gray"];
  return hairColors[random.r(hairColors)];
};

/* @returns {object} 
- A person eye color */
exports.eyeColor = () => {
  const eyeColors = ["brown", "blue", "green", "hazel"];
  return eyeColors[random.r(eyeColors)];
};

/* @returns {object} 
- A person favorite color */
exports.favoriteColor = () => {
  const colors = ["red", "yellow", "green", "blue", "purple", "orange"];
  return colors[random.r(colors)];
};

/* @returns {object} 
- A person height */
exports.personHeight = () => {
  const heights = [150, 160, 170, 180, 190];
  return heights[random.r(heights)];
};

/* @returns {object} 
- A person weight */
exports.personWeight = () => {
  const weights = [50, 60, 70, 80, 90];
  return weights[random.r(weights)];
};

/* @returns {object} 
- A person phone */
exports.phone = () => {
  return random.rn(9000000000) + 1000000000;
};

/* @returns {object} 
- A person favorite star */
exports.favoriteStar = () => {
  return Math.random() < 0.5 ? this.favoriteActor() : this.favoriteActress();
};

/* @returns {object} 
- A person vehicle */
exports.personVehicle = () => {
  return car.carInfo();
};

/* @returns {object} 
- A person vehicle */
exports.personVehicle = () => {
  return car.carInfo();
};

/* @returns {object} 
- A person card */
exports.personCard = () => {
  return card.cardInfo();
};

/* @returns {object} 
- A person user agent */
exports.userAgent = () => {
  const browsers = ["Chrome", "Firefox", "Safari", "Opera", "Edge"];
  const operatingSystems = [
    "Windows NT 10.0",
    "Windows NT 6.1",
    "Macintosh; Intel Mac OS X 10_14_5",
    "Linux",
    "Android 11.0.0",
  ];
  const types = ["Desktop", "Tablet", "Mobile"];

  const randomBrowser = browsers[random.r(browsers)];
  const randomOS = operatingSystems[random.r(operatingSystems)];
  const randomType = types[random.r(types)];

  let userAgent = "";
  if (randomType === "Desktop") {
    userAgent += `${randomBrowser}/`;
    userAgent += random.rn(50) + 1 + ".0 ";
    userAgent += `(${randomOS}; Win64; x64)`;
  } else if (randomType === "Tablet") {
    userAgent += `Mozilla/5.0 (iPad; CPU OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${
      random.rn(20) + 1
    }.0 Mobile/15E148 Safari/604.1`;
  } else if (randomType === "Mobile") {
    userAgent += `Mozilla/5.0 (iPhone; CPU iPhone OS ${
      random.rn(15) + 1
    } like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${
      random.rn(20) + 1
    }.0 Mobile/15E148 Safari/604.1`;
  }

  return userAgent;
};

/* @returns {object} 
- A person Info */
exports.personInfo = () => {
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
  const phone = this.phone();
  const bloodGroup = this.bloodGroup();
  const personWeight = this.personWeight();
  const personHeight = this.personHeight();
  const favoriteColor = this.favoriteColor();
  const eyeColor = this.eyeColor();
  const hairColor = this.hairColor();
  const favoriteStar = this.favoriteStar();
  const favoriteActress = this.favoriteActress();
  const favoriteActor = this.favoriteActor();
  const personVehicle = this.personVehicle();
  const personCard = this.personCard();
  const userAgent = this.userAgent();

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
    phone,
    personWeight,
    personHeight,
    favoriteColor,
    eyeColor,
    hairColor,
    favoriteStar,
    favoriteActress,
    favoriteActor,
    personVehicle,
    personCard,
    userAgent,
  };
};
