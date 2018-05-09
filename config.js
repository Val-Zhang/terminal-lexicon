module.exports.SOURCE_SHANBEY_API = "https://api.shanbay.com/bdc/search/?word=";
module.exports.getExampleUrlById = id => {
  return `https://api.shanbay.com/bdc/example/?vocabulary_id=${id}&type=sys`;
};
