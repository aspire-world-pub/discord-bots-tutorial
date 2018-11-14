const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberRemove', (member) => {
  console.log(`${member.user.tag} только что покинул ${member.guild.name}`);
});

client.login('token');
