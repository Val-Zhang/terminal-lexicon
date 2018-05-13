#! /usr/bin/env node

const program = require("commander");

const searchWord = require("./search").searchWord;
const VERSION = require("../package").version;

program.version(VERSION, "-v, --version");

program
  .option("-r,--relevant [n]", "获取相关词汇，默认获取个数为 [n]", 3)
  .arguments("<word> [otherWords...]")
  .action(function(word, otherWords, options) {
    let willSearchWord = otherWords.reduce(
      (accumulator, currentValue) => accumulator + " " + currentValue,
      word
    );
    searchWord(willSearchWord, options.relevant);
  });

program.parse(process.argv);
