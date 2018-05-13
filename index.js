const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone:true});
//bot
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
 // bot.user.setGame("testing")
 //bot.user.setStatus("idle")
  bot.user.setStatus("online")
 // bot.user.setStatus("invisible")
 // bot.user.setStatus("dnd")
  bot.user.setActivity("στις εντολές σας", {type: "LISTENING"})

});
//responses
bot.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type === "test") return;

let prefix = botconfig.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);
//serverinfo
if(cmd === `${prefix}serverinfo`){
let sicon = message.guild.displayAvatarURL;
let serverembed = new Discord.RichEmbed()
  .setTitle("__Πληροφορίες του Server__")
  .setColor(10384)
  .setThumbnail(sicon)
  .addField("όνομα του server", message.guild.name)
  .addField("δημιουργίθηκε στις", message.guild.createdAt)
  .addField("μπήκες στις", message.member.joinedAt)
  .addField("συνολικά μέλη", message.guild.memberCount)
  return message.channel.send(serverembed);
}
//botinfo
if(cmd === `${prefix}botinfo`){
  let sicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setTitle("__Πληροφορίες του Bot__")
  .setColor("13355")
  .setThumbnail(sicon)
  .addField("όνομα του bot", bot.user.username)
  .addField("δημιουργίθηκε στις", bot.user.createdAt);

  return message.channel.send(botembed);
}


if (cmd === `hi`){
  return message.channel.send("hi");
}
//commands
if(cmd === `${prefix}report`) {

let rUser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));
if(!rUser) return message.channel.send("ο χρήστης που ψάχνετε δεν βρέθηκε")
let reeason = args.join(" ").slice(22);

let reportEmbed = new Discord.RichEmbed()
.setTitle("Αναφορές")
.setColor("21633")
.addField("αναφερόμενος χρήστης", `${rUser} ID: ${rUser.id}`)
.addField("Αναφορά από", `${message.author}ID: ${message.author.id}`)
.addField("channel", message.channel)
.addField("ώρα, message.createdAt")
.addField("λόγος", reeason);

 message.channel.send(reportEmbed);
  
message.delete().catch(O_o=>{});
reportschannel.send(reportEmbed);

}
});

bot.login(botconfig.token);
