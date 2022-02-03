const { MessageFlags } = require("discord.js");

module.exports = {
    name: "say",
    desciption: "say command",

    async run (client, message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send('I don\'t have the right permissions.')  

        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        msg = args.join(" ");
        message.channel.send(msg)
        
    }
}