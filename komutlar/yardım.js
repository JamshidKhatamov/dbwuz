const Discord = require ("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => { 
const mhelp = new Discord.MessageEmbed()
.setAuthor("DBWUZ | Yordam Menyu", client.user.avatarURL({ dynamic: true }))
.setColor("#5ab1bb")
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setDescription('**foydalanish Namunasi:** `!yordam`\n[DBWUZ Youtube kanalga obuna bo’lish esdan chiqmasin](https://www.youtube.com/dbwuz)')
.addField('Yordam buyruqlari: ',
` **${ayarlar.prefix}avatar =** avatar ko'rsatadi

 **${ayarlar.prefix}o'chir =** Belgilangan miqdordagi xabarlarni o'chiradi

 **${ayarlar.prefix}tag-kanalini-o'rnating =** Tag yozuvlaringiz yuboriladigan kanalni o'rnatadi

**${ayarlar.prefix}tag-o'rnat =** Serverga qo'shilgan A'zoga avtomatik tag beradi

**${ayarlar.prefix}server-qur =** Server sozlamalarini o'chiradi va botning sozlamalarini qayta o'rnatib, kerakli rollarni, kanallarni va toifalarni yaratib, serverni o'rnatadi.
 
**${ayarlar.prefix}hesoblagich-kanal-o'rnat =** hesoblagich kanali o'rnatdi.

 **${ayarlar.prefix}hesoblagich-o'rnat =** hesoblagich o'rnatadi.

 **${ayarlar.prefix}avtomatik-rol-kanal =** avtomatik rol yozuvlaringiz yuboriladigan kanalni o'rnatadi.

 **${ayarlar.prefix}avtomatik-rol-o'rnat =** serverga yangi a'zo kelganida unga a'zo roli beradi 

 **${ayarlar.prefix}link-bloklash =** hLinkni blokirovka qilish tizimini yoqish va o'chirishga imkon beradi.

 **${ayarlar.prefix}gkanal =** rasm xush kelibsiz Xayr. Salomat bo'ling kanalı o'rnatish.

 **${ayarlar.prefix}kirish-habar-o'rnat =** Kirish xabarini o'zgartirishga imkon beradi.

 **${ayarlar.prefix}chiqish-habar-o'rnat =** kelish ketish kanalini o'rnat

`)

.setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
message.channel.send(mhelp)

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yordam', 
    description: 'DBWUZ HELP MENU',
    usage: 'help'
  };