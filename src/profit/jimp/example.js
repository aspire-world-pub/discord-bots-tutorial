if (['ping'].includes(command)) {
// Чтение изображения
jimp.read("https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/%D0%A1%D0%B5%D1%80%D1%8B%D0%B9_%D1%86%D0%B2%D0%B5%D1%82-_2014-03-15_18-16.jpg/220px-%D0%A1%D0%B5%D1%80%D1%8B%D0%B9_%D1%86%D0%B2%D0%B5%D1%82-_2014-03-15_18-16.jpg").then(function(b) {
        jimp.loadFont(jimp.FONT_SANS_32_WHITE).then(function(fnt) {
        b.print(fnt, 5,5, 'Ping is');
        b.print(fnt, 5, 35, `${Date.now() - message.createdTimestamp}ms`);
    //Накладываем на картинку тексты
        b.print(fnt, 5,80, 'API Ping is');
        b.print(fnt, 0,105, `${Math.round(client.ping)}ms`);

        b.getBuffer(jimp.MIME_PNG, (error, buffer) => {
                    message.channel.send({files: [{ name: 'file.png', attachment: buffer }] });
                });
        })
})

}
