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
