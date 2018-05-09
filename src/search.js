const axios = require("axios");
const emoji = require("node-emoji");
const chalk = require("chalk");
const { intervalLog, clearIntervalLog } = require("./libs/onelineLog");

const {
  formatSoundmark,
  formatDefinition,
  formatExampleSentence,
  formatExampleTranslation
} = require("./fotmat");

const { SOURCE_SHANBEY_API, getExampleUrlById } = require("../config");

const searchWord = word => {
  console.log(chalk.bold(`${word}:`));
  intervalLog();
  axios
    .get(`${SOURCE_SHANBEY_API}${word}`)
    .then(res => {
      clearIntervalLog();
      const data = res.data.data;
      const wordShanbayId = data.id;
      if (data.definition) {
        formatSoundmark(data.pronunciations);
        formatDefinition(data.definition);
      } else {
        console.log(emoji.get("disappointed_relieved"), res.data.msg);
      }
      return axios.get(getExampleUrlById(wordShanbayId));
    })
    .then(res => {
      const exampleList = res.data.data;
      if (exampleList.length > 0) {
        console.log(emoji.get("lollipop"), "例句：");
      }
      exampleList.forEach(example => {
        const exampleSentence = `${example.first}${chalk.bold(example.mid)}${
          example.last
        }`;
        formatExampleSentence(exampleSentence);
        const exampleTranslation = example.translation;
        formatExampleTranslation(exampleTranslation);
      });
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports.searchWord = searchWord;
