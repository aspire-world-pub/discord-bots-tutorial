module.exports.run = (client, message, args, xp, flags) => {
	let newpref = args[0];
	if(!newpref) {
		client.prefix[message.guild.id] = 'k!';
		message.channel.send("Префикс сброшен на `k!`.")
		return;
	} else {
		client.prefix[message.guild.id] = newpref;
		message.channel.send("Произошла смена префикса на `"+newpref+"`");
	}
}

module.exports.help = {
        name: 'prefix',
        description: 'Установить новый префикс',
        usage: 'PREFIXprefix [new prefix]',
        examples: []
}
module.exports.config = {
        hidden: false,
        private: false
}

