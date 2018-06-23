const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("ο χρήστης δεν βρέθηκε");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("δεν μπορώ να το κάνω!");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("αυτός το χρήστης δεν μπορεί να αποκλειστεί!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Αποκλεισμός~")
    .setColor("#bc0000")
    .addField("Αποκλέιστηκε ο χρήστης", `${bUser}  ID: ${bUser.id}`)
    .addField("Αποκλείστηκε από", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Αποκλείστηκε στο", message.channel)
    .addField("ώρα", message.createdAt)
    .addField("λόγος", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "αρχεία-καταγραφής");
    if(!incidentchannel) return message.channel.send("δεν βρέθηκε το channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
