'use strict'

const fs = require('fs')
const path = require('path')
const { Collection, Client } = require('discord.js');
//const Cluster = require('discord-hybrid-sharding');

module.exports = class extends Client {
  constructor(opts) {
    super({

      intents: 32767,
      allowedMentions: {
        parse: ["users", "roles"],
        repliedUser: false
      },
      ...opts
    })
    this.commands = []
    this.vanilla = new Collection();
    this.aliases = new Collection();
  }
  LoadSlash() {
    try {
      let folder = 'src/commands/slash'
      const categories = fs.readdirSync(folder)

      for (const category of categories) {
        const commands = fs.readdirSync(`${folder}/${category}`)

        for (const command of commands) {
          const commandClass = require(path.join(process.cwd(), `${folder}/${category}/${command}`))
          const cmd = new(commandClass)(this)

          this.commands.push(cmd)
        }
      }
      console.log('✅[Slash]: Comandos carregados!')
    } catch (e) {
      console.log('❌[Slash]: Erro ao carregar os comandos: ' + e)
    }
  }
  SetSlash() {
    this.application.commands.set(this.commands)
  }

  LoadVanilla() {
    try {
      const commands_path = path.join(__dirname, "..", "..", "commands", "vanilla");

      fs.readdirSync(commands_path).forEach(async (local) => {
        const files = fs.readdirSync(path.join(commands_path, local));

        let vanilla;
        for (let file of files) {

          if (file.endsWith(".js")) {
            vanilla = require(path.join(commands_path, local, file));
            vanilla = new vanilla()
            this.vanilla.set(vanilla.name, vanilla);

            for (let aliase of vanilla.aliases) {
              this.aliases.set(aliase, vanilla.name);
            }
          }
        }
      });
      console.log('✅[Prefix]: Comandos carregados!')
    } catch (e) {
      console.log('❌[Prefix]: Erro ao carregar os comandos: ' + e)
    }
  }
  LoadEvents() {
    try {
      let folder = 'july/src/events'
      const categories = fs.readdirSync(folder)

      for (const category of categories) {
        const events = fs.readdirSync(`${folder}/${category}`)

        for (const event of events) {
          const eventClass = require(path.join(process.cwd(), `${folder}/${category}/${event}`))
          const evt = new(eventClass)(this)

          this.on(evt.name, evt.execute)
        }
      }
      console.log('✅[Events]: Eventos carregados!')
    } catch (e) {
      console.log('❌[Events]: Erro ao carregar os eventos: ' + e)
    }
  }

  LoadPlugins(plugin) {
    this.plugins = plugin
    
  }
}
