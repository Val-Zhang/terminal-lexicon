const chalk = require("chalk");
const emoji = require("node-emoji");
const { soundmarkInterpreting } = require("./libs/soundmark");
const en2zh = require("./libs/en2zh");

const PADDING4 = "    ";
// const PADDING2 = "  ";
// const PADDING1 = " ";

function formatSoundmark(markDict = {}) {
  let formatedSoundmark = "";
  for (let mark in markDict) {
    if (markDict[mark]) {
      formatedSoundmark += `${chalk.blue(soundmarkInterpreting(mark))}[${
        markDict[mark]
      }] ${PADDING4}`;
    }
  }
  if (formatedSoundmark) {
    console.log(emoji.get("sparkles"), "音标：");
    console.log(PADDING4, formatedSoundmark);
  }
}

function formatDefinition(definition = "") {
  console.log(emoji.get("rainbow"), "释义：");
  let definitionList = definition.split("\n");
  definitionList.forEach(def => {
    console.log(PADDING4, def.trim());
  });
}

function formatExampleSentence(sentence) {
  console.log(PADDING4, sentence);
}

function formatExampleTranslation(translation) {
  console.log(PADDING4, ">", chalk.dim(translation));
}

function formatChineseDefinition(definition = "") {
  console.log(emoji.get("rainbow"), "释义：");
  console.log(PADDING4, definition.trim());
}

function formatRelevantWord(word) {
  console.log(PADDING4, word);
}

function formatIndex(index) {
  return (index + 1).toString().padStart(2, 0);
}

function showRelevantNumWords(relevants, num = 5, type) {
  console.log(emoji.get("earth_americas"), en2zh(type));
  for (let i = 0; i < num; i++) {
    const term = relevants[i].term.padEnd(15, " ");
    formatRelevantWord(
      `${formatIndex(i)}. ${term}相似度：${relevants[i].similarity}`
    );
  }
}

function formatMeanAddExample(item, index) {
  console.log(`${formatIndex(index)}   ${item.mean}`);
  console.log(PADDING4, item.example);
  console.log("\n");
}

module.exports.formatSoundmark = formatSoundmark;
module.exports.formatDefinition = formatDefinition;
module.exports.formatExampleSentence = formatExampleSentence;
module.exports.formatChineseDefinition = formatChineseDefinition;
module.exports.formatExampleTranslation = formatExampleTranslation;
module.exports.showRelevantNumWords = showRelevantNumWords;
module.exports.formatMeanAddExample = formatMeanAddExample;
