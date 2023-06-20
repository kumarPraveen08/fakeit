const random = require("./random");

/* @returns {color} 
- Generate a random hex color */
exports.HEXcolor = () => {
  return "#" + random.rn(16777215).toString(16);
};

/* @returns {color} 
- Generate random values for C, M, Y, and K */
exports.CMYKcolor = () => {
  const C = random.rn(100);
  const M = random.rn(100);
  const Y = random.rn(100);
  const K = random.rn(100);
  return `cmyk(${C}%, ${M}%, ${Y}%, ${K}%)`;
};

/* @returns {color} 
- Generate random values for R, G, and B */
exports.RGBcolor = () => {
  const R = random.rn(256);
  const G = random.rn(256);
  const B = random.rn(256);
  return `rgb(${R}, ${G}, ${B})`;
};

/* @returns {color} 
- Generate random values for H, S, and L */
exports.HSLcolor = () => {
  const H = random.rn(360);
  const S = random.rn(100);
  const L = random.rn(100);
  return `hsl(${H}, ${S}%, ${L}%)`;
};

/* @returns {color} 
- Generate a random PMS color (Pantone Matching System) */
exports.PMScolor = () => {
  return "PMS " + random.rn(10000);
};

/* @returns {color} 
- Generate a hex color from R, G, and B */
exports.rgbToHex = (r = 0, g = 0, b = 0) => {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
};
