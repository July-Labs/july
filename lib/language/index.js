'use strict'

const { join } = require('path')
const types = require('./types.js');
let GuildLang = 3
let base,lang

module.exports = class Language {
  constructor() {
    types.forEach(element => {
      switch (GuildLang) {
        case element:
          lang = element
					console.log("simm")
          break;
        default:
console.log("nnnnnnn")

          lang = 'default'
      }
    });
    base = `locale/${lang}`
  }
 // commands = require(join(process.cwd(), base, 'command.js'))
 // messages = require(join(process.cwd(), base, 'message.js'))
}
