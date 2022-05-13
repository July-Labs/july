'use strict'

const { Command, Embed } = require('../../../structures/index.js')
const Vanilla = Command.Vanilla

const os = require('os')

module.exports = class extends Vanilla {
  constructor(ctx) {
    super(ctx, {
      name: 'botinfo',
      aliases: ['botinfo'],
      avaliable: true
    })
  }
  async run() {
    const message = this.ctx.message
    const client = this.ctx.client
    const locale = this.ctx.locale.command.botinfo

    const desc = this.ctx.locale.command.botinfo.desc
      .replace('{author}', message.author)
      .replace('{client}', client.user.username)
      .replace('{guilds}', client.guilds.cache.size)
      .replace('{users}', client.users.cache.size)

    let cpu = os.cpus()[0]
    let model = cpu.model
    let platform = os.platform()
    let totalMem = os.totalmem()
    let f = this.ctx.locale.command.botinfo.fields
    var f1 = f[0][1]
    f1 = f1
      .replace('{cpuModel}',model)
      .replace('{plataform}',platform)
      .replace('{totalMem}',totalMem)
    console.log(cpu[0])

    let embed = new Embed(message.author)
      .setDescription(desc)
      .setThumbnail(client.user.avatarURL({
        size: 1024,
        format:'png',
        dynamic: true
      }))
      .addField(f[0][0],f1)

    return message.reply({
      embeds: [embed]
    }).then(m=>{
      m.react('🇧🇷')
    })
  }
}
