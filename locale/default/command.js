module.exports = {
  ping: {
    text: '🏓 Meu ping está em \`{ping}ms\`'
  },
  botinfo: {
    desc: 'Oii {author}, eu sou a **{client}**, uma bot totamente **Brasileira** e de codigo aberto, fui criada para divertir servidores😆\n\nAtualmente faço parte de **{guilds}** servidores, cuidando de **{users}** pessoas, estou sendo desenvolvida em [Javascript](https://g.co/kgs/Y3JcCz), utilizando [Discord.js](https://github.com/discordjs/discord.js/)',
    fields: [
      ['Estatisticas', '**Cpu:**\n > **Modelo:** \`\`{cpuModel}\`\`\n> **Plataforma:** \`{plataform}\`\n> **Memoria:** \`{totalMem} bytes\`']
    ]
  },
  avatar: {
    desc: '{author} olha aqui esse lindo avatar!!'
  },
  uptime: 'Estou online ha \`{time}\` segundos',
  servericon: 'Este servidor nao possui um icone',
  userinfo: {
    presence: {
      status: {
        dnd: 'Ocupado',
        idle: 'Ausente',
        stream: 'Transmitindo',
        offline: 'Offline',
        online: 'Online'
      },
      activity: {
        PLAYING: '🎮 jogando',
        LISTENING: '🎧 ouvindo',
        WATCHING: '📺 assistindo',
        STREAMING: '🛰 streamando'
      }
    },
    fields:[
      ['💻 Id','{id}'],
      ['Nick','{nick}'],
      ['🟢 Status','{statusss'],
      ['🎮 Atividade','{atv}']
    ]
  }
}