const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
  const db = require('quick.db');
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
     if(args[0] === "o'chir") {
      
   if (db.has(`tagB_${message.guild.id}`) === true) {
   
     db.delete(`tagB_${message.guild.id}`)
    
     
     message.channel.send("Avtomatik tag  o'chirildi.")
     return
}
  message.channel.send(`Avtomatik tag sozlanmagan.`)
    return
  
  }
  

  let gM = args.slice(0).join(' ');
  
    if (!gM) {
        return message.reply('Iltimos, sozlashni xohlan tagni  kiriting.')
    }
  
  


  
    var s = db.set(`tagB_${message.guild.id}`, gM)
  
    const embed = new Discord.MessageEmbed()
    
    .setDescription(` Avtomatik tag o'rnatildi: ${gM}\nAvtomatik tag  Agar siz yopmoqchi bo'lsangiz **${prefix}tag-o'chir** yozish kifoya.`)
    .setColor("RANDOM")
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['avto-tag', 'avtotag'],
    permLevel: 4,
    kategori: "ayarlar",
  };

  exports.help = {
    name: "tag-o'rnat",
    description: "Serverga qo'shilgan A'zoga avtomatik tag beradi",
    usage: "tag-o'rnat <tag>",
  };