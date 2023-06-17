const email = require("../helpers/email.js");
const random = require("./random.js");

/* @returns {string} 
@input {width, height}
- random image with width and height */
exports.image = (w = 200, h = 200) => {
  return `http://lorempixel.com/${w}/${h}`;
};

/* @returns {string} 
@input {width, height, randomize:boolean}
- random image url */
exports.url = (w = 400, h = 400, randomize = true) => {
  return `https://loremflickr.com/${w}/${h}${randomize ? "?lock=" : ""}${
    randomize ? random.rn(2000) : ""
  }`;
};

/* @returns {string} 
@input {width, height, randomize:boolean}
- random animal image url */
exports.animal = (w = 400, h = 400, randomize = false) => {
  return `https://loremflickr.com/${w}/${h}/animal${randomize ? "?lock=" : ""}${
    randomize ? random.rn(2000) : ""
  }`;
};

/* @returns {string} 
@input {width, height, randomize:boolean}
- random bird image url */
exports.bird = (w = 400, h = 400, randomize = false) => {
  return `https://loremflickr.com/${w}/${h}/bird${randomize ? "?lock=" : ""}${
    randomize ? random.rn(2000) : ""
  }`;
};

/* @returns {string} 
@input {width, height, randomize:boolean}
- random cat image url */
exports.cat = (w = 400, h = 400, randomize = false) => {
  return `https://loremflickr.com/${w}/${h}/cat${randomize ? "?lock=" : ""}${
    randomize ? random.rn(2000) : ""
  }`;
};

/* @returns {string} 
@input {width, height, randomize:boolean}
- random dog image url */
exports.dog = (w = 400, h = 400, randomize = false) => {
  return `https://loremflickr.com/${w}/${h}/dog${randomize ? "?lock=" : ""}${
    randomize ? random.rn(2000) : ""
  }`;
};

/* @returns {string} 
@input {width, height, randomize:boolean}
- random abstract image url */
exports.abstract = (w = 400, h = 400, randomize = false) => {
  return `https://loremflickr.com/${w}/${h}/abstract${
    randomize ? "?lock=" : ""
  }${randomize ? random.rn(2000) : ""}`;
};

/* @returns {string} 
@input {width, height, randomize:boolean}
- random nature image url */
exports.nature = (w = 400, h = 400, randomize = false) => {
  return `https://loremflickr.com/${w}/${h}/nature${randomize ? "?lock=" : ""}${
    randomize ? random.rn(2000) : ""
  }`;
};

/* @returns {string} 
@input {width, height, randomize:boolean}
- random people image url */
exports.people = (w = 400, h = 400, randomize = false) => {
  return `https://loremflickr.com/${w}/${h}/people${randomize ? "?lock=" : ""}${
    randomize ? random.rn(2000) : ""
  }`;
};

/* @returns {string} 
@input {width, height, randomize:boolean}
- random nightlife image url */
exports.nightlife = (w = 400, h = 400, randomize = false) => {
  return `https://loremflickr.com/${w}/${h}/nightlife${
    randomize ? "?lock=" : ""
  }${randomize ? random.rn(2000) : ""}`;
};

/* @returns {string} 
@input {width, height, randomize:boolean}
- random sports image url */
exports.sports = (w = 400, h = 400, randomize = false) => {
  return `https://loremflickr.com/${w}/${h}/sports${randomize ? "?lock=" : ""}${
    randomize ? random.rn(2000) : ""
  }`;
};

/* @returns {string} 
@input {width, height, randomize:boolean}
- random transport image url */
exports.transport = (w = 400, h = 400, randomize = false) => {
  return `https://loremflickr.com/${w}/${h}/transport${
    randomize ? "?lock=" : ""
  }${randomize ? random.rn(2000) : ""}`;
};

/* @returns {string} 
@input {width, height, randomize:boolean}
- random food image url */
exports.food = (w = 400, h = 400, randomize = false) => {
  return `https://loremflickr.com/${w}/${h}/food${randomize ? "?lock=" : ""}${
    randomize ? random.rn(2000) : ""
  }`;
};

/* @returns {string} 
@input {width, height, randomize:boolean}
- random fashion image url */
exports.fashion = (w = 400, h = 400, randomize = false) => {
  return `https://loremflickr.com/${w}/${h}/fashion${
    randomize ? "?lock=" : ""
  }${randomize ? random.rn(2000) : ""}`;
};

/* @returns {string} 
@input {width, height, randomize:boolean}
- random technics image url */
exports.technics = (w = 400, h = 400, randomize = false) => {
  return `https://loremflickr.com/${w}/${h}/technics${
    randomize ? "?lock=" : ""
  }${randomize ? random.rn(2000) : ""}`;
};

