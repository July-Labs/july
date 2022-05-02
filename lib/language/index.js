'use strict'

const { join } = require('path')
const types = require('./types.js');
let base, lang

module.exports = class Language {
  constructor(ctx) {
    
    types.forEarch(element => {
      switch (guild) {
        case element:
          lang = element
          break;
        default:
          lang = 'default'
      }
    });
    base = `locale/${lang}`
  }
  commands = require(join(process.cwd(), base, 'commands.js'))(ctx)
  messages = require(join(process.cwd(), base, 'messages.js'))(ctx)

}