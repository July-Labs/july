'use strict'

const { Command, Embed } = require('../../../structures/index.js')
const Vanilla = Command.Vanilla

module.exports = class extends Vanilla {
  constructor(ctx) {
    super(ctx,{
      name: 'ping',
      aliases: ['pin'],
      avaliable: true
    })

  }
  async run(){
		let embed = new Embed(this.ctx.message.author)
		.setDescription(`${this.ctx.client.ws.ping}`)
		this.ctx.message.reply({
			embeds: [embed]
		})
  }
	}
