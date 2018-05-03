const chalk = require("chalk");
const emoji = require("node-emoji");
const { soundmarkInterpreting } = require("./libs/soundmark");

const PADDING4 = "    ";
const PADDING2 = '  '

function formatSoundmark(markDict = {}) {
  let formatedSoundmark = "";
  for (let mark in markDict) {
    if (markDict[mark]) {
      formatedSoundmark += `${chalk.blue(soundmarkInterpreting(mark))}  [${
        markDict[mark]
      }] ${PADDING4}`;
    }
  }
  if (formatedSoundmark) {
    console.log(emoji.get("headphones"), "音标：");
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

module.exports.formatSoundmark = formatSoundmark;
module.exports.formatDefinition = formatDefinition;
