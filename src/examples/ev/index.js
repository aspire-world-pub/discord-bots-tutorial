module.exports = class core {
  constructor(
    token,
    { commandsDir = "./commands/", disableEveryone = false, economy = true }
  ) {
    this.token = token;
    this.commandsDir = commandsDir;
    this.disableEveryone = disableEveryone;
    this.economy = economy;
    const Discord = require("discord.js");
    const client = new Discord.Client({
      disableEveryone: this.disableEveryone ? true : false
    });
    const mysql = require("mysql");
    const f = require("./functions.js");
    const loader = require("./loader.js");
    const watcher = require("./watcher.js");
    const fs = require("fs");
    const xp = require("./data.json");
    const prefix = require("./prefixes.json");
    client.xp = xp;
    client.prefix = prefix;
    client.f = f;
    client.commands = new Discord.Collection();
    client.ownerCommands = new Discord.Collection();

    const watch = new watcher(client, xp);
    client.login(this.token);
    let start = Date.now();

    client.on("ready", async () => {
      await f.log("CORE", "INFO", `Client is ready...`, true);
      await f.log("CORE", "INFO", `Login...          `);
      await f.log("CORE", "INFO", `Loggined as:      `);
      await f.log("CORE", "INFO", `Username: ${client.user.tag}`);
      await f.log("CORE", "INFO", `ID: ${client.user.id}`);
      await f.log("CORE", "INFO", `Success loggined. `);
      await f.log(
        "CORE",
        "INFO",
        `It took ${Date.now() - start}ms to launch bot`,
        true
      );
      client.generateInvite(0).then(i => f.log("CORE", "INFO", i));
      loader.loadCommands("./syscommands/", client);
      loader.loadCommands(`${this.commandsDir}`, client);
      if(this.economy === true) {
        setInterval(() => {
          fs.writeFile("./data.json", JSON.stringify(xp), err => {
            if (err) console.log(err);
          });
        }, 10000);
      });
    }

    client.on("message", message => {
      try {
        if (!prefix[message.guild.id]) {
          prefix[message.guild.id] = "k!";
        }
        let pf = prefix[message.guild.id];
        if (!message.content.startsWith(pf)) return;
        const args = message.content
          .slice(pf.length)
          .trim()
          .split(/ +/g);
        const flags = args.join(" ").match(/--(.*?);/gi);
        const command = args.shift().toLowerCase();
        let commandfile = client.commands.get(command);
        if (commandfile) {
          let hrDiff;
          const hrStart = process.hrtime();
          hrDiff = process.hrtime(hrStart);
          if (!args[0]) {
            f.log(
              "COMMAND USAGE",
              "LOG",
              `Executed command with name ${command} in ${
                hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ""
              }${hrDiff[1] / 1000000}ms`,
              true
            );
          } else {
            f.log(
              "COMMAND USAGE",
              "LOG",
              `Executed command with name ${command} and arguments ${args.join(
                " "
              )} in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ""}${hrDiff[1] /
                1000000}ms`,
              true
            );
          }
          commandfile.run(client, message, args, xp, flags);
        }
      } catch (err) {
        message.channel.send(
          `Error:
		${err.stack}`,
          { code: "js" }
        );
        f.log("CORE", "WARNING", err, true);
      }
    });
  }
};
