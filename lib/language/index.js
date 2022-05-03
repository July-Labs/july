'use strict'

const { join } = require('path')
const types = require('./types.js');
let GuildLang, base, lang

module.exports = class Language {
  constructor() {
    types.forEarch(element => {
      switch (GuildLang) {
        case element:
          lang = element
          break;
        default:
          lang = 'default'
      }
    });
    base = `locale/${lang}`
  }
  commands = require(join(process.cwd(), base, 'command.js'))
  messages = require(join(process.cwd(), base, 'message.js'))
}
