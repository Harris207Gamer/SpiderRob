const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let say = args.join(" ");
 return message.channel.send(say);
}

module.exports.help = {
  name: "say"
}
