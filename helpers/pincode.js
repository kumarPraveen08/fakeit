exports.generatePostalCode = (countryCode) => {
  let code = "";
  const digits = "0123456789";

  // Generate postal code based on country code
  switch (countryCode) {
    case "IN":
      // India postal code is 6 digits
      for (let i = 0; i < 6; i++) {
        code += digits.charAt(Math.floor(Math.random() * digits.length));
      }
      break;

    case "JP":
      // Japan postal code is 7 digits with a hyphen
      for (let i = 0; i < 3; i++) {
        code += digits.charAt(Math.floor(Math.random() * digits.length));
      }
      code += "-";
      for (let i = 0; i < 4; i++) {
        code += digits.charAt(Math.floor(Math.random() * digits.length));
      }
      break;

    case "KR":
      // Korea postal code is 5 digits
      for (let i = 0; i < 5; i++) {
        code += digits.charAt(Math.floor(Math.random() * digits.length));
      }
      break;

    case "AU":
      // Australia postal code is 4 digits with a hyphen
      for (let i = 0; i < 4; i++) {
        code += digits.charAt(Math.floor(Math.random() * digits.length));
      }
      code += "-";
      for (let i = 0; i < 3; i++) {
        code += digits.charAt(Math.floor(Math.random() * digits.length));
      }
      break;

    case "US":
      // USA postal code is 5 digits with an optional 4-digit suffix separated by a hyphen
      code += Math.floor(Math.random() * 8) + 1;
      for (let i = 0; i < 4; i++) {
        code += digits.charAt(Math.floor(Math.random() * digits.length));
      }
      if (Math.random() < 0.5) {
        code += "-";
        for (let i = 0; i < 4; i++) {
          code += digits.charAt(Math.floor(Math.random() * digits.length));
        }
      }
      break;

    default:
      // For any other country, generate a random 5-digit postal code
      code += Math.floor(Math.random() * 9) + 1;
      for (let i = 0; i < 4; i++) {
        code += digits.charAt(Math.floor(Math.random() * digits.length));
      }
  }

  return code;
};
