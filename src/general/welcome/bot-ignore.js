const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if(message.author.bot) return; // А вот и сама проверка на бота.
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
});

client.login('token');
