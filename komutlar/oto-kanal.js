const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');
//let rol = JSON.parse(fs.readFileSync("././jsonlar/otoR.json", "utf8"));

exports.run = async (client, message, args) => {
   
  const db = require('quick.db');
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c=>c.name===args.slice(0).join(' '))
  
   if(args[0] === 'kapat') {
   if (db.has(`otoRK_${message.guild.id}`) === true) {
     message.channel.send(`avtomatik rol yozuvlar kanali muvaffaqiyatli olib tashlandi`)
     db.delete(`otoRK_${message.guild.id}`)
     return
}
  message.channel.send(`avtomatik rol yozish kanali o'rnatilmagan.`)
    return
   }
  
  if (db.has(`otoR_${message.guild.id}`) === false) return message.channel.send(`Ushbu parametrdan foydalanish uchun avval siz avtomatik rol o'rnatishingiz kerak.`)
  
    if (!channel) {
        return message.reply("avtomatik rol o'rnatmoqchi bo'lgan kanalni yozuvlar kanali sifatida belgilang!")
    }
  
     db.set(`otoRK_${message.guild.id}`, channel.id)
  
    const embed = new Discord.MessageEmbed()
    .setDescription(`avtomatik rol kanalni muvaffaqiyatli ${channel} kanaliga o'rnatildi!\navtomatik rol Yozib olish kanalini yopmoqchi bo'lsangiz **${prefix}avtomatik-rol-kanal o'chir** yozish kifoya.`)
    .setColor("RANDOM")
    message.channel.send({embed})
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['avtomatik-rol-kanal-ayarla', 'avtomatik-rol-kanal-belirle', 'avtomatikkanal', 'avtomatik-kanal'],
    permLevel: 4,
    kategori: "ayarlar"
}

exports.help = {
    name: 'avtomatik-rol-kanal',
    description: "avtomatik rol yozuvlaringiz yuboriladigan kanalni o'rnatadi.",
    usage: 'avtomatik-rol-kanal [#kanal/kanal adı]'
}