const chalk = require("chalk");

function formatSoundmark(markDict = {}) {
  let formatedSoundmark = "";
  for (let mark in markDict) {
    formatedSoundmark += `${chalk.blue(mark)}  [${chalk.bgBlue(
      markDict[mark]
    )}]     `;
  }
  console.log(formatedSoundmark);
}

function formatDefinition(definition = "") {
  console.log(definition);
}

module.exports.formatSoundmark = formatSoundmark;
module.exports.formatDefinition = formatDefinition;
