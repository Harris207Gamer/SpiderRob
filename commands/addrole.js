const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Συγνώμη αλλά δεν μπορώ να το κάνω.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Ο χρήστης δεν βρέθηκε.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Ο ρόλος δεν βρέθηκε.");

  if(rMember.roles.has(gRole.id)) return message.reply("Αυτός ο χρήστης έχει ήδη αυτον τον ρόλο.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  }catch(e){
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}  
  try{
    await message.channel.send("`Ο ρόλος άλλαξε ☑️`")
    }

module.exports.help = {
  name: "addrole"
}
