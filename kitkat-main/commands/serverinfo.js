const {MessageEmbed} = require("discord.js");


module.exports = {
    name: "serverinfo",
    desciption: "Information about server",

    async run (client, message, args) {
      const guild = client.guilds.cache.get('882259253493108758'); 
      const memberCount = guild.memberCount;
      let server = message.guild;
      const serverinfoembed = new MessageEmbed()

      .setTitle(` __${server.name}__`)
      .setColor(`RANDOM`)
      .setThumbnail(server.iconURL({dynamic:true}))
      .addField(`Owner: `,`<@855107949004849152>`,true)  // change owner id
      .addField(`REGION: `,`${server.region}`,true)
      .addField(`Channels`,`${server.channels.cache.size}`,true)
      .addField(`Members`,`${memberCount}`)
      .addField(`Roles`,`${server.roles.cache.size}`,true)
      .addField(`Created At`,`${server.createdAt}`,true)
      message.channel.send(serverinfoembed)

    }
}