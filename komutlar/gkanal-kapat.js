const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (client, message, params, args) => {
   
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('<a:Yyok:791434843392049152> Xush kelibsiz kanalini öchirish uchun **administrator **roli bölishi kerak!')

    db.delete(`gcc_${message.guild.id}`)

 
  message.channel.send(`<a:Yvar:791434841656131625> Xush kelibsiz kanal o'chirildi.`)   


};

exports.conf = {
  kategori: 'ayarlar',
 aliases: ["rasm-kanal-o'chir","gkanal-o'chir","gkanal-o'chir"],
 permLevel: 3
};

exports.help = {
 name: "gkanal-o'chir",
 description: "Xush kelibsiz deb nomlangan rasm kanalni o'rnatadi.",
 usage: 'gkanal'
};