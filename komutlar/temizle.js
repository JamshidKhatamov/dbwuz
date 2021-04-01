const Discord = require('discord.js');
//const ayarlar = require('../ayarlar.json');
const db = require("quick.db");
exports.run = async function(client, message, args) {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Ushbu buyruqni ishlatish uchun sizda ** administrator **roli bo'lishi kerak!");

if (message.deletable) {
message.delete();
}  
  
if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
  
const embed1 = new Discord.MessageEmbed()
  
.setDescription("Iltimos, o'chiriladigan xabarlar miqdorini yozing...!")
.setColor('RED')

return message.channel.send(embed1).then(m => m.delete({ timeout:1000 }));
  
}  

let deleteAmount;

if (parseInt(args[0]) > 100) { deleteAmount = 100; } else { deleteAmount = parseInt(args[0]); } 
  
message.channel.bulkDelete(deleteAmount, true)

.then(deleted => message.channel.send(`Hey, muvaffaqiyatli \`${deleted.size}\` Men xabarni o'chirib tashladim.`)).then(msg => 	msg.delete({ timeout: 3000 }))


};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["o'chir", "delete", "sil",'clear','clean'],
  permLevel: 4,
    kategori: "moderasyon"
};

exports.help = {
  name: "o'chir",
  category: 'moderasyon',
  description: "Belgilangan miqdordagi xabarlarni o'chiradi.",
  usage: "o'chir <miktar>"
};