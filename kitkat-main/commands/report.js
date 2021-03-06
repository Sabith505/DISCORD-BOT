const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "report",
    category : "Bot",
    description : "Send a message to Admin",
    timeout: 300000,
    usage: "[command]+[text]",
    run: async(client, message, args) => {
       const admin = client.users.cache.get("852767679349522452");
       const bug = args.join(" ");
       if(!bug) return message.channel.send('Please specify a bug!');

       const embed = new MessageEmbed()
       .setTitle('Bug report')
       .setColor('RANDOM')
       .addField('Username', message.author.toString(), true)
       .addField('ServerName', message.guild.name ,true)
       .addField('ServerID', message.guild.id , true)
       .addField('Bug', bug)
       .setThumbnail(message.author.displayAvatarURL())
       .setTimestamp()
       message.reply(`***Thanks for finding the bug! :)***`);
       admin.send(embed) 
    }
}