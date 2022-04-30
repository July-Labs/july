const Discord = require("discord.js");

class Embed extends(
  Discord.MessageEmbed
) {
  constructor(user, data = {}) {
    super(data);
    this.setColor("WHITE");
    this.setFooter({
      text: `${user.tag}`,
      url: `${user.displayAvatarURL()}`
    })
  }
}
module.exports = Embed