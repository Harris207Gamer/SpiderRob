const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Πληροφορίες του Bot")
    .setColor("100125")
    .setThumbnail(bicon)
    .addField("Όνομα Bot", bot.user.username)
    .addField("Δημιουργήθηκε στίς", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
