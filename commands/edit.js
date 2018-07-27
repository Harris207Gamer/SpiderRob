const Discord = require("discord.js");

module.exports.run = async (message, bot, args){


	
	var bot_edit = args.join(" ").slice(41);
	var channel_id_get = args.join(" ").slice(2,20);
	var message_id = args.join(" ").slice(22,40);
	
if (!channel_id_get) return message.reply("Διάλεξε channel");
	
if (!message_id) return message.reply("Διάλεξε id μηνύματος");
if (!bot_edit) return message.reply("Πές κάτι");

	var channel_id = message.guild.channels.get(channel_id_get);
	
	message.delete().catch();
	   channel_id.fetchMessage(message_id).then((message) => {
		message.edit(bot_edit)
		
	});
		

	
	


}

module.exports.help = {
    name: "edit"
}
