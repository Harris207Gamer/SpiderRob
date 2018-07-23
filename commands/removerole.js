const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let admin = message.guild.roles.find("name", "🛡ΔΙΑΧΕΙΡΗΣΤΕΣ🛡");
  if(!message.member.hasPermission(admin)) return message.reply("αυτός ο χρήστης δεν είναι δυνατόν να πρεσθεθεί ρόλος");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("ο χρήστης δεν βρέθηκε");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("βάλε έναν ρόλο");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("δεν βρέθηκε ρόλος.");

  if(!rMember.roles.has(gRole.id)) return message.reply("αυτός ο χρήστης έχει ήδη αυτόν τον ρόλο.");
  await(rMember.removeRole(gRole.id));

  
    await message.channel.send("`Ο ρόλος αφερέθηκε` ❎")
  
  
  }


module.exports.help = {
  name: "removerole"
}
