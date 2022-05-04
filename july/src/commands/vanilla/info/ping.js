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
    var desc = this.ctx.locale.command.ping.text
    .replace(
      '{ping}',
      this.ctx.client.ws.ping
    )

    var embed = new Embed(this.ctx.message.author)
      .setDescription(`${desc}`)

    this.ctx.message.reply({
      embeds: [embed]
    })
  }
}