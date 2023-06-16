const fake = require("../data/words");
const random = require("./random.js");

/* @returns {string} 
- words length and type */
exports.words = (length = 8, type = "lorem") => {
  let w = [];
  for (let i = 0; i < length; i++) {
    type == "lorem"
      ? w.push(fake.loremWords[random.r(fake.loremWords)])
      : type == "english"
      ? w.push(fake.englishWords[random.r(fake.englishWords)])
      : "";
  }
  return `${w.join().replaceAll(",", " ")}.`;
};

/* @returns {string} 
- sentence length, sentenceType and type */
exports.sentences = (num = 2, sentenceType = "small", type = "lorem") => {
  let wordCount;
  let s = [];
  for (let i = 0; i < num; i++) {
    sentenceType == "small" ? (wordCount = random.rrn(8, 16)) : "";
    sentenceType == "medium" ? (wordCount = random.rrn(16, 24)) : "";
    sentenceType == "large" ? (wordCount = random.rrn(24, 32)) : "";

    s.push(this.words(wordCount, type));
  }
  return s;
};

/* @returns {string} 
- paragraph length, paragraphType, sentenceType and type */
exports.paragraphs = (
  num = 2,
  paragraphType = "medium",
  sentenceType = "medium",
  type = "lorem"
) => {
  let sentenceCount;
  let p = [];
  for (let i = 0; i < num; i++) {
    paragraphType == "small"
      ? (sentenceCount = random.rrn(2, 5))
      : paragraphType == "medium"
      ? (sentenceCount = random.rrn(5, 8))
      : paragraphType == "large"
      ? (sentenceCount = random.rrn(8, 12))
      : "";

    p.push(
      this.sentences(sentenceCount, sentenceType, type)
        .join()
        .replaceAll(",", " ")
    );
  }
  return p;
};

/* @returns {object} 
- A number to words */
exports.numberToWords = (number = "120") => {
  const units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const thousands = ["", "thousand", "million", "billion", "trillion"];

  if (number === 0) {
    return "zero";
  }

  let words = "";

  for (let i = 0; number > 0; i++) {
    const hundreds = Math.floor((number % 1000) / 100);
    const twoDigits = number % 100;
    const lastTwoDigits = twoDigits % 100;
    const currentWord = [];

    if (hundreds > 0) {
      currentWord.push(units[hundreds]);
      currentWord.push("hundred");
    }

    if (lastTwoDigits >= 10 && lastTwoDigits <= 19) {
      currentWord.push(teens[lastTwoDigits - 10]);
    } else {
      const ones = lastTwoDigits % 10;
      const tensValue = Math.floor(lastTwoDigits / 10);

      if (tensValue > 0) {
        currentWord.push(tens[tensValue]);
      }

      if (ones > 0) {
        currentWord.push(units[ones]);
      }
    }

    if (currentWord.length > 0) {
      words = currentWord.join(" ") + " " + thousands[i] + " " + words;
    }

    number = Math.floor(number / 1000);
  }

  return words.trim();
};
