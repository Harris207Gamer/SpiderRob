const Discord = require("discord.js");
const scalc = require("scalc");

module.exports.run = (bot, message ,args) => {

        
	
	let calc = args.join(" ");
	let result = scalc(`${calc}`);
	if (!calc) return message.reply("διάλεξε πράξη");
        if (!result) return message.channel.send("0");

	return message.channel.send(result);
  
	

}

module.exports.help = {
    name:"math"
}
