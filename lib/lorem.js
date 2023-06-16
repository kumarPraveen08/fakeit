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

const longPrefixes = [
  "Pro",
  "Tech",
  "Inno",
  "Expert",
  "Global",
  "Creative",
  "Dynamic",
  "Elevate",
  "Synergistic",
  "Impactful",
  "Revolutionary",
  "Strategic",
  "Agile",
  "Disruptive",
  "Visionary",
  "Inspiring",
  "Intelligent",
  "Empowering",
  "Transformative",
  "Collaborative",
  "Pioneering",
  "Ambitious",
  "Progressive",
  "Customer-centric",
  "Adaptive",
  "Thoughtful",
  "Proactive",
  "Future-proof",
  "Sustainable",
  "Responsive",
  "End-to-end",
  "Holistic",
  "Integrated",
  "Modular",
  "Efficient",
  "Effective",
  "Reliable",
  "Trustworthy",
  "Secure",
  "Scalable",
  "Flexible",
  "Modern",
  "Cutting-edge",
  "User-friendly",
  "Intuitive",
  "Seamless",
  "Personalized",
  "Engaging",
  "Elegant",
  "Sophisticated",
  "Beautiful",
  "Minimalist",
  "Expressive",
  "Dynamic",
  "Bold",
  "Vibrant",
  "Colorful",
  "Playful",
  "Serious",
  "Professional",
  "Expert",
  "Premium",
  "Luxury",
  "Affordable",
  "Value-driven",
  "Transparent",
  "Honest",
  "Authentic",
  "Genuine",
  "Friendly",
  "Approachable",
  "Helpful",
  "Supportive",
  "Motivating",
  "Educational",
  "Informative",
  "Entertaining",
  "Exciting",
  "Fun",
  "Enjoyable",
  "Memorable",
];

const shortPrefixes = ["X", "Z", "K", "V", "L"];
const longSuffixes = [
  "Corp",
  "Solutions",
  "Group",
  "Ventures",
  "Enterprises",
  "Systems",
  "Collaboration",
  "Technologies",
  "Development",
  "Innovation",
  "Design",
  "Services",
  "Consulting",
  "Management",
  "Strategies",
  "Analytics",
  "Intelligence",
  "Insights",
  "Performance",
  "Growth",
  "Experience",
  "Journey",
  "Lab",
  "Studio",
  "Works",
  "Agency",
  "Team",
  "Network",
  "Community",
  "Foundation",
  "Initiative",
  "Council",
  "Association",
  "Alliance",
  "Coalition",
  "Union",
  "Federation",
  "Syndicate",
  "Guild",
  "Cooperative",
  "Marketplace",
  "Exchange",
  "Hub",
  "Platform",
  "Portal",
  "Mall",
  "Store",
  "Shop",
  "Market",
  "Bazaar",
  "Avenue",
  "Lane",
  "Street",
  "Road",
  "Way",
  "Place",
  "Square",
  "Circle",
  "Point",
  "Corner",
  "Frontier",
  "Horizon",
  "Peak",
  "Summit",
  "Apex",
  "Edge",
  "Vertex",
  "Line",
  "Curve",
  "Wave",
  "Spark",
  "Flame",
  "Light",
  "Beam",
  "Radiance",
  "Shield",
  "Armor",
  "Fortress",
  "Castle",
  "Haven",
  "Harbor",
  "Port",
  "Dock",
  "Wharf",
  "Marina",
  "Cove",
  "Bay",
  "Gulf",
  "Ocean",
  "Sea",
];

const shortSuffixes = ["Co", "Inc", "Ltd", "LLC", "Group"];

// Function to generate a business name based on a given prefix and suffix
exports.generateBusinessName = () => {
  const shortPrefixIndex = random.rrn(0, shortPrefixes.length - 1);
  const longPrefixIndex = random.rrn(0, longPrefixes.length - 1);
  const shortSuffixIndex = random.rrn(0, shortSuffixes.length - 1);
  const longSuffixIndex = random.rrn(0, longSuffixes.length - 1);

  let name;

  // Randomly choose whether to use short or long prefixes/suffixes
  if (Math.random() < 0.5) {
    name = `${shortPrefixes[shortPrefixIndex]}${shortSuffixes[shortSuffixIndex]}`;
  } else {
    name = `${longPrefixes[longPrefixIndex]} ${longSuffixes[longSuffixIndex]}`;
  }

  return name;
};

console.log(this.generateBusinessName());
