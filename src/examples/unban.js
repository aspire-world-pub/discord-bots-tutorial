let discord = require('discord.js');

let member = args[0];
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('У вас нету прав на выполнение этой команды');
if(!member) return message.channel.send("Нужно упомянуть пользователя");
await message.guild.unban(member).then(member => {
      
      message.channel.send(`${member.user.tag} был разбанен пользователем ${message.author.tag}`);
      })
