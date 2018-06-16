const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let rUser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));
if(!rUser) return message.channel.send("ο χρήστης που ψάχνετε δεν βρέθηκε")
let rreason = args.join(" ").slice(22);

let reportEmbed = new Discord.RichEmbed()
.setTitle("Αναφορές")
.setColor("11633")
.addField("αναφερόμενος χρήστης",`${rUser} ID: ${rUser.id}`)
.addField("Αναφορά από", `${message.author} ID: ${message.author.id}`)
.addField("channel", message.channel)
.addField("ώρα", message.createdAt)
.addField("λόγος", rreason);

let reportschannel = message.guild.channels.find(`name`, "αρχεία-καταγραφής");
if(!reportschannel) return message.channel.send("δεν βρέθηκε το channel");

message.delete().catch(O_o=>{}); 
reportschannel.send(reportEmbed);

}

module.exports.help = {
    name: "report"
}