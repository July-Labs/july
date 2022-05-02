const { Event } = require('../../structures/index.js')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Event {
  constructor(client) {
    super(client, {
      name: 'ready'
    })
  }

  execute = async () => {
    let embed = new MessageEmbed()
      .setColor('WHITE')
      .setTitle('Online!')
      .setDescription(`**Iniciado por \`BobyCake\`**`)
      .addField('Usuários', `${this.client.users.cache.size}`)
      .addField('Loadeds', '✅Comandos\n✅Eventos')
      .setThumbnail(this.client.user.avatarURL({
        dynamic: true,
        size: 1024,
        format: 'png'
      }))
    this.client.user.setActivity('Em desenvolvimento...', { type: "PLAYING" })
    this.client.user.setStatus('online')
    this.client.channels.cache.get('954846367065468948').send({
      embeds: [embed]
    })
    console.log(`${this.client.user.username} logado [${this.client.guilds.cache.size}] servs.`)

  }
								}