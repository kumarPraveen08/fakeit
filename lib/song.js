const fake = require("../data/song.js");
const random = require("./random.js");

/* @returns {string} 
- A song name */
exports.songName = (type = "", keyword = "") => {
  let r = Math.random();
  let res;
  if (type == "prefix") {
    r < 1 / 5
      ? (res = `${keyword} ${fake.name2[random.r(fake.name2)]}`)
      : r < 2 / 5
      ? (res = `${keyword} ${fake.name4[random.r(fake.name4)]}`)
      : r < 3 / 5
      ? (res = `${keyword} ${fake.name6[random.r(fake.name6)]}`)
      : r < 4 / 5
      ? (res = `${keyword} ${fake.name8[random.r(fake.name8)]}`)
      : r < 5 / 5
      ? (res = `${keyword} ${fake.name10[random.r(fake.name10)]}`)
      : "";
  } else if (type == "suffix") {
    r < 1 / 5
      ? (res = `${fake.name1[random.r(fake.name1)]} ${keyword}`)
      : r < 2 / 5
      ? (res = `${fake.name3[random.r(fake.name3)]} ${
          fake.name3b[random.r(fake.name3b)]
        } ${keyword}`)
      : r < 3 / 5
      ? (res = `${fake.name5[random.r(fake.name5)]} ${keyword}`)
      : r < 4 / 5
      ? (res = `${fake.name7[random.r(fake.name7)]} ${keyword}`)
      : r < 5 / 5
      ? (res = `${fake.name9[random.r(fake.name9)]} ${keyword}`)
      : "";
  } else {
    r < 1 / 5
      ? (res = `${fake.name1[random.r(fake.name1)]} ${
          fake.name2[random.r(fake.name2)]
        }`)
      : r < 2 / 5
      ? (res = `${fake.name3[random.r(fake.name3)]} ${
          fake.name3b[random.r(fake.name3b)]
        } ${fake.name4[random.r(fake.name4)]}`)
      : r < 3 / 5
      ? (res = `${fake.name5[random.r(fake.name5)]} ${
          fake.name6[random.r(fake.name6)]
        }`)
      : r < 4 / 5
      ? (res = `${fake.name7[random.r(fake.name7)]} ${
          fake.name8[random.r(fake.name8)]
        }`)
      : r < 5 / 5
      ? (res = `${fake.name9[random.r(fake.name9)]} ${
          fake.name10[random.r(fake.name10)]
        }`)
      : "";
  }
  return res.trim();
};

/* @returns {string} 
- A song genre */
exports.genre = () => {
  const arr = [
    "pop",
    "rock",
    "hip hop",
    "EDM",
    "country",
    "jazz",
    "blues",
    "reggae",
    "R&B",
    "classical",
    "folk",
    "metal",
    "punk",
    "soul",
    "funk",
    "indie",
    "electronic",
    "ambient",
    "world",
    "experimental",
  ];
  return arr[random.r(arr)];
};
