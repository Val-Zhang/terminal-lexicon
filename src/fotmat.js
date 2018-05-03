const chalk = require("chalk");

function formatSoundmark(markDict = {}) {
  let formatedSoundmark = "";
  for (let mark in markDict) {
    formatedSoundmark += `${chalk.blue(mark)}  [${chalk.bgBlue(markDict[mark])}]     `;
  }
  console.log(formatedSoundmark);
}

module.exports.formatSoundmark = formatSoundmark;
