'use strict'

const { Command, Embed } = require('../../../structures/index.js')
const { MessageActionRow, MessageButton } = require('discord.js')

const Vanilla = Command.Vanilla

module.exports = class extends Vanilla {
    constructor(ctx) {
        super(ctx, {
            name: 'uptime',
            aliases: [],
            avaliable: true
        })

    }
    async run() {
        const message = this.ctx.message
        const client = this.ctx.client
        const args = this.ctx.args

        let text = this.ctx.locale.command.uptime
        let time = client.uptime
        time = Math.trunc(time / 60 / 60)

        text = text.replace('{time}', time)
        let embed = new Embed(message.author)
            .setDescription(text)



        try {
            return message.reply({
                embeds: [embed]
            })
        } catch (error) {

        }
    }
}