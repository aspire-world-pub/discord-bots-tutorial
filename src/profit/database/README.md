# Работа с базой данных
Для работы с базой данных нам понадобится модуль mysql.<br>
После того как вы его установили нам потребуется сама база данных.<br>
https://db4free.net позволяет получить бесплатную базу данных, но ее проблема в лагах, для тестов и начала сойдет.<br>
Также, можно взять бесплатную базу данных у участника XEVAL PROJECT. Займёт времени немного, но за то не будет лагов.<br>
Для этого, пишите ему: https://vk.com/vlad.ciphersky<br>

После регистрации нам потребуется создать логин, в корне бота добавьте следующий код
```javascript lineNo
const con_config = {
  host: process.env.HOST, // добавьте в системную переменую url (или ip) сервера
  user: process.env.USER, // добавьте в системную переменую название пользователя вашей базы
  password:  process.env.PASS, // добавьте в системную переменую пароль вашей базы
  database:  process.env.DATABASE // добавьте в системную переменую название вашей базы
};

const con = mysql.createConnection(con_config);
```

После этого подключите mysql query, и можете приступать к работе с базой данных в вашем боте.

# Фикс вылета из базы данных
Если вы используете базу данных, предназначенную не для долгих подключений к серверу, вам **ОБЯЗАТЕЛЬНО** нужен этот код:
```javascript lineNo
var con;

function handleDisconnect() {
  con = my.createConnection(con_config);

  con.connect(function(err) {
    if(err) {
      console.log('db error', err);
      setTimeout(handleDisconnect, 2000);
    }
  });
  
  con.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();
```
