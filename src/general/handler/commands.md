# ВНИМАНИЕ - должен быть установлен `fs`


```js
client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});
```

# Запуск
Само сабой нужно сделать так, чтоб все это работало, запускаем event на регистрацию сообщений.

```js
module.exports = (client, message) => {
  // Игнор ботов
  if (message.author.bot) return;

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Оргументация.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Достаем информацию про команду.
  const cmd = client.commands.get(command);

  // Если данной команды нет, возращаем ничего.
  if (!cmd) return;

  // Запускаем команду
  cmd.run(client, message, args);
};
```

# Пример команды

### Вам потребуется создать файл `./commands/ping.js`, она будет названа `!ping` с следуйщим содержанием.


```js
exports.run = (client, message, args) => {
    message.channel.send("pong!").catch(console.error);
}
```

