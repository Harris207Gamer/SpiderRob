const Discord = require("discord.js");
const scalc = require("scalc");

module.exports.run = async (bot, message ,args) => {

        
	
	let calc = message.content.split("").slice(5);
	let result = scalc(`${calc}`);
	if (!calc) return message.reply("διάλεξε πράξη");
        if (!result) return message.reply("δεν βγαίνει αποτέλεσμα");
        console.log(result);
	return message.channel.send(result);
  
	

}

module.exports.help = {
    name:"math"
}