/* @returns {string} 
@input {width, height, randomize:boolean}
- random business image url */
exports.business = (w = 400, h = 400, randomize = false) => {
  return `https://loremflickr.com/${w}/${h}/business${
    randomize ? "?lock=" : ""
  }${randomize ? random.rn(2000) : ""}`;
};

/* @returns {string} 
@input {width, height, randomize:boolean}
- random city image url */
exports.city = (w = 400, h = 400, randomize = false) => {
  return `https://loremflickr.com/${w}/${h}/city${randomize ? "?lock=" : ""}${
    randomize ? random.rn(2000) : ""
  }`;
};

/* @returns {string} 
- random avatar image url from github */
exports.avatar = () => {
  return `https://avatars.githubusercontent.com/u/${random.rn(100000000)}`;
};

/* @returns {string} 
- random avatar image url from github */
exports.avatarGitHub = () => {
  return `https://avatars.githubusercontent.com/u/${random.rn(100000000)}`;
};

/* @returns {string} 
- random avatar image url from cloudflare ipfs */
exports.avatarLegacy = () => {
  return `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${random.rn(
    1249
  )}.jpg`;
};

/* @returns {string} 
@input {width, height, shape, bgcolor, blur, saturation}
- random avatar image url from doodleipsum and avatar style one
- shape can be empty or circle
- blur min:0, max:100
- sat min:0, max:100
*/
exports.avatarDoodleipsumOne = (
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
@input {width, height, shape, bgcolor, blur, saturation}
- random avatar image url from doodleipsum and avatar style two
- shape can be empty or circle
- blur min:0, max:100
- sat min:0, max:100
*/
exports.avatarDoodleipsumTwo = (
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
@input {width, height, shape, bgcolor, blur, saturation}
- random avatar image url from doodleipsum and avatar style three
- shape can be empty or circle
- blur min:0, max:100
- sat min:0, max:100
*/
exports.avatarDoodleipsumThree = (
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
@input {width, height, shape, bgcolor, blur, saturation}
- random avatar image url from doodleipsum and avatar style four
- shape can be empty or circle
- blur min:0, max:100
- sat min:0, max:100
*/
exports.avatarDoodleipsumFour = (
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
@input {width, height, shape, bgcolor, blur, saturation}
- random avatar image url from doodleipsum and avatar style five
- shape can be empty or circle
- blur - min:0, max:100
- sat - min:0, max:100
*/
exports.avatarDoodleipsumFive = (
  w = 200,
  h = 200,
  shape = "",
  bg = "ffffff",
  blur = 0,
  sat = 0
) => {
  return `https://doodleipsum.com/${w}x${h}/avatar-5?shape=${shape}&bg=${bg}&blur=${blur}&sat=-${sat}`;
};

/* @returns {string} 
@input {width, height, keyword}
- random LoremFlickr image url, keywords ex: dog, cat, city
*/
exports.urlLoremFlickr = (w = 400, h = 400, keyword = "dog") => {
  return `https://loremflickr.com/${w}/${h}${
    keyword != null ? `/${keyword}` : ""
  }?lock=${random.rn(2000)}`;
};

/* @returns {string} 
@input {width, height, isGrayscale, blur}
- random PicsumPhotos image url,
- isGrayscale : boolean
- blur - min:0, max:10
*/
exports.urlPicsumPhotos = (
  w = 400,
  h = 400,
  isGrayscale = false,
  blur = 10
) => {
  blur < 0 || blur > 10 ? (b = "") : (b = blur);
  return `https://picsum.photos/seed/${random.rc(6, 12)}/${w}/${h}${
    isGrayscale ? "?grayscale" : ""
  }${b && isGrayscale ? "&" : b ? "?" : ""}${b ? "blur=" : ""}${b ? b : ""}`;
};

/* @returns {string} 
@input {width, height, text}
- random Placeholder image url with text */
exports.urlPlaceholder = (w = 400, h = 400, text = "") => {
  return `https://via.placeholder.com/${w}x${h}${text ? "?text=" : ""}${
    text ? text : ""
  }`;
};

/* 
@returns {string} 
@input {width, height, bgcolor, color, format, text}
- random image url from Lorempixel */
exports.urlLorempixel = (
  w = 200,
  h = 200,
  bg = "000",
  c = "fff",
  f = ".jpg",
  t = ""
) => {
  t = t.replaceAll(" ", "+");
  return `http://dummyimage.com/${w}x${h}/${bg}/${c}${f}${t && "&text="}${
    t && t
  }`;
};
