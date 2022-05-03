'use strict'

const { Command, Embed } = require('../../../structures/index.js')
const Vanilla = Command.Vanilla

module.exports = class extends Vanilla {
  constructor(ctx) {
    super({
      name: 'ping',
      aliases: ['pin'],
      avaliable: true
    })
  }
  async run() {
    
    let embed = new Embed(ctx.message.author)
      .setTitle(this.client.ws.ping)

    return ctx.message.reply({
      embeds: [embed]
    })
  }
			}
