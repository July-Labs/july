'use strict'

const { MessageEmbed } = require('discord.js')
const { Command } = require('../../../structures/index.js')
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

    var embed = new MessageEmbed()
      .setColor('RED')
      .setDescription(`${desc}`)

    this.ctx.message.reply({
      embeds: [embed]
    }).then(m => m.react('🏓'))
  }
}