const random = require("./random.js");
const email = require("../helpers/email.js");

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
- A user details */
exports.user = () => {
  const result = {
    username,
    password,
    ipV4Address,
    ipV6Address,
  };
  return result;
};
