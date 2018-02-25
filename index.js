const Discord = require('discord.js');
const commando = require('discord.js-commando')
const bot = new commando.Client();


bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('useful', 'Useful');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.login('NDE0MzczMDk2MzQ3MTQwMDk3.DXQfAQ.1A-2WOa107Zxp9BYA4o6g3w24iQ')