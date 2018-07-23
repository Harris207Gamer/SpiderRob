const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 var y = Math.floor(Math.random() * 6 + 1);
var x = Math.floor(Math.random() * 6 + 1);

try {
  message.channel.send("έφερες"+"```"+(y)+"+"+(x)+(" = ")+(y+x)+"```");
}
 
}

module.exports.help = {
  name: "roll"
}
