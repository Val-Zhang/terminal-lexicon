const en2zh = type => {
  switch (type) {
    case "synonyms":
      return "近义词";
    case "antonyms":
      return "反义词";
    default:
      return null;
  }
};

module.exports = en2zh;
