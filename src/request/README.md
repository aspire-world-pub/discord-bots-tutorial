# API
## Тут будет расказано как использовать api сервисы для команд бота.
-----

Для начала ознакомимся с таким модулем как `request`, вам потребуется установить его в `package.json` либо `node_modules` (смотреть главную страницу)

Давайте отправим запрос на nekos.life и запросим изображение neko

```js
const request = require("request");

request('https://nekos.life/api/v2/img/neko')
```

Запрос мы отослали, но ничего не получили так как и не пытались.

Теперь отошлем запрос и попробуем получить данные.

```js
const request = require("request");

request('https://nekos.life/api/v2/img/neko', function (error, response, body) {
let arr = JSON.parse(body);
console.log(arr) //  { url: 'https://cdn.nekos.life/neko/neko_269.png' }
})
```

Пример на отправке картинки в чат

```js
const request = require("request");

request('https://nekos.life/api/v2/img/neko', function (error, response, body) {
let arr = JSON.parse(body);
message.channel.sendFile(arr.url, 'neko.png') 
})
```

Мы получим 

![Image](https://xeval.ga/sc/dwhao2x.png)
