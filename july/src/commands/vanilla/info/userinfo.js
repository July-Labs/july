'use strict'

const { Command, Embed } = require('../../../structures/index.js')

const Vanilla = Command.Vanilla

module.exports = class extends Vanilla {
    constructor(ctx) {
        super(ctx, {
            name: 'userinfo',
            aliases: [],
            avaliable: true
        })

    }
    async run() {

        const args = this.ctx.args
        const message = this.ctx.message
        const client = this.ctx.client
        const {presence, fields}= this.ctx.locale.command.userinfo

        if (args[1]) return

        const user = message.mentions.users.first() || message.author
        const guild = client.guilds.cache.get(message.guild.id);
        const member = guild.members.cache.get(user.id);

        let nick = fields[1][1].replace()
        let id = fields[0][1].replace('{id}',user.id)
        let embed = new Embed(user)
        .setTitle(user.username)
        .setThumbnail(user.displayAvatarURL())
        .addField(fields[0][0],id)


        if (member.presence) {

        let status = fields[2][1].replace('{status}',presence.status[member.presence.status])
            embed.addField(fields[2][0],status);

            let activity = member.presence.activities[0];

            if (activity) {
                if (activity.type === 'CUSTOM')
                    activity = member.presence.activities[1];
                if (!activity) return;

                embed.addField(
                    'Atividade',
                    `>  ${presence.activity[activity.type]} ${activity.name}`,
                    true
                );
            }
        }
        embed.addField(
            'Data de Criação',
            `<t:${~~(user.createdTimestamp / 1000)}>`
        )
        return message.reply({ embeds: [embed] })

        try {
            message.reply({
                embeds: [embed]
            })
        } catch (error) {

        }
    }
}