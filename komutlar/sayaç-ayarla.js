const Discord = require('discord.js')
const fs = require('fs')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  const db = require('quick.db');

   let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  //if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
	if(!args[0]) {
		return message.reply("Iltimos, o'rnatmoqchi bo'lgan raqamni yozing")
	}

	//let profil = JSON.parse(fs.readFileSync("./jsonlar/sayac.json", "utf8"));

    if(args[0] === 'kapat') {
      
   if (db.has(`sayac_${message.guild.id}`) === true) {
   
     db.delete(`sayac_${message.guild.id}`)
     
       if (db.has(`sKanal_${message.guild.id}`) === true) {
       db.delete(`sKanal_${message.guild.id}`)
          message.channel.send('Hisoblagich kanali va hisoblagich muvaffaqiyatli olib tashlandi')
         return
       }
     
     message.channel.send('Hisoblagich olib tashlandi.')
     return
}
  message.channel.send(`Hisoblagich o'rnatilmagan.`)
    return
  
  }
  
	if(isNaN(args[0])) {
		return message.reply('Faqat raqam!')
	}

	if(args[0] <= message.guild.members.cache.size) {
		const embed = new Discord.MessageEmbed()
		return message.reply("Iltimos, serverlar sonidan yuqori raqamni kiriting!")
	}

  

  db.set(`sayac_${message.guild.id}`, args[0])
  
	const embed = new Discord.MessageEmbed()
	.setTitle(`Hisoblagich muvaffaqiyatli o'rnatildi: **${args[0]}**\nAgar siz hisoblagichni o'chirmoqchi bo'lsangiz **${prefix}hisoblagich o'chir** yozish kifoya. \hisoblagich kanali uchun !hisoblagich-kanal-o'rnat #kanal`)
	message.channel.send({embed})
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ["hesoblagicho'rnat", 'hesoblagich', 'hesoblagich'],
	permLevel: 4,
    kategori: "ayarlar",
  
}

exports.help = {
	name: "hesoblagich-o'rnat",
	description: "hesoblagich o'rnat.",
	usage: "hesoblagich-o'rnat <raqam>",
}