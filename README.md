# Discord Bots tutorial
> ## Небольшой туториал и шаблоник по разработке js ботов

Итак, начнем с самого начала.

* Установим библиотеку discord.js

# ПК

Убедитесь в том, что на вашем ПК установлен `node js` и `npm`, если у вас нету данных компонентов, вы не сможете пройти последуйщие пункты.

[Скачать npm вместе node js можно тут](https://www.npmjs.com/get-npm)


Откройте cmd в вашей папке с ботом.

В windows 7 это делается легко, зажав `shift` кликните `ПКМ` по нужной вам папке, и нажмите `Открыть командную строку`.

В windows 10 это делается иначе, зайдите в папку и вместо пути к файлу напишите `cmd` и нажмите enter.
![В данную строку нужно ввести слово "cmd"](https://xeval.ga/sc/e6ph3yd.png)

После данных панипуляций пропишите в командую строку `npm install discord.js` и дождитесь установки модуля.

# Хост с Heroku

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
