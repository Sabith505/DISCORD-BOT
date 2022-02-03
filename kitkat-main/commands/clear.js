module.exports = {
    name: "clear",
    description: "Clears messages",

    async run (client, message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You can\'t use that!') 
        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send('I don\'t have the right permissions.')

        const amount = args.join(" ");

        if(!amount) return message.reply('please provide an amount of messages for me to delete')

        if(amount > 100) return message.reply(`you cannot clear more than 100 messages at once`)

        if(amount < 1) return message.reply(`you need to delete at least one message`)
        message.mentions.channels.first()
        message.delete()

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send('Cleared')

    }
}