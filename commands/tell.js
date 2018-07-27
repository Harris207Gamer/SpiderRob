const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


	
	var admin = message.guild.roles.get("381016423612416000");		
	if(!message.member.roles.has(admin.id)) return message.reply("δεν έχεις τον ρόλο για να το κάνεις αυτό");
	
	var tell = args.join(" ").slice(22);
	var channel_mention = args.join(" ").slice(2,20);
	
	var channel_tell = message.guild.channels.get(channel_mention);



		message.delete().catch();


	return channel_tell.send(tell);
	
}

module.exports.help = {
   name: "tell"
}
