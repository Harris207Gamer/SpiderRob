const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //=warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("δεν μπορώ να το κάνω!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("δεν βρέθηκαν");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("They waaaay too kewl");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Προειδοποίηση")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("προειδοποιήθηκε ο", `<@${wUser.id}>`)
  .addField("προειδοποιήθηκε στο", message.channel)
  .addField("σύνολο προειδοποιήσεων", warns[wUser.id].warns)
  .addField("λόγος", reason);

  let warnchannel = message.guild.channels.find(`name`, "αρχεία-καταγραφής");
  if(!warnchannel) return message.reply("δεν βρέθηκε channel");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("πρώτα πρέπει να δημιουργήσεις αυτον τον ρόλο.");

    let mutetime = "10s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> έχει τεθεί σε σίγαση`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> έχει βγει απο σίγαση.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 3){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> έχει αποκλειστεί.`)
  }

}

module.exports.help = {
  name: "warn"
}
