const Discord = require("discord.js");
const scalc = require("scalc");

module.exports.run = async (bot, message, args, prefix) => {

        if (message.content === prefix+"math"){
	let math = args.join(" ");
	var result = scalc(`${math}`);
	
        if (!math) return message.reply("διάλεξε πράξη");
        console.log(result);
	return message.channel.send(result);
  }
	

}

module.exports.help = {
	name:"math"
}
	
	


