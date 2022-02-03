const Discord = require('discord.js');

const client = new Discord.Client();

const { token } = require('./config.json');

const { readdirSync } = require('fs');

const { join } = require('path');

client.commands= new Discord.Collection();

const prefix = '%';
//You can change the prefix if you like




const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

client.on("error", console.error);



client.on('ready', () => {
    console.log('I am ready');
    client.user.setStatus(`idle`)
    const guild = client.guilds.cache.get('882259253493108758');   // Change server id
    const memberCount = guild.memberCount;
    client.user.setActivity(`${memberCount} members`, { type: 'WATCHING' })  
    
});


client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.on('message', message => {
  if (message.channel.type === "dm" && message.author.id !== client.user.id) {
    message.author.send("Thanks for messaging");
    client.channels.cache.get('882259255288287289').send({ // change channel id here
      embed: {
        color: 0x8b0000,
        title: message.author.tag,
        description: message.content,
        timestamp: new Date(),
      }
    });
  }
})

client.login(token);