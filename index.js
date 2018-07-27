const scalc = require("scalc");
const botconfig = require("./botconfig.json");
const token = process.env.token;
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("δεν βρέθηκαν εντολές.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("στις εντολές σας", {type: "LISTENING"});
  bot.user.setStatus("online");
    // bot.user.setStatus("idle");
    //   bot.user.setStatus("dnd");
    //     bot.user.setStatus("invisible");


});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "test") return message.channel.send("hi");

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
 

  //responses
  if (message.content === "fuck"){
  return message.react("😠");
   }

  if (message.content === "γειά"){
  return message.channel.send(`γειά σου και εσένα!\n ${message.member}`);
  }
  
  if (message.content === "συνολικά μέλη"){
        return message.channel.send(`όλα τα μέλη του server συνολικά είναι ${bot.guild.members}`);
      }
  //responses


});


bot.on("guildMemberAdd", (message) => {
	     let membercount = message.guild.memberCount;
	     let totalmembers = message.guild.channels.get("471894838179266560");
	     
	  totalmembers.fetchMessage("471902508197871616").then((message) => {
	message.edit("συνολικά τα μέλη του server είναι \t"+"`"+(membercount)+"`");  
	  	
	 
	     
});
	     
	     console.log(membercount);
	});
	
	
bot.on("guildMemberRemove", (message) => {
	     let membercount = message.guild.memberCount;
	     let totalmembers = message.guild.channels.get("471894838179266560");
	     
	totalmembers.fetchMessage("471902508197871616").then((message) => {
		message.edit("συνολικά τα μέλη του server είναι \t"+"`"+(membercount)+"`");     
});



	     
	     console.log(membercount);
	});

bot.login(token);
