let discord = require('discord.js');

let member = args[0];
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('У вас нету прав на выполнение этой команды'); // проверка на права
if(!member) return message.channel.send("Нужно указать ID пользователя"); // если пользователь не указан
if(!member.bannable) return message.channel.send('Я не могу его разбанить');
await message.guild.unban(member).then(member => {
      
      message.channel.send(`${member.user.tag} был разбанен пользователем ${message.author.tag}`); // сообщает в том же канале что пользователь был разбанен
      })
