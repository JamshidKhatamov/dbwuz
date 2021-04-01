const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  const db = require('quick.db');
  
 let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        return message.reply(`Iltimos, sozlamoqchi bo'lgan kanalingizni belgilang. Namuna: **${prefix}kirishchiqisho'rnat #kanal**`)
    }

  
 
      if(args[0] === 'kapat') {
   if (db.has(`girisM_${message.guild.id}`) === true) {
     message.channel.send(`kirish chiqish kanali muvaffaqiyatli olib tashlandi`)
     db.delete(`gc_${message.guild.id}`)
     return
}
  message.channel.send(`kirish chiqish kanali o'rnatilmagan.`)
    return
  
  }
    /*if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            gkanal: channel.id
        };
    }
  
    fs.writeFile("././jsonlar/gc.json", JSON.stringify(kanal), (x) => {
        if (x) console.error(x)
      })*/
  
    var s = db.set(`gc_${message.guild.id}`, channel.id)
  
    const embed = new Discord.MessageEmbed()
    
    .setDescription(`kirish chiqish kanali o'rnatildi: ${channel}\nkirish chiqish kanalini olib tashlamoqchi bo'lsangiz **${prefix}kirish-chiqish-kanal o'chir** yozish kifoya.`)
    .setColor("RANDOM")
    message.channel.send({embed})
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["chiqish-habar-o'rnat"],
    permLevel: 4,
    kategori: "ayarlar"
  
}

exports.help = {
    name: "chiqish-habar-o'rnat",
    description: "kelish ketish kanalini o'rnat",
    usage: "chiqish-habar-o'rnat<#kanal>",

}