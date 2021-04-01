const Discord = require('discord.js')
const fs = require('fs');


exports.run = async (client, message, args) => {

  const db = require('quick.db');
  

  let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name === args.slice(0).join(' '));
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
  
  

    if(args[0] === 'kapat') {
   if (db.has(`otoR_${message.guild.id}`) === true) {
     message.channel.send(`Avtomatik rol muvaffaqiyatli olib tashlandi`)
     db.delete(`otoR_${message.guild.id}`)
     return
}
  message.channel.send(`Avtomatik rol o'rnatilmagan.`)
    return
  
  }

  
  
    if (!role) {
        return message.reply(`Iltimos, rol belgilang | namuna: **${prefix}avtomatik-rol-o'rnat @yangi a'zo**`)
    }

  
     db.set(`otoR_${message.guild.id}`, role.id)
  
    const embed = new Discord.MessageEmbed()
    .setDescription(`avtomatik rol muvaffaqiyatli sozlandi: **${role.name}**\navtomatik o'chirishni istasangiz **${prefix}avtomatik o'chir** yozish kifoya.\nEndi !avtomatik-rol-kanal #kanal`)
    .setColor("RANDOM")
    message.channel.send({embed})
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['avtomatik-rol', 'avtomatik-rol-belirle', 'avtomatikrol'],
    permLevel: 4,
    kategori: "ayarlar",
}

exports.help = {
    name: "avtomatik-rol-o'rnat",
    description: "serverga yangi a'zo kelganida unga a'zo roli beradi ",
    usage: "avtomatik-rol-o'rnat <@yangi a'zo>",
}