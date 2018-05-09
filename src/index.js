#! /usr/bin/env node

const program = require("commander");

const searchWord = require("./search").searchWord;
const VERSION = require("../package").version;

program.version(VERSION, "-v, --version");

program.arguments("<word> [otherWords...]").action(function(word, otherWords) {
  let willSearchWord = otherWords.reduce(
    (accumulator, currentValue) => accumulator + " " + currentValue,
    word
  );
  searchWord(willSearchWord);
});

program.parse(process.argv);
