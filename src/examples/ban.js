let discord = require('discord.js');

let member = message.mentions.users.first();
let reason = args.slice(1).join(' ');
if(!member) return message.channel.send("Нужно указать пользователя");
if(!member.bannable) return message.channel.send("Я не могу его забанить");
await member.ban(reason)
      .catch(error => message.channel.send(`**${error}**`));
      
      message.channel.send(`${member.user.tag} был забанен пользователем ${message.author.tag}`);
