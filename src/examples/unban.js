let discord = require('discord.js');

let member = args[0];
if(!member) return message.channel.send("Нужно указать id пользователя");
if(!member.bannable) return message.channel.send("Я не могу его забанить");
await message.guild.unban(member).then(member => {
      
      message.channel.send(`${member.user.tag} был разбанен пользователем ${message.author.tag}`);
      })
