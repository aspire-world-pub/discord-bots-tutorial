const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildCreate', (guild) => {
console.log(`Я был добавлен на сервер ${guild.name}`)
});

client.login('token');
