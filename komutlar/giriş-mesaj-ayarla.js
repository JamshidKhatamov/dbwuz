const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
  const db = require('quick.db');
  

    let prefix = db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let gM = args.slice(0).join(' ');
  
  if (!gM) {
        return message.reply("Kirish xabarini o'rnatmoqchi bo'lgan xabarni yozishingiz kerak! \n**NOT:** smsda a'zoning keladigan yerga **{kullanıcı}**, server ismini keladigan yerga **{sunucu}** yoki serverdaki a!zo raqamning keladigan yerga **{kişisayısı}** yozing.")
    }
  

    /*if(!gMesaj[message.guild.id]){
        gMesaj[message.guild.id] = {
            gm: gM
        };
    }
    fs.writeFile("././jsonlar/girisM.json", JSON.stringify(gMesaj), (x) => {
        if (x) console.error(x)
      })*/
  
  
 

    if(args[0] === 'kapat') {
   if (db.has(`girisM_${message.guild.id}`) === true) {
     message.channel.send(`Kirish haqidagi xabar muvaffaqiyatli olib tashlandi`)
     db.delete(`girisM_${message.guild.id}`)
     return
}
  message.channel.send(`Kirish xabari o'rnatilmagan.`)
    return
  
  }
    
  
    var s = db.set(`girisM_${message.guild.id}`, gM)
  
    const embed = new Discord.MessageEmbed()
    
    .setDescription(` Kirish haqidagi xabar muvaffaqiyatli o'rnatildi ${gM}\nKirish xabarini yopish uchun **${prefix}kirish-mesaj o'chir** yozish kifoya.`)
    .setColor("RANDOM")
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kirish-mesaj'],
    permLevel: 4,
    kategori: "ayarlar",
  };

  exports.help = {
    name: "kirish-habar-o'rnat",
    description: "Kirish xabarini o'zgartirishga imkon beradi.",
    usage: "kirish-habar-o'rnat <mesaj> \n**NOT:** smsda a'zo ismini keladigan yerga **{kullanıcı}** yozing aks holda a'zo ismini ko'rsatmaydi.",
    
  };