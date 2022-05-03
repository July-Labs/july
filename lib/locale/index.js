var guild
var folder
var array = require('./')
module.exports = (guild) => {

  array.fotEach(e => {
    switch (guild) {
      case e:
        folder = e
        break;
      default:
        folder = 'default'
    }

  })
  var base = `base/${folder}`
  return {
    commands: require(join(process.cwd(),base, 'command.js'))
  }
}