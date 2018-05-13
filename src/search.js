const axios = require("axios");
const emoji = require("node-emoji");
const chalk = require("chalk");
const { intervalLog, clearIntervalLog } = require("./libs/onelineLog");
const getRevelantWords = require("./crawlers/getRevelantWords");

const {
  formatSoundmark,
  formatDefinition,
  formatExampleSentence,
  formatExampleTranslation,
  formatChineseDefinition,
  showRelevantNumWords
} = require("./fotmat");

const {
  SOURCE_SHANBEY_API,
  getExampleUrlById,
  SOURCE_BD_API
} = require("../config");

const searchWord = (word, relevantNum = 0) => {
  console.log(chalk.bold(`${word}:`));
  intervalLog();
  const isContainChinese = word.toString().match(/[\u3400-\u9FBF]/);
  if (isContainChinese) {
    searchWordByBdApi(word);
  } else {
    searchWordByShanbayAPi(word)
      .then(() => {
        if (relevantNum) {
          return getRevelantWords(word).then(revelantWords => {
            const { antonyms, synonyms } = revelantWords;
            console.log(emoji.get("earth_americas"), "近义词：");
            showRelevantNumWords(synonyms, relevantNum);
            console.log(emoji.get("earth_americas"), "反义词：");
            showRelevantNumWords(antonyms, relevantNum);
          });
        }
      })
      .catch(() => {
        console.log("未找到相关单词");
      });
  }
};

const searchWordByShanbayAPi = word => {
  return axios
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
