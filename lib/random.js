// RANDOM

/* 
@input {array}
@returns {number/int} 
- A random number */
exports.r = (a) => {
  return Math.floor(Math.random() * a.length);
};

/* 
@input {number}
@returns {number/int} 
- A random number */
exports.rn = (a) => {
  return Math.floor(Math.random() * a);
};

/* 
@input {min, max}
@returns {number/int} 
- A random number */
exports.rrn = (a, b) => {
  return a + Math.floor(Math.random() * (b - a));
};

/* 
@input {min, max}
@returns {string} 
- A random characters */
exports.rc = (
  min = 2,
  max = 4,
  n = "0123456789",
  lc = "abcdefghijklmnopqrstuvwxyz",
  uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
) => {
  let arr = `${n}${lc}${uc}`;
  let l = this.rrn(min, max);
  let v = [];
  while (v.length < l) {
    let a = arr[this.r(arr)];
    !v.includes(a) && v.push(a);
  }
  return v.join().replaceAll(",", "");
};
