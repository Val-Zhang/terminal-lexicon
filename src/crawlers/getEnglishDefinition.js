const axios = require("axios");
const cheerio = require("cheerio");

const { BASE_URL_DIRECTIONARY } = require("../../config");

/**
 * 并没解析出完全的数据，此爬虫值得更深入的改进
 */

function getEnglishDefinition(word) {
  return axios
    .get(`${BASE_URL_DIRECTIONARY}${word}`)
    .then(res => {
      const html = res.data;
      const defSets = [];
      const $ = cheerio.load(html);
      const sourceData1Html = $(".source-data").html();
      const $SourceData = cheerio.load(sourceData1Html);
      $SourceData(".def-set").each(function() {
        const $def = cheerio.load($SourceData(this).html());
        const defDict = {};
        const defArray = $def(".def-content")
          .text()
          .split("\n");
        defArray.forEach(value => {
          if (value.trim()) {
            const meanItem = value.split("                 ");
            if (meanItem.length === 2) {
              defDict.mean = meanItem[0].trim();
              defDict.example = meanItem[1].trim();
              defSets.push(defDict);
            }
          }
        });
      });
      return defSets;
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports.getEnglishDefinition = getEnglishDefinition;
