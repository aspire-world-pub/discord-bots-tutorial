module.exports.run = (client, message, args, xp, flags) => {
	let prefix = client.prefix[message.guild.id];
	let f = client.f;
	let cmd = args[0];
	if(!cmd) {
		let embed = f.embed()
		.setTitle("Command list")
		.setColor('GREEN')
		.setDescription(client.commands.filter(c => !c.config.hidden).map(c => `◽ **${prefix}${c.help.name} -** ${c.help.description ? c.help.description :'команда без описания'}`).join('\n'))
	return message.channel.send(embed);
	}
		let command = require(`./${cmd}`);
		let embed = f.embed()
		.setTitle(command.help.name.toUpperCase())
		.addField('Description', command.help.description || 'none', true)
		.addField('Usage', (command.help.usage).replace('PREFIX', prefix) || 'none', true)
		.addField('Examples', command.help.examples.map(r => r.toString().replace('PREFIX', prefix)) || 'none', true)
		.addField('private', '- ' + command.config.private ? 'Yes.' : 'No.', true) 
		.setColor('GREEN')
		message.channel.send(embed)
	}

module.exports.help = {
        name: 'help',
        description: 'Вывести список команд или получить подробное описание',
        usage: 'PREFIXhelp | PREFIXhelp [command]',
        examples: [
        ['PREFIXhelp'], ['PREFIXhelp ping']
        ]
}
module.exports.config = {
        hidden: false,
        private: false
}

