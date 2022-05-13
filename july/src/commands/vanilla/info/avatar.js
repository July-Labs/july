'use strict'

const { Command, Embed } = require('../../../structures/index.js')
const { MessageActionRow, MessageButton } = require('discord.js')

const Vanilla = Command.Vanilla

module.exports = class extends Vanilla {
    constructor(ctx) {
        super(ctx, {
            name: 'avatar',
            aliases: ['avt'],
            avaliable: true
        })

    }
    async run() {
        const message = this.ctx.message
        const client = this.ctx.client
        const args = this.ctx.args

        let { desc } = this.ctx.locale.command.avatar


        let user = message.mentions.users.first()

        if (args.length > 0 && !message.mentions.users.first()) {
            return
        }

        if (args.length > 0 && message.mentions.users.first() && (!args[1])) {
            if (args[1]) {
                return
            } else {
                user = user
            }
        }
        if (!args[0]) {
            user = message.author
        }
        const avatar = user.displayAvatarURL({
            dinamyc: true,
            format: 'png',
            size: 2048
        })
        desc = desc.replace('{author}', user)
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Baixar')
                    .setURL(avatar)
                    .setStyle('LINK')
            );
        const EmbedAvatar = new Embed(message.author)
            .setDescription(desc)
            .setImage(avatar)
        message.reply({ embeds: [EmbedAvatar], components: [row] })
    }
}