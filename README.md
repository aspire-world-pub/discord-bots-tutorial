# Discord Bots tutorial
> ## Небольшой туториал и шаблоник по разработке js ботов

Итак, начнем с самого начала.

* Установим библиотеку discord.js

## ПК

Убедитесь в том, что на вашем ПК установлен `node js` и `npm`, если у вас нету данных компонентов, вы не сможете пройти последуйщие пункты.

[Скачать npm вместе node js можно тут](https://www.npmjs.com/get-npm)


Откройте cmd в вашей папке с ботом.

В windows 7 это делается легко, зажав `shift` кликните `ПКМ` по нужной вам папке, и нажмите `Открыть командную строку`.

В windows 10 это делается иначе, зайдите в папку и вместо пути к файлу напишите `cmd` и нажмите enter.
![В данную строку нужно ввести слово "cmd"](https://xeval.ga/sc/e6ph3yd.png)

После данных панипуляций пропишите в командую строку `npm install discord.js` и дождитесь установки модуля.

А потом запускайте нужный вам файл через команду `node file.js`

## Хост с Heroku

Heroku использует метод загрузки библиотек с файла `package.json`
![Демонстрация файла](https://xeval.ga/sc/fmshttq.png)

Вам потребуется создать файл с названием `package.json` и вставить туда данный код

```json
{
  "name": "bot",
  "version": "1.0.0",
  "description": "simple discord bot",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/user/project.git"
  },
  "keywords": [
    "discord",
    "bot"
  ],
  "dependencies": {
    "discord.js":"^11.3.0"
  },
  "author": "Your-name",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/user/project/issues"
  },
  "homepage": "https://github.com/user/project#readme"
}
```

Heroku прочтет данный файл при обновлении и загрузит модули.

# Основа

Перейдем к самому коду бота, а именно его индекс.

Базовый код вы можете наблюдать ниже.

```js
const Discord = require('discord.js'); // Загрузка discord.js библиотеки.
const client = new Discord.Client(); // Создание клиента для бота.

client.on('ready', () => { // Эвент который триггерится когда бот будет запущен.
  console.log(`Logged in as ${client.user.tag}!`); // Вывод в логи сообщения о том что бот был запущен.
});

client.on('message', message => { // Эвент который триггерится когда кто-то отправит сообщение.
  if (message.content === 'ping') { // Проверка на сообщение, код в {} будет выполнен если бот заметит сообщение 'ping'
    message.reply('Pong!'); 
  }
});

client.login('token'); // Логин.
```

Данный код уже дает боту жизнь, и бот может функционировать, но теперь нужно установить защиту от других ботов.

Проблема заключается в том, что боты могут читать сообщения ботов как не странно, и реагировать на них тоже, это может приводить к цикличным действиям или обход проверки на права.

Это можно исправить 1 строкой.

```js
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if(message.author.bot) return; // А вот и сама проверка на бота.
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
});

client.login('token');
```

---- 

## Heroku - прячем токен

Думаю все знают что github платформа которая позволяет размещать на ней код и другие файлы, однако их могут просматривать и другие пользователи.

Речь идет об защите токена, так как его могут украсть и использовать в своих целях.

Защитить токен довольно легко.

Зайдите на свой проект в heroku и перейдите в раздел `Settings`, нажмите на кнопку `Reveal Config Vars`

Данный конфиг является хранилищем системных переменых, которые загружаются в бота с хоста самостоятельно.

![Системная переменая](https://xeval.ga/sc/1p7y8nd.png)

Добавьте в строку `KEY` слово `TOKEN`, а в строку `VALUE` укажите токен вашего бота.

После этого используйте вместо токена бота переменую `process.env.TOKEN`
