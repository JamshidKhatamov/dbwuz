const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
	
  let kanal = message.mentions.channels.first() || message.guild.channels.cache.find(c=>c.name===args.slice(0).join(' '))
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
  
      if(args[0] === "o'chir") {
      
   if (db.has(`tagKanal_${message.guild.id}`) === true) {
   
     db.delete(`tagKanal_${message.guild.id}`)
    
     
     message.channel.send('Avtomatik tag kanal olib tashlandi.')
     return
}
  message.channel.send(`Avtomatik tag kanal o'rnatilmagan.`)
    return
  
  }
  
  
  if (!kanal) { 
    var embedd = new Discord.MessageEmbed()
                .setDescription(`Iltimos, sozlashni xohlagan kanalga yozing`)
              .setColor("RANDOM")
            message.channel.send({embed: embedd})
    return
  }

  db.set(`tagKanal_${message.guild.id}`, kanal.id)
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor("tag Yozuvlar kanali muvaffaqiyatli sozlandi!")
  .setDescription(`tag Yozuvlar kanali ${kanal} ga o'rnatildi.\nAgar siz avtomatik tag kanalni o'chirmoqchi bo'lsangiz **${prefix}tag-kanal-o'chir** yozish kifoya.`)
  message.channel.send({embed: embed})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['set-tag-channel', 'установить-канал-тега', 'tagkanal'],
  permLevel: 4,
  kategori: 'ayarlar'
}

exports.help = {
  name: "tag-kanalini-o'rnating",
  description: "Tag yozuvlaringiz yuboriladigan kanalni o'rnatadi.",
  usage: "tag-kanalini-o'rnating [#kanal/kanal ismi]"
}