const Discord = require("discord.js");
const scalc = require("scalc");

module.exports.run = async (bot, message, args) => {


	
  var firstnumberget = args.join(" ").slice(0,8);
	var secondnumberget = args.join(" ").slice(9,17);
  var firstnumber = scalc(`${firstnumberget}`);
	var secondnumber = scalc(`${secondnumberget}`);
	
var count = firstnumber;
	
	
	
console.log("from "+firstnumber);
console.log("to "+secondnumber);


var clear = setInterval(function(){
	
	
	
	
count++;  
console.log(count);
if (count === secondnumber){
	clearInterval(clear)
}},1000)
  
 
  
 message.channel.send(firstnumber).then((message) => {
  	  var intId = setInterval(counter,1000);
  	  function counter(){message.edit(count)};
  	  
    })
  	     
  	
  

}

module.exports.help = {
   name : "count"
}
