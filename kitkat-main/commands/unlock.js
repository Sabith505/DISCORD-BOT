const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
  name: "unlock",
  desciption: "unlock command",

  async run (client, message, args) {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You can\'t use that!')  // change role id
      if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send('I don\'t have the right permissions.')

      let channeltolock = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])

      if(!channeltolock) return message.reply(`No Channel Mentioned !`);
      
      let everyone = message.guild.roles.cache.get(message.guild.id)
      
      channeltolock.updateOverwrite(everyone, {
          SEND_MESSAGES: true
          
        },[`REPONSIBLE MODERATOR | ${message.author.tag}`])
          .then(message.reply(`Unlocked Channel ${channeltolock} ! `))
          .catch(console.error);
          
      
  }
}