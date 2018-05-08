#! /usr/bin/env node

const program = require("commander");

const searchWord = require("./search").searchWord;
const VERSION = require("../package").version;

program.version(VERSION, "-v, --version");

program.arguments("<word>").action(function(word) {
  searchWord(word);
});
program.parse(process.argv);
