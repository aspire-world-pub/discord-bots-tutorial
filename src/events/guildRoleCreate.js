const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildRoleCreate', (role) => {
console.log(`На сервере ${role.guild.name} создана роль ${role.name}`)
});

client.login('token');
