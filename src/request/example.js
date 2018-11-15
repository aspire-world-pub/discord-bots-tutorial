let bot = message.mentions.users.first();
	    let botid = bot.id;
	    if(!bot) {
		    botid = client.user.id;
	    }
	    if(!bot.bot) return message.channel.send("А это точно бот?");
	    request('https://discordbots.org/api/bots/' + botid, (e, r, b)=> {
						let contenu = JSON.parse(b)
					if(contenu.error === "Not found")  {
					const embed = new Discord.RichEmbed()
						embed.setDescription("**Error**\nУказан неправельный бот, либо данного бота нет в DBL.org, упомяните нужного вам бота.")
						embed.setColor("#ffd954")
						message.channel.send({embed});
					} else {
						try {
                                                const embed = new Discord.RichEmbed()
						embed.setAuthor(contenu.username, "https://cdn.discordapp.com/avatars/"+botid+"/"+contenu.avatar+".png")
						embed.setThumbnail("https://cdn.discordapp.com/avatars/"+botid+"/"+contenu.avatar+".png")
						embed.setColor("#ffd954")
						embed.setTimestamp()
						embed.addField(contenu.username, contenu.shortdesc, true)
						embed.addField("Проверенный? <:dblCertified:392249976639455232>", contenu.certifiedBot === true ? "Да <:tickYes:315009125694177281>" : "Нет <:tickNo:315009174163685377>", true)
						embed.addField("Количество серверов", contenu.server_count || "Не опубликовано", true)
                                                embed.addField("Shards count", contenu.shard_count || "Нету, либо не опубликовано", true)
						embed.addField("Библиотека", contenu.lib, true)
						embed.addField("Дата добавления", contenu.date, true)
						embed.addField("Префикс", contenu.prefix, true)
						embed.addField("Upvotes", contenu.points, true)
						embed.addField("Создатель(ли)", "<@"+contenu.owners.join(">, <@")+">", true)
						embed.addField("тег(и)", contenu.tags.length != 0 ? contenu.tags.join(", ") : "Тегов нет", true)
						embed.addField("Ссылки", "[Invite](" + contenu.invite + "), [DBL.org](https://discordbots.org/bot/" + botid + " ), [Github](" + contenu.github + "), [Website](" + contenu.website + "), [Support Server](https://discordapp.com/invite/" + contenu.support + ")", true)
message.channel.send({embed});
						}catch(err) {message.channel.send(err)}
						
    }
  })
  
  //Информация об указаном боте
