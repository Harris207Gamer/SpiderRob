const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Πληροφορίες του Server")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Όνομα Server", message.guild.name)
    .addField("Δημιουργήθηκε στις", message.guild.createdAt)
    .addField("Μπήκες στις", message.member.joinedAt)
    .addField("Συνολικά μέλη", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
