const colors = require("colors");
const f = require("./functions.js");
const fs = require("fs");
module.exports.loadCommands = async function(dir, client) {
  if (!dir) f.log("CORE", "WARNING", "Command folder not exits".inverse.red);
  await fs.readdir(dir, async (err, files) => {
    if (err) console.error(err);
    await files.forEach(async file => {
      if (!file.endsWith(".js")) return;
      name = file.replace(".js", "");
      let command = require(`${dir}${file}`);
      client.commands.set(command.help.name, command);
      await f.log("LOADER", "INFO", `loaded ${file} command...`, true);
    });
  });
};
