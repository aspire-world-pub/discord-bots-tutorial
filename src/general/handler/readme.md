# HANDLER

## HANDLER - очень полезная вещь для ботов, особено которые работают с удаленых машин или вашего PC где можно работать с ботом не влия на хост.

Сама его особеность - использование файлов которые не находятся в боте, загрузка модулей из папки с командами.

Использование данного метода позволяет загружать, выгружать и **обновлять** команды без перезапуска бота. Это распределит нагрузку по боту.

# EXAMPLE

```js
client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Загрузка команды
    let props = require(`./commands/${file}`);
    // Получение названия команды
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    // Регистрация команды в enmap
    client.commands.set(commandName, props);
  });
});
```

