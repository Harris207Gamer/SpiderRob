const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let say = args.join(" ");
 if(!say) return message.reply("πες κάτι");
 message.delete().catch();
 return message.channel.send(say);
}

module.exports.help = {
  name: "say"
}
