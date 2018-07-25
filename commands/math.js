const Discord = require("discord.js");
const scalc = require("scalc");

module.exports.run = async (bot, message ,args) => {

        
	
	let calc = message.content.split(" ").slice(1).join(" ");
	let result = scalc(`${calc}`);
	if (!calc) return message.reply("διάλεξε πράξη");
  if (!result) return message.channel.send("0");
  console.log(result);
	return message.channel.send(result);
  
	

}

module.exports.help = {
    name:"math"
}
