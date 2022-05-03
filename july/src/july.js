const { Base } = require('./structures/index.js')
const { join } = require('path')
const locale = require(join(process.cwd(), 'lib/language/index.js'))

const July = new Base()

class Plugins {
  constructor() {
    this.locale = locale
  }
}
const plugins = new Plugins()
July.LoadEvents()
July.LoadVanilla()
July.LoadPlugins(plugins)
July.login(process.env.LOGIN)

console.log(July.plugins)
