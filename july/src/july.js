const { Base } = require('./structures/index.js')
const { join } = require('path')
const locale = require(join(process.cwd(), 'lib/locale/index.js'))

var a = locale('teste')
July.LoadEvents()
July.LoadVanilla()
July.login(process.env.LOGIN)

console.log(July.plugins)
