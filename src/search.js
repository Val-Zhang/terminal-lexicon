const axios = require("axios");
const emoji = require("node-emoji");
const chalk = require("chalk");
const { intervalLog, clearIntervalLog } = require("./libs/onelineLog");

const {
  formatSoundmark,
  formatDefinition,
  formatExampleSentence,
  formatExampleTranslation,
  formatChineseDefinition
} = require("./fotmat");

const {
  SOURCE_SHANBEY_API,
  getExampleUrlById,
  SOURCE_BD_API
} = require("../config");

const searchWord = word => {
  console.log(chalk.bold(`${word}:`));
  const isEnglish = word.toString().match(/[\u3400-\u9FBF]/);
  if (isEnglish) {
    searchWordByBdApi(word);
  } else {
    searchWordByShanbayAPi(word);
  }
  intervalLog();
};

const searchWordByShanbayAPi = word => {
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
      clearIntervalLog();
      console.log(err);
    });
};

const searchWordByBdApi = word => {
  axios
    .get(encodeURI(`${SOURCE_BD_API}${word}`))
    .then(res => {
      clearIntervalLog();
      const {
        trans_result: [{ dst }]
      } = res.data;
      formatChineseDefinition(dst);
    })
    .catch(err => {
      clearIntervalLog();
      console.log(err);
    });
};

module.exports.searchWord = searchWord;
module.exports.searchWordByShanbayAPi = searchWordByShanbayAPi;
module.exports.searchWordByBdApi = searchWordByBdApi;
