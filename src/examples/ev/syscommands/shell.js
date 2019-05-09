 const Discord = require('discord.js')
 const shell = require('executive')
 module.exports.run = (client, message, args, xp, flags) => {
	owners = new Set();
	owners.add('361951318929309707'); //owner
	if(!owners.has(message.author.id)) return;
	let arg = args.join(" ");
	if(!arg) return error("Не указан код выполнения");
	message.channel.send(`Oбработка команды`).then(mym =>{
		shell(arg, (e, r, b) => {
			if(e) return mym.edit(new 
			Discord.RichEmbed().setColor('BLURPLE').setDescription(e));
			message.channel.send(r, {split: "\n", code: 'bash'});
			});
	})
}

module.exports.help = {
        name: 'shell',
        description: 'Эмулировать sell команду',
        usage: 'PREFIXshell command',
        examples: ['PREFIXshell ls']
}
module.exports.config = {
        hidden: false,
        private: true
}

