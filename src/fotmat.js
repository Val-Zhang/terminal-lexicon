const chalk = require("chalk");
const emoji = require("node-emoji");
const { soundmarkInterpreting } = require("./libs/soundmark");

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

module.exports.formatSoundmark = formatSoundmark;
module.exports.formatDefinition = formatDefinition;
module.exports.formatExampleSentence = formatExampleSentence;
module.exports.formatChineseDefinition = formatChineseDefinition;
module.exports.formatExampleTranslation = formatExampleTranslation;
