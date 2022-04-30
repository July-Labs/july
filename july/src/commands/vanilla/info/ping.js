'use strict'

const { Command, Embed } = require('../../../structures/index.js')
const Vanilla = Command.Vanilla

module.exports = class extends Vanilla {
  constructor() {
    super({
      name: 'ping',
      aliases: ['pin'],
      avaliable: true
    })
  }
  async run(ctx) {
    let embed = new Embed(ctx.message.author)
      .setTitle(`🏓 Meu ping está em ${ctx.client.ws.ping}ms\``)

    return ctx.message.reply({
      embeds: [embed]
    })
  }
			}