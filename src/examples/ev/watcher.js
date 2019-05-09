const fs = require("fs");
const f = require("./functions.js");
module.exports = class watch {
  constructor(client, xp) {
    this.xp = xp;
    this.client = client;
    if(this.client.economy === true) {
    setInterval(() => {
        fs.writeFile("./data.json", JSON.stringify(xp), err => {
          if (err) console.log(err);
        });

      this.client.on("message", message => {
        let xp = this.xp;
        if (message.author.bot) return;

        if (!xp[message.author.id]) {
          xp[message.author.id] = {
            xp: 0,
            level: 1,
            money: 0
          };
        }
        let curxp = xp[message.author.id].xp;
        let curlevel = xp[message.author.id].level;
        let curmoney = xp[message.author.id].money;
        let toup = 5 * (curlevel ^ 2) + 1500 * curlevel + 100;
        let tolvl = toup - curxp;
        if (toup <= curxp) {
          message.channel.send(
            f
              .embed()
              .setTitle("Level UP")
              .setDescription(
                `${message.author.username}, your level is now ${curlevel + 1}`
              )
              .setColor("GREEN")
          );
          xp[message.author.id].level = xp[message.author.id].level + 1;
        }

        let randxp = Math.floor(Math.random() * 30);
        let randmn = Math.floor(Math.random() * 5);
        xp[message.author.id].xp = curxp + randxp;
        xp[message.author.id].money = curmoney + randmn;
      });
    }
  };
};
fs.writeFile("./pregixes.json", JSON.stringify(client.prefix), err => {
        if (err) console.log(err);
      });
    }, 10000);
