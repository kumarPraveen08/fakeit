const email = require("../helpers/email.js");
const fake = require("../data/post.js");

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
- A all posts */
exports.posts = () => {
  return fake.posts;
};

/* @returns {object} 
- A post by id */
exports.getPostById = (id = 1) => {
  return fake.posts.find((post) => post.id === id);
};

/* @returns {object} 
- A post by user id */
exports.getPostsByUserId = (userId = 1) => {
  return fake.posts.filter((post) => post.userId === userId);
};

/* @returns {object} 
- A all users */
exports.users = () => {
  return fake.users;
};

/* @returns {object} 
- A user by id */
exports.getUserById = (userId = 1) => {
  return fake.users.find((user) => user.id === userId);
};

/* @returns {object} 
- A all comments */
exports.comments = () => {
  return fake.comments;
};

/* @returns {object} 
- A comment by id */
exports.getCommentById = (commentId = 1) => {
  return fake.comments.find((comment) => comment.id === commentId);
};

/* @returns {object} 
- A comment by post id */
exports.getCommentsByPostId = (postId = 1) => {
  return fake.comments.filter((comment) => comment.postId === postId);
};

/* @returns {object} 
- A post details */
exports.post = (id = 1) => {
  const post = this.getPostById(id);
  const comments = this.getCommentByPostId(id);
  const result = {
    post,
    comments,
    tags: this.hashtag(),
  };
  return result;
};
