const random = require("./random.js");
const email = require("../helpers/email.js");
const person = require("./person.js");
const country = require("./country.js");

/* @returns {object} 
- A user username */
exports.username = (l = 8) => {
  const arr = "abcdefghijklmnopqrstuvwxyz0987654321".split("");
  let v = "";
  while (v.length < l) {
    let a = arr[random.r(arr)];
    !v.includes(a) ? (v += a) : "";
  }
  return v;
};

/* @returns {object} 
- A user password */
exports.password = (
  l = 12,
  is = true, // include special chars
  isc = true, // include similar chars
  s = `!@$%^*()_-+=?/.\|[]{}`,
  n = "0123456789",
  lc = "abcdefghijklmnopqrstuvwxyz",
  uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
) => {
  let arr = `${is && s}${n}${lc}${uc}`.split("");

  !isc && l > 36 ? (l = 36) : (l = l);
  let v = [];
  while (v.length < l) {
    let a = arr[random.r(arr)];
    isc ? v.push(a) : !v.includes(a) && v.push(a);
  }
  return v.join().replaceAll(",", "");
};

/* @returns {object} 
- A user ipv4 address */
exports.ipV4Address = () => {
  let a = "";
  for (let i = 0; i < 4; i++) {
    a += random.rn(256) + ".";
  }
  return a.slice(0, -1);
};

/* @returns {object} 
- A user ipv6 address */
exports.ipV6Address = () => {
  let a = "";
  const hc = "0123456789abcdef";

  for (let i = 0; i < 8; i++) {
    let g = "";
    for (let j = 0; j < 4; j++) {
      g += hc[random.r(hc)];
    }

    a += g;
    if (i < 7) a += ":";
  }

  return a;
};

/* @returns {object} 
- A user mac address */
exports.macAddress = () => {
  let macAddress = "";
  for (let i = 0; i < 6; i++) {
    let randNum = random.rn(256).toString(16);
    if (randNum.length === 1) {
      randNum = "0" + randNum;
    }
    macAddress += randNum;
    if (i !== 5) {
      macAddress += ":";
    }
  }
  return macAddress.toUpperCase();
};

/* @returns {object} 
- A user ipaddress */
exports.ipAddress = () => {
  let ipAddress = "";
  for (let i = 0; i < 4; i++) {
    ipAddress += random.rn(256);
    if (i !== 3) {
      ipAddress += ".";
    }
  }
  return ipAddress;
};

/* @returns {object} 
- A user website */
exports.website = () => {
  return `${email.domainWord()}.${email.domainTld[random.r(email.domainTld)]}`;
};

/* @returns {object} 
- A user email address */
exports.email = () => {
  return `${email.domainWord()}@${this.website()}`;
};

const p = person.personInfo();
const c = country.countryInfo();

/* @returns {object} 
- A user gender */
exports.userGender = () => {
  return p.gender;
};

/* @returns {object} 
- A user firstname */
exports.userFirstName = () => {
  return p.first;
};

/* @returns {object} 
- A user lastname */
exports.userLastName = () => {
  return p.surname;
};

/* @returns {object} 
- A user age */
exports.userAge = () => {
  return p.age;
};

/* @returns {object} 
- A user date of birth */
exports.userBirth = (age) => {
  return person.birth(age);
};

/* @returns {object} 
- A user zodiac */
exports.userZodiac = () => {
  return p.zodiac;
};

/* @returns {object} 
- A user profile image */
exports.userProfileImage = (w) => {
  return person.profile(w);
};

/* @returns {object} 
- A user address */
exports.userAddress = () => {
  return c.address;
};

/* @returns {object} 
- A user Info */
exports.userInfo = (w = 200) => {
  const gender = this.userGender();
  const firtname = this.userFirstName();
  const lastname = this.userLastName();
  const age = this.userAge();
  const birth = this.userBirth(age);
  const zodiac = this.userZodiac();
  const profile = this.userProfileImage(w);
  const website = this.website();
  const emailAddress = `${email.domainWord()}@${website}`;
  const result = {
    gender,
    firtname,
    lastname,
    age,
    birth,
    zodiac,
    username: this.username(),
    emailAddress,
    password: this.password(),
    profile,
    website,
    address: this.userAddress(),
    macAddress: this.macAddress(),
    ipAddress: this.ipAddress(),
    ipV4Address: this.ipV4Address(),
    ipV6Address: this.ipV6Address(),
  };
  return result;
};
