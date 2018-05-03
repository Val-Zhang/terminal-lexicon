const axios = require("axios");
const emoji = require("node-emoji");

const { formatSoundmark, formatDefinition } = require("./fotmat");

const SOURCE_SHANBEY_API = require("../config").SOURCE_SHANBEY_API;

const searchWord = word => {
  axios
    .get(`${SOURCE_SHANBEY_API}${word}`)
    .then(res => {
      const data = res.data.data;
      if (data.definition) {
        formatSoundmark(data.pronunciations);
        formatDefinition(data.definition);
      } else {
        console.log(emoji.get("disappointed_relieved"), res.data.msg);
      }
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports.searchWord = searchWord;
