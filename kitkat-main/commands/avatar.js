const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "avatar",
    desciption: "avatar command",

    async run (client, message, args) {
        let target = message.mentions.members.first() || message.member
        const avembed = new Discord.MessageEmbed()
        .setTitle(`${target.user.tag}`)
        .setColor(`RANDOM`)
        .setImage(target.user.displayAvatarURL({dynamic : true , size: 4096 ,format:"png"}))
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp()
       
        message.channel.send(avembed)
        
    }
}