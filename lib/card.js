const random = require("./random.js");

/* @returns {object} 
- A  random credit card*/
exports.generateFakeCreditCard = (issuer = "visa") => {
  let prefix = "";
  let length = 0;
  let cvvLength = 0;
  let expirationMonth = "";
  let expirationYear = "";
  let month = String(random.rn(12) + 1).padStart(2, "0");
  let year = String(new Date().getFullYear() + random.rn(6)).slice(-2);

  switch (issuer.toLowerCase()) {
    case "visa":
      prefix = "4";
      length = 16;
      cvvLength = 3;
      expirationMonth = month;
      expirationYear = year;
      break;
    case "mastercard":
      prefix = "5";
      length = 16;
      cvvLength = 3;
      expirationMonth = month;
      expirationYear = year;
      break;
    case "unionpay":
      prefix = "62";
      length = 16;
      cvvLength = 3;
      expirationMonth = month;
      expirationYear = year;
      break;
    case "diners":
      prefix = "300";
      length = 14;
      cvvLength = 3;
      expirationMonth = month;
      expirationYear = year;
      break;
    case "discover":
      prefix = "6011";
      length = 16;
      cvvLength = 3;
      expirationMonth = month;
      expirationYear = year;
      break;
    case "amex":
      prefix = "37";
      length = 15;
      cvvLength = 4;
      expirationMonth = month;
      expirationYear = year;
      break;
    default:
      throw new Error(`Unknown issuer ${issuer}`);
  }

  const remainingLength = length - prefix.length - 1; // Subtract one for the check digit
  const randomNumber = Array.from({ length: remainingLength }, () =>
    random.rn(10)
  ).join("");

  const number = prefix + randomNumber;

  // Apply the Luhn algorithm to validate the credit card number
  const digits = number.split("").map(Number);
  const checkSum = digits.reduceRight((sum, digit, index) => {
    if ((digits.length - index) % 2 === 0) {
      const doubled = digit * 2;
      return sum + (doubled > 9 ? doubled - 9 : doubled);
    }
    return sum + digit;
  }, 0);

  const luhnDigit = (10 - (checkSum % 10)) % 10;

  const cvv = Array.from({ length: cvvLength }, () => random.rn(10)).join("");

  return {
    number: number + luhnDigit,
    cvv,
    expirationMonth,
    expirationYear,
  };
};

/* @returns {object} 
- A mastercard detail*/
exports.mastercard = () => {
  return this.generateFakeCreditCard("mastercard");
};

/* @returns {object} 
- A mastercard visa*/
exports.visa = () => {
  return this.generateFakeCreditCard("visa");
};

/* @returns {object} 
- A mastercard unionpay*/
exports.unionpay = () => {
  return this.generateFakeCreditCard("unionpay");
};

/* @returns {object} 
- A mastercard dinners*/
exports.diners = () => {
  return this.generateFakeCreditCard("diners");
};

/* @returns {object} 
- A mastercard amex*/
exports.amex = () => {
  return this.generateFakeCreditCard("amex");
};

/* @returns {object} 
- A mastercard discover*/
exports.discover = () => {
  return this.generateFakeCreditCard("discover");
};
