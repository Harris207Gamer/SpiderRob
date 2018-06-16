const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("ουπς κάτι πήγε στραβά, προσπάθησε ξανά");
    if(!args[0]) return message.channel.send("ουπς κάτι πήγε στραβά, προσπάθησε ξανά");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`διαγράφικαν ${args[0]} μηνύματα`).then(msg => msg.delete(5000));
    });

}

module.exports.help = {
    name: "delete"
}