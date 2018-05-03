#! /usr/bin/env node

const program = require("commander");
const inquirer = require("inquirer");

const searchWord = require("./search").searchWord;
const VERSION = require("../config").VERSION;

program.version(VERSION, "-v, --version");

program
  .command("search <word>")
  .alias("s")
  .description("run the given remote command")
  .action(function(word) {
    console.log('search for "%s"', word);
    searchWord(word)
  });

program.parse(process.argv);
