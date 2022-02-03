const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { stripIndents } = require("common-tags");


module.exports = {
    name: "help",
    desciption: "help command",

    async run (client, message, args) {
        const embed = new MessageEmbed()
        .setTitle('Prefix - ``%``')
        .setDescription('Report bug of bot using ``%report``')
        .setColor(`RANDOM`)
        .addField(`Moderation :`,'``ann``, ``say``, ``clear``, ``kick``, ``lock``, ``unlock``, ``poll``')
        .addField(`Info :`,'``avatar``, ``serverinfo``, ``roleinfo``, ``botinfo``')
        .addField(`Fun :`,'``slap``, ``kiss``, ``hug``')  
        .addField(`Group Games :`,'``chess``, ``poker``, ``youtube``')

        return message.channel.send(embed)
        
    }
}