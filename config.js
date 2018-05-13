module.exports.SOURCE_SHANBEY_API = "https://api.shanbay.com/bdc/search/?word=";
module.exports.SOURCE_BD_API =
  "http://api.vigorouslife.cn/v1/api/dict/bdTrans?word=";
module.exports.BASE_URL_THESAURUS = "http://www.thesaurus.com/browse/";
module.exports.BASE_URL_DIRECTIONARY = "http://www.dictionary.com/browse/";
module.exports.getExampleUrlById = id => {
  return `https://api.shanbay.com/bdc/example/?vocabulary_id=${id}&type=sys`;
};
