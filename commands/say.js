const Discord = require("discord.js");

module.exports.run = async (message, args, bot) =>{
 let say = args.join(" ");
 return message.channel.send(say);
}

module.exports.help = {
  name = "say"
}
