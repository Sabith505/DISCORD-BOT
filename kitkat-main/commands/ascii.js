const figlet = require('figlet');

module.exports = {
    name: "ascii",
    description: "Converts text to ascii",

    async run (client, message, args){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You can\'t use that!')  
        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send('I don\'t have the right permissions.')  

        if(!args[0]) return message.channel.send('Please provide some text');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Please provide text shorter than 2000 characters')

            message.mentions.channels.first()
            message.delete()

            message.channel.send('```' + data + '```')
        })
    }
}