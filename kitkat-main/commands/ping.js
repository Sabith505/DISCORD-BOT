const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "test command",

    async run (client, message, args) {


        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${client.ws.ping}\`ms`);
        message.mentions.channels.first()
        message.delete()


        message.channel.send(ping);
    }
}