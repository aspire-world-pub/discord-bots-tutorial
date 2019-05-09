const { RichEmbed } = require("discord.js");
const moment = require("moment");
const colors = require("colors");
moment.locale("ru");

function icolor(color, message) {
  return colors.inverse[color](message);
}
function color(color, message) {
  return colors[color](message);
}

module.exports.embed = function() {
  return new RichEmbed();
};
module.exports.log = function(module, type, message, cd) {
  var cs;
  if (cd === true) {
    if (type === "INFO") cs = icolor("green", ": " + message);
    if (type === "LOG") cs = icolor("gray", ": " + message);
    if (type === "WARNING") cs = icolor("red", ": " + message);
  } else {
    if (type === "INFO") cs = color("green", ": " + message);
    if (type === "LOG") cs = color("gray", ": " + message);
    if (type === "WARNING") cs = color("red", ": " + message);
  }
  console.log(
    colors.inverse.green(` [ ${module} ] :`) +
      colors.inverse(`: ${moment(Date.now()).format("LTS")}     :`) +
      cs
  );
};

module.exports.fileinfo = {
  type: "Модуль",
  description: "Главный модуль отвечающий за множество функций"
};
