const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Произведен логин в ${client.user.tag} который находится на ${client.guilds.servers.size} серверах и видит ${client.channels.size} людей и ${client.users.size} пользователей`);
});

client.login('token');
