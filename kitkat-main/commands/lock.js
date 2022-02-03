const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "lock",
    desciption: "lock command",

    async run (client, message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You can\'t use that!') 
        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send('I don\'t have the right permissions.')
        
        let channeltolock = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])

        if(!channeltolock) return message.reply(`No Channel Mentioned !`);
        
        let everyone = message.guild.roles.cache.get(message.guild.id)
        
        channeltolock.updateOverwrite(everyone, {
            SEND_MESSAGES: false
            
          },[`REPONSIBLE MODERATOR | ${message.author.tag}`])
            .then(message.reply(`Locked Channel ${channeltolock} ! `))
            .catch(console.error);
            
        
    }
}