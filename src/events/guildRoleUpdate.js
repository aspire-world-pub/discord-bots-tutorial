const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildRoleUpdate', (role) => {
console.log(`На сервере ${role.guild.name} изменена роль ${role.name}`)
});

client.login('token');
