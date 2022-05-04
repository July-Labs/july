'use strict'

const { Command, Embed } = require('../../../structures/index.js')
const Vanilla = Command.Vanilla

module.exports = class extends Vanilla {
  constructor(ctx) {
    super(ctx, {
      name: 'ping',
      aliases: ['pin'],
      avaliable: true
    })

  }
  async run() {
    const message = this.ctx.message
    const client = this.ctx.client

    const { desc } = this.ctx.locale.command.botinfo
      .replace('{author}', message.author)
      .replace('{client}', client.user.username)
      .replace('{guilds}', client.guilds.cache.size)
      .replace('{users}', client.users.cache.size)

    let embed = new Embed(message.author)
      .setDescription(desc)

    return message.reply({
      embeds: [embed]
    }).then(m=>{
      m.react('🇧🇷')
    })
  }
}
