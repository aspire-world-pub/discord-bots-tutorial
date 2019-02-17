# Embed

Наверное не секрет, что боты могут слать `embed` сообщения, данный метод дан им для красивого оформления сообщений, вам же было бы неприятно смотреть на кучи текста.

Перейдем к практике.

Создадим сам `embed`:
# Внимание
## const передающая `Discord` может быть разной, она указывается в строке `const Discord = require('discord.js')`

```js
  const embed = new Discord.RichEmbed()
```

Мы создали обьект содержащий наш embed, теперь начнем работу с конструктором.

```js
  const embed = new Discord.RichEmbed()
  .setTitle("This is simple embed");
  
  message.channel.send({embed})
```

Мы получили самый обычный embed 

![image](http://skrinshoter.ru/i/170219/vL0tdfGV.png)

Добавим ему цвет и description:

```js
  const embed = new Discord.RichEmbed()
  .setTitle("This is simple embed")
  .setDescription("Примерочный текст для embed сообщения.")
  .setColor("#FF5733");
  message.channel.send({embed})
```

Наш embed стал заметнее и красивее, а так-же содержит больше информации

![image](http://skrinshoter.ru/i/170219/yBtvj3QR.png)

Добавим footer, timestamp и field's

Field вмещают в себя больше всего информации так как их можно использовать очень много, но все-же не бесконечно, у них есть лимит для 1 сообщения.

```js
  const embed = new Discord.RichEmbed()
  .setTitle("This is simple embed")
  .setDescription("Примерочный текст для embed сообщения.")
  .setColor("#FF5733")
  .addField("Линия #1", "Содержание линии #1")
  .addField("Линия #2", "Содержание линии #2")
  .addField("Линия #3", "Содержание линии #3", true) //true придает embed.field свойство inline
  .addField("Линия #4", "Содержание линии #4", true) //true придает embed.field свойство inline
  .setFooter("Самый обычный footer")
  message.channel.send({embed})
```
![image](http://skrinshoter.ru/i/170219/HEn1AqEI.png)

Подробнее на [документации](https://discord.js.org/)
