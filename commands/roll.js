const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 var y = Math.floor(Math.random() * 6 + 1);
var x = Math.floor(Math.random() * 6 + 1);


  var y = Math.floor(Math.random() * 6 + 1);
var x = Math.floor(Math.random() * 6 + 1);

if (message.content === `${prefix}roll` ){
 return message.channel.send("έφερες"+"```"+(y)+"+"+(x)+(" = ")+(y+x)+"```");
}

 
}

module.exports.help = {
  name: "roll"
}
