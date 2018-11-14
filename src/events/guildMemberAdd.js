const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', (member) => {
  console.log(`На ${member.guild.name} только что прибыл ${member.user.tag}`);
});

client.login('token');
