const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "ann",
    desciption: "ann command",

    async run (client, message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You can\'t use that!') 
        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send('I don\'t have the right permissions.')  

        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()
        msg = args.join(" ");
        const _ = new MessageEmbed()
        .setDescription(`${msg}`)
        .setColor('#f20505')

        message.channel.send(_)

    }
}