const axios = require("axios");
const get = require("lodash/get");
const { BASE_URL_THESAURUS } = require("../../config");

function getRevelantWords(word) {
  return axios.get(`${BASE_URL_THESAURUS}${word}`).then(res => {
    const re = /window.INITIAL_STATE = (.*);/;
    const matchingData = JSON.parse(res.data.match(re)[1]);
    const returnData = {
      synonyms: get(
        matchingData,
        "searchData.tunaApiData.posTabs[0].synonyms",
        []
      ),
      antonyms: get(
        matchingData,
        "searchData.tunaApiData.posTabs[0].antonyms",
        []
      )
    };
    return returnData;
  });
}

getRevelantWords("get");

module.exports = getRevelantWords;
