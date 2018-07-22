const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Δεν μπορώ να το κάνω!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Αυτό το άτομο δεν μπορεί να διωχτεί!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Αποχώρηση~")
    .setColor("#e56b00")
    .addField("Χρήστης που διώχτηκε", `${kUser} with ID ${kUser.id}`)
    .addField("Διώχτηκε από", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Διώχτικε στο", message.channel)
    .addField("Ώρα που διώχτηκε", message.createdAt)
    .addField("Λόγος", kReason);

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
