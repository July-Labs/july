var guild
var folder
var array = require('./array')
var {join} = require('path')
module.exports = (guild) => {

  array.forEach(e => {
    switch (guild) {
      case e:
        folder = e
        break;
      default:
        folder = 'default'
    }

  })
  var base = `locale/${folder}`
  return {
    commands: require(join(process.cwd(),base, 'command.js'))
  }
}