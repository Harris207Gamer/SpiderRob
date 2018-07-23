const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person


  if(!message.member.hasRole("🛡ΔΙΑΧΕΙΡΗΣΤΕΣ🛡")) return message.reply("Συγνώμη αλλά δεν μπορώ να το κάνω.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Ο χρήστης δεν βρέθηκε.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Διάλεξε έναν ρόλο!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Ο ρόλος δεν βρέθηκε.");

  if(rMember.roles.has(gRole.id)) return message.reply("Αυτός ο χρήστης έχει ήδη αυτον τον ρόλο.");
  await(rMember.addRole(gRole.id));


  await message.channel.send("`Ο ρόλος έχει προσθεθεί` ☑️")
    
  }
module.exports.help = {
  name: "role"+"give"
}
