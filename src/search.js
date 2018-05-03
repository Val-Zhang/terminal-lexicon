const axios = require("axios");

const { formatSoundmark, formatDefinition } = require("./fotmat");

const SOURCE_SHANBEY_API = require("../config").SOURCE_SHANBEY_API;

const searchWord = word => {
  axios
    .get(`${SOURCE_SHANBEY_API}${word}`)
    .then(res => {
      const data = res.data.data;
      formatSoundmark(data.pronunciations);
      formatDefinition(data.definition);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports.searchWord = searchWord;
