#! /usr/bin/env node

const program = require("commander");

const {
  searchWord,
  showRevelantWordsByType,
  showEnglishDefinition
} = require("./search");
const VERSION = require("../package").version;

program.version(VERSION, "-v, --version");

program
  .option(
    "-r,--relevant [n]",
    "获取相关词汇，获取个数为 [n], 默认为0",
    parseInt,
    0
  )
  .option(
    "-s,--synonym [n]",
    "获取所查词语的同义词，获取个数为 [n]，默认为0",
    parseInt,
    0
  )
  .option(
    "-a,--antonym [n]",
    "获取所查词语的反义词，默认获取个数为 [n]，默认为0",
    parseInt,
    0
  )
  .option("-d,--definition", "获取某个单词的英文释义")
  .arguments("<word> [otherWords...]")
  .action(function(word, otherWords, options) {
    let willSearchWord = otherWords.reduce(
      (accumulator, currentValue) => accumulator + " " + currentValue,
      word
    );
    if (options.synonym && options.synonym > 0) {
      showRevelantWordsByType(willSearchWord, options.synonym, "synonyms");
    }
    if (options.antonym && options.antonym > 0) {
      showRevelantWordsByType(willSearchWord, options.antonym, "antonyms");
    }
    if (!options.synonym && !options.antonym) {
      searchWord(willSearchWord, options.relevant);
    }
  });

program.command("en <word>").action(function(word) {
  showEnglishDefinition(word);
});

program.parse(process.argv);
