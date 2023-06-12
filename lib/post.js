const email = require("../helpers/email.js");

/* @returns {object} 
- A post tags */
exports.hashtag = (n = 3) => {
  let t = [];
  for (let i = 0; i < n; i++) {
    t.push(`#${email.domainWord(4, 9)}`);
  }
  return t;
};

/* @returns {object} 
- A post details */
exports.post = () => {
  const result = {
    tags: this.hashtag(),
  };
  return result;
};
