# Работа с библиотекой Canvas
Используйте команду `npm install canvas` для загрузки модуля.

Если вы работаете с Heroku добавьте в ваш package `"canvas": "^2.0.0-alpha.12"`

Что-бы использовать весь потенциал canvas, добавьте так-же 
```js
"canvas-constructor": "^1.0.1",
"canvas-progress-bar": "^1.0.3"
 ```
 
 Или в cmd `npm install canvas-constructor canvas-progress-bar`


Много я с этой библиотекой не работал, поэтому знать все не могу, однако тут будет пример о том, как создавать обьекты, давать им цвета и писать на них.

```js
const { Canvas } = require('canvas-constructor');
function shablon() {
return new Canvas(600, 300) // Создание обьекта, при создании имеет прозрачность
    .setColor('#7289DA') // Убираем прозрачность заданым цветом.
    .addRect(0, 0, 600, 300) // Создаем блок
    .setColor('#2C2F33') // Даем ему цвет
    .addRect(0, 125, 600, 300) // ...
    .setColor("#84BDF9") // ...
    .addRect(0, 95, 200, 30) // ...

    .toBuffer();
}

message.channel.sendFile(shablon())
```

Пример с текстом, картинкой и поворотом.

```js
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d') // Получаем контекст 

// Пишем текст 'Awesome!'
ctx.font = '30px Impact'
ctx.rotate(0.1)
ctx.fillText('Awesome!', 50, 100)

//Рисуем линию снизу текста
var text = ctx.measureText('Awesome!')
ctx.strokeStyle = 'rgba(0,0,0,0.5)'
ctx.beginPath()
ctx.lineTo(50, 102)
ctx.lineTo(50 + text.width, 102)
ctx.stroke()

loadImage('http://barbmayer.com/images/backgrounds/aura-background-large-1.jpg').then((image) => {
  ctx.drawImage(image, 50, 0, 70, 70)
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');
  message.channel.send(attachment )
})
``` 

На этом пока все.
