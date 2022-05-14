'use strict'

const { Command, Embed } = require('../../../structures/index.js')

const Vanilla = Command.Vanilla

module.exports = class extends Vanilla {
    constructor(ctx) {
        super(ctx, {
            name: 'servericon',
            aliases: ['iconserver'],
            avaliable: true
        })
    }
    async run() {
        const message = this.ctx.message
        const args = this.ctx.args

        if (args.length > 0) return

        let pfp = message.guild.iconURL({
            dinamyc: true,
            format: 'png',
            size: 2048
        })

        if (pfp === null) {
            let content = this.ctx.locale.command.servericon
            return message.reply({
                content: content
            })
        }

        let embed = new Embed(message.author)
            .setImage(pfp)

        try {
            return message.reply({
                embeds: [embed]
            })
        } catch (error) {

        }
    }
}