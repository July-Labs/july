module.exports = {
  Base: require('./client/base.js'),
  Event: require('./event/base.js'),
  Embed: require('./embed/builder.js'),
  Command: {
    Vanilla: require('./command/vanilla.js'),
    Slash: require('./command/slash.js')

  }
}