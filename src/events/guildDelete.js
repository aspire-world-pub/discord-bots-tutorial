const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildDelte', (guild) => {
console.log(`Я был удален с сервера ${guild.name}`)
});

client.login('token');
