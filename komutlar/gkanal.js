const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (client, message, params, args) => {
   
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('<a:kilit:791612739797254155> Xush kelibsiz kanalini örnatish uchun`administrator` roli bölishi kerak!')
  let hgkanali = message.mentions.channels.first();
  if (!hgkanali) return message.channel.send('<a:Yvar:791434841656131625> Xush kelibsiz kanalini örnatish uchun kanalni belgilashingiz kerak. `!gkanal #kanal`')
    db.set(`gcc_${message.guild.id}`, message.mentions.channels.first().id)
  let i = await db.fetch(`gcc_${message.guild.id}`)
 
  message.channel.send(`<a:Yvar:791434841656131625> Xush kelibsiz kanali, <#${i}> o'rnatildi.\no'chirish uchun !gkanal-ochir' yozish kifoya.`)   
  

};

exports.conf = {
  kategori: 'ayarlar',
 aliases: ['rasm-kanal','hg-bb','rgk','rgç','rasmli-xushkelibsiz-kanal','hoşgeldin-ayarla', 'welcome-set','rasm'],
 permLevel: 3
};

exports.help = {
 name: 'gkanal',
 description: "rasm xush kelibsiz Xayr. Salomat bo'ling kanalı o'rnatish.",
 usage: 'gkanal'
};