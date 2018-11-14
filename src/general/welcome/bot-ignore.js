const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(message.author.bot) return; // А вот и сама проверка на бота.
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('token');
