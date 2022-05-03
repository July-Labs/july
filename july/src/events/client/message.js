const { Event } = require('../../structures/index.js')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Event {
  constructor(client) {
    super(client, {
      name: 'messageCreate'
    })
  }

  execute = async (message) => {

    let locale = new this.client.plugins.locale(message.guild.id)

    let prefix = process.env.PREFIX
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase()

    if (message.author.bot) return;
    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
    if (!message.content.startsWith(prefix)) return;
    if (cmd.length === 0) return;

    let command = this.client.vanilla.get(cmd)
    
    if (!command) command = this.client.vanilla.get(this.client.aliases.get(cmd))
    
		  let ctx = {
      client: this.client,
      message: message,
      args: args,
      locale: locale
    }
    command = new command(ctx)
	//console.log(command)
		if (!command) return

    try {
      command.run()
    } catch (err) {
      console.error('Erro:' + err);
    }
  }
}
