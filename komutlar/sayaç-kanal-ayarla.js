const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');
//let kanal = JSON.parse(fs.readFileSync("././jsonlar/sKanal.json", "utf8"));

exports.run = async (client, message, args) => {
//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  const db = require('quick.db');
  

    let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c=>c.name===args.slice(0).join(' '))
    let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;


  
    if (!channel) {
        return message.reply("Iltimos, sozlashni xohlagan kanalingizni  yozing")
    }

      if(args[0] === 'kapat') {
      
   if (db.has(`sKanal_${message.guild.id}`) === true) {
   
     db.delete(`sKanal_${message.guild.id}`)
     
       if (db.has(`sayac_${message.guild.id}`) === true) {
       db.delete(`sayac_${message.guild.id}`)
          message.channel.send('Hisoblagich kanali va hisoblagich muvaffaqiyatli olib tashlandi')
         return
       }
     
     message.channel.send('Hisoblagich kanali olib tashlandi.')
     return
}
  message.channel.send(`Hisoblagich kanali o'rnatilmagan.`)
    return
  
  }
  
    db.set(`sKanal_${message.guild.id}`, channel.id)
  
    const embed = new Discord.MessageEmbed()
    .setDescription(` Hisoblagich kanali muvaffaqiyatli o'rnatildi: ${channel}\nAgar siz hisoblagich kanalini yopmoqchi bo'lsangiz **${prefix}hesoblagichkanal o'chir** yozish kifoya.`)
    .setColor("RANDOM")
    message.channel.send({embed})
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hesoblagich-kanal-yoz', 'hesoblagichkanal'],
    permLevel: 4,
    kategori: "ayarlar",
}

exports.help = {
    name: "hesoblagich-kanal-o'rnat",
    description: "hesoblagich kanalını o'rnat.",
    usage: "hesoblagich-kanal-o'rnat <#kanal>",
}