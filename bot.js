const auth = require("./auth.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

fs.readdir("./commands", (err, files) => {
  if(err) console.log(err);
  
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("δεν βρέθηκε αυτή η εντολή");
    return;
  }
  
jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} φόρτωσε`);
  bot.commands.set(props.help.name, props);
});

});

bot
bot.on("ready", async () => {
 console.log(`${bot.user.username} is online!`);
 //bot.user.setGame("testing")
 //bot.user.setStatus("idle")
 bot.user.setStatus("online")
 //bot.user.setStatus("invisible")
 //bot.user.setStatus("dnd")
 bot.user.setActivity("στις εντολές σας", {type: "LISTENING"})

});

bot.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type === "test") return;

let prefix = auth.prefix;
let messageArray = message.content.split(" ");  
let cmd = messageArray[0];
let args = messageArray.slice(1);



let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);






//serverinfo
//if(cmd === `${prefix}serverinfo`){
//let sicon = message.guild.displayAvatarURL;
//let serverembed = new Discord.RichEmbed()
//  .setTitle("__Πληροφορίες του Server__")
//  .setColor(10384)
//  .setThumbnail(sicon)
//  .addField("όνομα του server", message.guild.name)
//  .addField("δημιουργίθηκε στις", message.guild.createdAt)
//  .addField("μπήκες στις", message.member.joinedAt)
//  .addField("συνολικά μέλη", message.guild.memberCount)
//  return message.channel.send(serverembed);
// }
//botinfo
//if(cmd === `${prefix}botinfo`){
//  let sicon = bot.user.displayAvatarURL;
//  let botembed = new Discord.RichEmbed()
//  .setTitle("__Πληροφορίες του Bot__")
//  .setColor("13355")
//  .setThumbnail(sicon)
//  .addField("όνομα του bot", bot.user.username)
//  .addField("δημιουργίθηκε στις", bot.user.createdAt);

//  return message.channel.send(botembed);
// }

//responses
if (message.content === `γειά`){
 return message.channel.send('γειά');
}

//bad words

if (message.content === "fuck"){
    message.react("😠");
}

//kick and ban commands

//kick [@user] [reason]
//ban [@user] [reason]

//if(cmd === `${prefix}kick`){
  
// let kUser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));
//  if(!kUser) return message.channel.send("ο χρήστης δεν βρέθηκε");
//  let KReason = args.join(" ").slice(22);
//  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("ο χρήστης έχει την άδεια να διώχνει άτομα, δεν μπορώ να το κάνω");
//  if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("αυτός ο χρήστης δεν μπορέι να διωχτεί");


 // let   KickEmbed = new Discord.RichEmbed()
 // .setTitle("~kick~")
 // .setColor("33874")
 // .addField("Διωχμένος χρήστης", `${kUser} ID: ${kUser.id}`)
 // .addField("Τον έδιωξε ο", `<@${message.author.id}> ID: ${message.author.id}`)
 // .addField("Διώχτικε στο channel", message.channel.createdAt)
 // .addField("ώρα", message.createdAt)
 // .addField("λόγος", KReason);

 // let kickChannel = message.guild.channels.find(`name`, "αρχεία-καταγραφής");
 // if(!kickChannel) return message.channel.send("δεν βρέθηκε το κανάλι");

// message.guild.member(kUser).kick(kReason);
// kickChannel.send(KickEmbed);

// return;
// }
// if(cmd === `${prefix}ban`){

// let bUser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));
// if(!bUser) return message.channel.send("ο χρήστης δεν βρέθηκε");
// let bReason = args.join(" ").slice(22);
// if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("ο χρήστης έχει την άδεια να αποκλειστεί άτομα, δεν μπορώ να το κάνω");
// if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("αυτός ο χρήστης δεν μπορέι να αποκλειστεί");


// let   BanEmbed = new Discord.RichEmbed()
// .setTitle("~ban~")
// .setColor("73484")
// .addField("Αποκλεισμένος χρήστης", `${bUser} ID: ${bUser.id}`)
// .addField("Τον Απόκλεισε ο", `<@${message.author.id}> ID: ${message.author.id}`)
// .addField("Αποκλείστηκε στο channel", message.channel.createdAt)
// .addField("ώρα", message.createdAt)
// .addField("λόγος", bReason);

// let banChannel = message.guild.channels.find(`name`, "αρχεία-καταγραφής");
// if(!banChannel) return message.channel.send("δεν βρέθηκαν περιστατικά στο κανάλι");
  
// message.guild.member(bUser).ban(bReason);
// banChannel.send(banEmbed);



// return;
// }
//report command

//=report [@user] [reason]

//if(cmd === `${prefix}report`) {

//let rUser = message.guild.member(message.mentions.users() ||  message.guild.members.get(args[0]));
//if(!rUser) return message.channel.send("ο χρήστης που ψάχνετε δεν βρέθηκε")
//let reason = args.join(" ").slice(22);

//let reportEmbed = new Discord.RichEmbed()
//.setTitle("Αναφορές")
//.setColor("11633")
//.addField("αναφερόμενος χρήστης",`${rUser} ID: ${rUser.id}`)
//.addField("Αναφορά από", `${message.author}ID: ${message.author.id}`)
//.addField("channel", message.channel)
//.addField("ώρα, message.createdAt")
//.addField("λόγος", reason);

//message.delete().catch(O_o=>{});
//message.channel.send(reportEmbed);
//return;
//}
});

bot.login(auth.token);