const axios = require("axios");

const { formatSoundmark } = require("./fotmat");

const SOURCE_SHANBEY_API = require("../config").SOURCE_SHANBEY_API;

const searchWord = word => {
  axios
    .get(`${SOURCE_SHANBEY_API}${word}`)
    .then(res => {
      formatSoundmark(res.data.data.pronunciations);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports.searchWord = searchWord;
