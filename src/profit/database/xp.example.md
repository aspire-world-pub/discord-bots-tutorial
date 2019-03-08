# Начало

## Создайте таблицу в базе данных где будет находится вся информация об ваших пользователях.

MySql запрос:

```mysql
CREATE TABLE `xeval`.`users` ( `entery_id` INT NOT NULL AUTO_INCREMENT , `id` VARCHAR(18) NOT NULL , `xp` INT(50) NOT NULL , `lvl` INT(50) NOT NULL , `money` INT(50) NOT NULL , PRIMARY KEY (`entery_id`)) ENGINE = InnoDB;
```

Разместите данный event в своем боте

```js
const talked = new Set(); // Создание кулдауна на получение опыта.
function generateXp() {
  let max = 10;
  let min = 5;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateMon() {
  let max = 5;
  let min = 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on('message', async message => {
	let newxp = Math.floor(Math.random() * (10 - 1 + 1)) + 10;
	if (talked.has(message.author.id)) return;
	if(message.author.bot) return;
    con.query(`SELECT * FROM users WHERE id = '${message.author.id}'`, (err, rows) => {
	    if(err) throw err;
  let sql;
  if (!rows[0]) {
    con.query(`INSERT INTO users (id, xp, lvl, money) VALUES ('${message.author.id}', ${newxp}, '1', '${generateMon()}')`);
  } else {
    let xp = rows[0].xp;
    con.query(`UPDATE users SET xp = ${xp + newxp}, money = '${rows[0].money + generateMon()}' WHERE id = '${message.author.id}' `);
	  talked.add(message.author.id);
        setTimeout(() => {
          talked.delete(message.author.id); //удаление из кулдауна спустя 1 минуту.
        }, 60000);
  }
});
	   
})
```

## Самый обычный профиль

```js
con.query(`SELECT FROM users WHERE id = '${message.author.id}'`, (err, rows) =>{
if(rows[0]) return message.channel.send("Аккаунт не найден.");
let embed = new Discord.RichEmbed()
.setTitle(message.author.username+'\'s profile')
.setColor('RANDOM')
.addField('XP', rows[0].xp, true)
.addField('lvl', rows[0].lvl, true)
.addField('money', rows[0].money, true)
message.channel.send(embed)
})
```
