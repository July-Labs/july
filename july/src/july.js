const { Base } = require('./structures/index.js')

const July = new Base()

July.loadevents()
July.loadvanilla()
July.login(process.env.LOGIN)