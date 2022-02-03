const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: "time",
    description: "time command",

    async run (client, message, args) {
        const pEmbed = new MessageEmbed()
        .setColor(`RANDOM`)
        .addField('Today is', `${moment(Date.now()).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
        message.channel.send(pEmbed);
    }
        
}