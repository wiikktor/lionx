const commando = require('discord.js-commando');

class helpMeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'helpme',
            group: 'useful',
            memberName: 'helpme',
            description: 'Shows help about commands.',
          });
    }
    async run(message, args) {
        message.channel.send("```:tools: **Lion Help** :tools:```");
        message.channel.send("```test```")
        message.channel.send("```test```")
        message.channel.send("```test```")
    }
}

module.exports = helpMeCommand;
