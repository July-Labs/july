'use strict'

const { Base } = require('./structures/index.js')
const { join } = require('path')
const July = new Base()

const Locale = require(join(process.cwd(), 'lib/locale/index.js'))
const Plugins = {
  locale: Locale
}

July.LoadEvents()
July.LoadVanilla()
July.LoadPlugins(Plugins)
July.login(process.env.LOGIN)