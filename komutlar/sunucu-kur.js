const Discord = require('discord.js');
const db = require('quick.db');
const {stripIndents} = require('common-tags');

exports.run = async (client, message, args) => {
    var p24 = client.ws.ping
    try {
      const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription("Sizning serveringizdagi barcha kanallar, toifalar va rollar o'chirilishini va bot yangi server o'rnatishini tasdiqlaysizmi?")
      .setFooter('10 Agar bir necha soniya ichida "ha" yozsangiz, tasdiqlaysiz. Agar siz 10 soniya ichida yozmasangiz, tranzaksiya bekor qilinadi.')
      message.channel.send({embed: embed})
       message.channel.awaitMessages(response => response.content === 'ha', {
          max: 1,
          time: 10000,
          errors: ['time'],
        })
     
        .then((collected) => {
       
            message.guild.channels.cache.forEach(kanal =>kanal.delete());
            message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(rol => rol.delete('ok boomer') && console.log(rol.name+' silindi sqrt'));
           
    
     
        const embedd = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setDescription("Siz serveringizdagi barcha kanallar, toifalar va rollar o'chirilishini va bot yangi server o'rnatishini tasdiqladingiz! Serverni sozlash, bu jarayon biroz vaqt talab qilishi mumkin.")
	message.author.send({embed: embedd})

    let every = message.guild.roles.cache.find(r => r.name === '@everyone')
    
    //Kategoriler
    message.guild.channels.create("§▬▬▬「✔|Ro'yxatdan o'tish maydoni|✔」▬▬▬§", {type: 'category'}).then(kayitlar => {
    message.guild.channels.create('§▬▬▬「✔|ASOSİY|✔」▬▬▬§', {type: 'category'}).then(bilgi => {

    message.guild.channels.create('§▬▬▬「✔|CHAT|✔」▬▬▬§', {type: 'category'}).then(toplum => {
        message.guild.channels.create('§▬▬▬「✔|🎵|✔」▬▬▬§', {type: 'category'}).then(mp => {
    message.guild.channels.create('●▬▬▬▬๑「✔|Pubg Mobile|✔」๑▬▬▬▬●', {type: 'category'}).then(pubg => {   
      message.guild.channels.create('●▬▬▬▬๑「✔|Pubg Lite|✔」๑▬▬▬▬●', {type: 'category'}).then(pubgl => {  
        message.guild.channels.create('●▬▬▬▬๑「✔|Minecraft||✔」๑▬▬▬▬●', {type: 'category'}).then(zula => {     
    message.guild.channels.create('●▬▬▬▬๑「✔|League Of Legends|✔」๑▬▬▬▬●', {type: 'category'}).then(lol => {  
        message.guild.channels.create('●▬▬▬▬๑「✔|Mobile Legends|✔」๑▬▬▬▬●', {type: 'category'}).then(mlol => { 
    message.guild.channels.create('●▬▬▬▬๑「✔|Valorant||✔」๑▬▬▬▬●', {type: 'category'}).then(valo => {   
    message.guild.channels.create('●▬▬▬▬๑「✔|CS-GO||✔」๑▬▬▬▬●', {type: 'category'}).then(csgo => {  
    message.guild.channels.create('●▬▬▬▬๑「✔|ETS 2||✔」๑▬▬▬▬●', {type: 'category'}).then(ets => { 
    message.guild.channels.create('●▬▬▬▬๑「✔|GTA V||✔」๑▬▬▬▬●', {type: 'category'}).then(gta => {
    message.guild.channels.create('●▬▬▬▬๑「✔|FORTNİTE||✔」๑▬▬▬▬●', {type: 'category'}).then(fortnite => {
        message.guild.channels.create('●▬▬▬▬๑「✔|APEX||✔」๑▬▬▬▬●', {type: 'category'}).then(apix => {

    //Kanallar
    setTimeout(() => {
    	message.guild.channels.create('〔📄〕qonun-qoi̇dalar', {type: 'text'}).then(kurallar => {
    	kurallar.createOverwrite(every, {
    		SEND_MESSAGES: false
    	})
    	kurallar.setParent(bilgi.id)
    	kurallar.send(stripIndents`
    	\`\`\`md
>  Discord Server-ga xush kelibsiz
>  Mana bizning oddiy qoidalarimiz
1. Bir-biringizni hurmat qiling:
2. Bir biriga o'xshash yoki bir xil avatarlar dan, shuningdek, ko'rinmaydigan, pornografik yoki etnik nizolarni keltirib chiqaradigan rasmlarni joylashtirish taqiqlanadi;
3. Umumiy suhbatda ko'p sonli skrinshotlarni spam qilish taqiqlanadi;
4. Qoidalardagi kamchiliklarni bohona qilib ularni buzmang, axloqsiz xatti-harakatlar qilmang Agar moderator sizdan biron bir narsa so'rasa, unda bunga ehtiyoj bor.
Sizning hayotingizda juda ko'p qiziqarli narsalar borligiga aminmiz - ikkilanmasdan va bu haqda gaplashing!
5. Hech narsani reklama qilmang:
6. Matnli chatlarida urshush so'kinish qattiyan taqiqlanadi;
7. Chatda oldi sotdi qilish akkaunt sotish taqiqlanadi. Bu reklama uchun platforma emas - bu ajoyib odamlar bilan aloqa qilish uchun server.
>  Nikklar.
8. Boshqa birovni xafa qilishi mumkin bo'lgan taxalluslar taqiqlanadi.
9. Taxalluslarda veb-sayt manzillari, elektron pochta manzillari va boshqa aloqa ma'lumotlaridan foydalanish taqiqlanadi.
10. Ko'rinmas taxallusni ishlatish taqiqlanadi.
11. Vizual ravishda o'xshash laqabning ikki barobaridan foydalanish taqiqlanadi.
12. Qoidalar ro'yxati har doim to'ldirilishi mumkin.
- Qoidalar o'qimaslik qat'iyan man etiladi!

\`\`\`
    	`)
    	kurallar.send(stripIndents`
    		\`\`\`md
[NOT]: Serverdagi * vakolatli * har bir a'zosi qoidalarni o'qigan deb hisoblanadi. Bu yerda maqolalar buzilishi bilanoq, "bilmadim, o'qimadim" * kabi bahonalar e'tiborsiz qoldiriladi va zarur choralar ko'riladi.!
\`\`\`
    	`)
    })
    message.guild.channels.create('〔💬〕chat', {type: 'text'}).then(c => c.setParent(pubg.id));
    message.guild.channels.create('〔💬〕chat', {type: 'text'}).then(c => c.setParent(lol.id));
    message.guild.channels.create('〔💬〕chat', {type: 'text'}).then(c => c.setParent(mlol.id));
    message.guild.channels.create('〔💬〕chat', {type: 'text'}).then(c => c.setParent(csgo.id));
    message.guild.channels.create('〔💬〕chat', {type: 'text'}).then(c => c.setParent(valo.id));
    message.guild.channels.create('〔💬〕chat', {type: 'text'}).then(c => c.setParent(gta.id));
    message.guild.channels.create('〔💬〕chat', {type: 'text'}).then(c => c.setParent(apix.id));
    message.guild.channels.create('〔💬〕chat', {type: 'text'}).then(c => c.setParent(fortnite.id));
    message.guild.channels.create('〔💬〕chat', {type: 'text'}).then(c => c.setParent(zula.id));
    message.guild.channels.create('〔💬〕chat', {type: 'text'}).then(c => c.setParent(ets.id));
    message.guild.channels.create('〔📷〕foto-chat', {type: 'text'}).then(c => c.setParent(toplum.id));

    	message.guild.channels.create('〔📢〕habarlar', {type: 'text'}).then(duyurular => {
         duyurular.send(stripIndents`
    		\`\`\`md
# Salom! 
> Bu habar. Bu yerda siz muhim ma'lumotlarni topasiz.
- ${client.user.username} -
\`\`\`
    	`)
    
    	duyurular.createOverwrite(every, {
    		SEND_MESSAGES: false
    	})
    	duyurular.setParent(bilgi.id)
    })
    	message.guild.channels.create('〔💬〕chat', {type: 'text'}).then(sohbet => {
    	sohbet.setParent(toplum.id)
         sohbet.send(stripIndents`
    		\`\`\`md
# Salom! 
> Bu chat. Do'stlaringiz bilan suhbatlashish uchun.
- ${client.user.username} -
\`\`\`
    	`)
    })
     message.guild.channels.create('〔✪〕rol-oli̇sh', {type: 'text'}).then(destek => {
    	destek.setParent(toplum.id)
    	db.set(`destekK_${message.guild.id}`, destek.id)
    })
    }, 5000)

    setTimeout(() => {
    	message.guild.channels.create('〔🤖〕bot-buyruq', {type: 'text'}).then(komutlar => {
           komutlar.send(stripIndents`
    		\`\`\`md
# Salom! 
> Bu buyruq xonasi. Dbw-UZ buyruqlarini !Help yozib ko'rishingiz mumkin.
- ${client.user.username} -
\`\`\`
    	`)
           	db.set(`ktr_${message.guild.id}`, komutlar.id)
    	komutlar.setParent(toplum.id)
    })
      
    }, 5000)

    setTimeout(() => {
    	message.guild.channels.create('〔✔✖〕kiruvchi-chiquvchi', {type: 'text'}).then(gc => {
    	gc.setParent(kayitlar.id)
    	gc.createOverwrite(every, {
    		SEND_MESSAGES: false
    	})
         gc.send(stripIndents`
    		\`\`\`md
# Salom! 
> Ushbu kanal yangi kelganlarni yozma ravishda kutib oladi.

- ${client.user.username} Murakkab kiruvchi chiquvchi tizim -
\`\`\`
    	`)
        
    	db.set(`gc_${message.guild.id}`, gc.id)
    })
      
    	message.guild.channels.create('〔🕐〕hisoblagich', {type: 'text'}).then(sayac => {
    	sayac.setParent(kayitlar.id)
        sayac.send(stripIndents`
    		\`\`\`md
# Salom! 
> Ushbu kanal sizga yangi kelganlar bilan ko'rsatilgan raqamga qancha qolganligini aytib beradi.

- ${client.user.username} Murakkab hisoblagich tizimi -
\`\`\`
    	`)
          sayac.createOverwrite(every, {
    		SEND_MESSAGES: false
    	})
    	db.set(`sKanal_${message.guild.id}`, sayac.id)
    	db.set(`sayac_${message.guild.id}`, message.guild.members.cache.size+100)
    })
      message.guild.channels.create('〔✅〕autorol', {type: 'text'}).then(otor => {
    	otor.setParent(kayitlar.id)
        otor.send(stripIndents`
    		\`\`\`md
# Salom! 
> Ushbu kanal yangi kelganlarga belgilangan rolni beradi.

- ${client.user.username} Murakkab Autorol tizimi -
\`\`\`
    	`)
          otor.createOverwrite(every, {
    		SEND_MESSAGES: false
    	})
    	db.set(`otoRK_${message.guild.id}`, otor.id)
    	db.set(`otoR_${message.guild.id}`, otor.id)
      
    })
   	message.guild.channels.create('〔💭〕xush-kelibsiz', {type: 'text'}).then(gcc => {
    	gcc.setParent(kayitlar.id)
      gcc.send(stripIndents`
    		\`\`\`md
# Salom! 
> Ushbu kanal yangi kelganlarni rasmlar bilan kutib oladi.

- ${client.user.username} Murakkab rasm-kanal tizimi -
\`\`\`
    	`)
    	db.set(`gcc_${message.guild.id}`, gcc.id)
         gcc.createOverwrite(every, {
           
    		SEND_MESSAGES: false
    	})
    })
      
    message.guild.channels.create('〔⛔〕moderasyon-kayıtları', {type: 'text'}).then(log => {
    	log.setParent(kayitlar.id)
        log.send(stripIndents`
    		\`\`\`md
# Salom! 
- ${client.user.username} -
\`\`\`
    	`)
    	db.set(`log_${message.guild.id}`, log.id)
             log.createOverwrite(every, {
                VIEW_CHANNEL: false,
                		SEND_MESSAGES: false
               
    	
    	})
       
    })
   
      	message.guild.channels.create('〔🚫〕xavfsizlik', {type: 'text'}).then(guvenlik => {
    	guvenlik.setParent(kayitlar.id)
               guvenlik.send(stripIndents`
    		\`\`\`md
# Salom! 
> Ushbu kanal yangi kelganlarning ishonchli yoki ishonchsizligini aniqlaydi.

- ${client.user.username} Kengaytirilgan xavfsizlik tizimi -
\`\`\`
    	`)
    	db.set(`guvenlik3_${message.guild.id}`, guvenlik.id)
          guvenlik.createOverwrite(every, {
    		SEND_MESSAGES: false
    	})
          
    })
    }, 10000)

    setTimeout(() => {


    message.guild.channels.create('〔🔊〕ovozli-chat', {type: 'voice'}).then(a => a.setParent(toplum.id) && a.setUserLimit(5));

    message.guild.channels.create('〔🎵〕 Music Room', {type: 'voice'}).then(a => a.setParent(mp.id) && a.setUserLimit(10));
    message.guild.channels.create('〔🎤〕 Live Music', {type: 'voice'}).then(a => a.setParent(mp.id) && a.setUserLimit(15));
    message.guild.channels.create('〔🔓〕 Free Style', {type: 'voice'}).then(a => a.setParent(mp.id) && a.setUserLimit(10));
    message.guild.channels.create('〔💫〕 Starbucks', {type: 'voice'}).then(a => a.setParent(mp.id) && a.setUserLimit(10));
    
    message.guild.channels.create('〔🎮〕Duo-1', {type: 'voice'}).then(a => a.setParent(pubg.id) && a.setUserLimit(2));
    message.guild.channels.create('〔🎮〕Duo-2', {type: 'voice'}).then(a => a.setParent(pubg.id) && a.setUserLimit(2));
    message.guild.channels.create('〔🎮〕Squad-1', {type: 'voice'}).then(a => a.setParent(pubg.id) && a.setUserLimit(4));
    message.guild.channels.create('〔🎮〕Squad-2', {type: 'voice'}).then(a => a.setParent(pubg.id) && a.setUserLimit(4));

    message.guild.channels.create('〔🎮〕Duo-1', {type: 'voice'}).then(a => a.setParent(pubgl.id) && a.setUserLimit(2));
    message.guild.channels.create('〔🎮〕Duo-2', {type: 'voice'}).then(a => a.setParent(pubgl.id) && a.setUserLimit(2));
    message.guild.channels.create('〔🎮〕Squad-1', {type: 'voice'}).then(a => a.setParent(pubgl.id) && a.setUserLimit(4));
    message.guild.channels.create('〔🎮〕Squad-2', {type: 'voice'}).then(a => a.setParent(pubgl.id) && a.setUserLimit(4));

    message.guild.channels.create('〔🎮〕League Of Legends-1', {type: 'voice'}).then(a => a.setParent(lol.id) && a.setUserLimit(5));
    message.guild.channels.create('〔🎮〕League Of Legends-2', {type: 'voice'}).then(a => a.setParent(lol.id) && a.setUserLimit(10));

    message.guild.channels.create('〔🎮〕Mobile Legends-1', {type: 'voice'}).then(a => a.setParent(mlol.id) && a.setUserLimit(5));
    message.guild.channels.create('〔🎮〕Mobile Legends-2', {type: 'voice'}).then(a => a.setParent(mlol.id) && a.setUserLimit(10));

    message.guild.channels.create('〔🎮〕Minecraft', {type: 'voice'}).then(a => a.setParent(zula.id) && a.setUserLimit(5));
    message.guild.channels.create('〔〔🎮〕Minecraft', {type: 'voice'}).then(a => a.setParent(zula.id) && a.setUserLimit(5));

    message.guild.channels.create('〔🎮〕Derecesiz-1', {type: 'voice'}).then(a => a.setParent(valo.id) && a.setUserLimit(5));
    message.guild.channels.create('〔🎮〕Derecesiz-2', {type: 'voice'}).then(a => a.setParent(valo.id) && a.setUserLimit(5));
    message.guild.channels.create('〔🎮〕Dereceli-1', {type: 'voice'}).then(a => a.setParent(valo.id) && a.setUserLimit(5));
    message.guild.channels.create('〔🎮〕Dereceli-2', {type: 'voice'}).then(a => a.setParent(valo.id) && a.setUserLimit(5));

    message.guild.channels.create('〔🎮〕Rekabet-1', {type: 'voice'}).then(a => a.setParent(csgo.id) && a.setUserLimit(5));
    message.guild.channels.create('〔🎮〕Rekabet-2', {type: 'voice'}).then(a => a.setParent(csgo.id) && a.setUserLimit(5));
    message.guild.channels.create('〔🎮〕Yoldaş-1', {type: 'voice'}).then(a => a.setParent(csgo.id) && a.setUserLimit(2));
    message.guild.channels.create('〔🎮〕Yoldaş-2', {type: 'voice'}).then(a => a.setParent(csgo.id) && a.setUserLimit(2));

    message.guild.channels.create('〔🎮〕EU-1', {type: 'voice'}).then(a => a.setParent(ets.id) && a.setUserLimit(10));
    message.guild.channels.create('〔🎮〕EU-2', {type: 'voice'}).then(a => a.setParent(ets.id) && a.setUserLimit(10));
    message.guild.channels.create('〔🎮〕EU-3', {type: 'voice'}).then(a => a.setParent(ets.id) && a.setUserLimit(10));
    message.guild.channels.create('〔🎮〕PROMODS', {type: 'voice'}).then(a => a.setParent(ets.id) && a.setUserLimit(10));

    message.guild.channels.create('〔🎮〕GTA V  1', {type: 'voice'}).then(a => a.setParent(gta.id) && a.setUserLimit(10));
    message.guild.channels.create('〔🎮〕GTA V  2', {type: 'voice'}).then(a => a.setParent(gta.id) && a.setUserLimit(10));
    
    
    message.guild.channels.create('〔🎮〕FORTNİTE DUO-1', {type: 'voice'}).then(a => a.setParent(fortnite.id) && a.setUserLimit(2));
    message.guild.channels.create('〔🎮〕FORTNİTE DUO-2', {type: 'voice'}).then(a => a.setParent(fortnite.id) && a.setUserLimit(2));
    message.guild.channels.create('〔🎮〕FORTNİTE SQUAD-1', {type: 'voice'}).then(a => a.setParent(fortnite.id) && a.setUserLimit(5));
    message.guild.channels.create('〔🎮〕FORTNİTE SQUAD-2', {type: 'voice'}).then(a => a.setParent(fortnite.id) && a.setUserLimit(5));

    
    message.guild.channels.create('〔🎮〕APEX-1', {type: 'voice'}).then(a => a.setParent(apix.id) && a.setUserLimit(5));
    message.guild.channels.create('〔🎮〕APEX-2', {type: 'voice'}).then(a => a.setParent(apix.id) && a.setUserLimit(5));
    
    
    
  
 
    }, 15000)

    })})})})})})})})})})})})})})})
    setTimeout(() => {
    message.guild.roles.create({ data: {name: '🔑'},color: '#EFEBE9',permissions: ["ADMINISTRATOR",
    "MANAGE_GUILD",
     "MANAGE_ROLES",
     "MUTE_MEMBERS",
     "DEAFEN_MEMBERS",
     "MANAGE_MESSAGES",
     "MANAGE_NICKNAMES",
     "KICK_MEMBERS"],
      }).then(d =>  message.guild.owner.roles.add(d.id))
    	message.guild.roles.create({ data: {name: '👑・Founder',color: 'BLACK', permissions: ["ADMINISTRATOR","MANAGE_GUILD",
        "MANAGE_ROLES",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MANAGE_MESSAGES",
        "MANAGE_NICKNAMES",
        "KICK_MEMBERS"],
    hoist: true}
        
      }).then(d =>  message.guild.owner.roles.add(d.id))
      message.guild.roles.create({ data: {name: '⭐・Menejer',color: '00bdff',permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ],
    hoist: true}
      })
      message.guild.roles.create({ data: { name: '・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
       message.guild.roles.create({
        data: {name: '⚡・Yordam guruhi',
      	color: 'RED',
      	mentionable: true,
         hoist: true}
      }).then(d => {
      db.set(`destekR_${message.guild.id}`, d.id)
    })

 message.guild.roles.create({ data: { name: '🔴・YOUTUBERS' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
 message.guild.roles.create({ data: { name: '・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
message.guild.roles.create({ data: { name: '💎・Vip' }, reason: 'ayn' }).then(s => s.setColor('#f4fa58'))
message.guild.roles.create({data: { name: "💫・Yangi A'zo",color: 'caf7fc',hoist: true},
      }).then(d =>  db.set(`otoR_${message.guild.id}`, d.id,    message.guild.members.cache.forEach(async (every) => {
 every.roles.add(d.id)})))
message.guild.roles.create({ data: { name: '🛡️・ Botlar' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))
message.guild.roles.create({ data: { name: '・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
message.guild.roles.create({ data: { name: '🎮 | CSGO' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))
message.guild.roles.create({ data: { name: '🎮 | Valorant' }, reason: 'ayn' }).then(s => s.setColor('#4e433c'))
message.guild.roles.create({ data: { name: '🎮 | Minecraft' }, reason: 'ayn' }).then(s => s.setColor('#29cb79'))
message.guild.roles.create({ data: { name: '🎮 | Apex Legends' }, reason: 'ayn' }).then(s => s.setColor('#955aab'))
message.guild.roles.create({ data: { name: '🎮 | Pubg Mobile' }, reason: 'ayn' }).then(s => s.setColor('#2efec8'))
message.guild.roles.create({ data: { name: '🎮 | League of Legends' }, reason: 'ayn' }).then(s => s.setColor('#3299d8'))
message.guild.roles.create({ data: { name: '🎮 | Mobile Legends' }, reason: 'ayn' }).then(s => s.setColor('#ffbf00'))
message.guild.roles.create({ data: { name: '🎮 | PUBG Lite' }, reason: 'ayn' }).then(s => s.setColor('#81f79f'))
message.guild.roles.create({ data: { name: '🎮 | Fortnite' }, reason: 'ayn' }).then(s => s.setColor('#5882fa'))
message.guild.roles.create({ data: { name: '・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
    const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setDescription("Serveringizdagi barcha kanallar, toifalar va rollar o'chirildi! Va serverni sozlash tugallandi! Agar tepada kanallar bo'lsa, ular xatolar bo'lgan kanallar, shuning uchun vahima qilmang serverdan chiqib kirsangiz yoqoladi.")
	message.author.send({embed: embed})
    }, 20000)
        })
        .catch(() => {
        	message.channel.send("`10 soniyada ha javobini yozmaganingiz uchun kanallarni, toifalarni va rollarni o'chirish bekor qilindi!")
        });
    
  } catch (err) {
    
  }
  
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['serverqur', 'server-qur', 'serverqur'],
	permLevel: 4,
	kategori: 'moderasyon'
};

exports.help = {
	name: 'server-qur',
	description: "Server sozlamalarini o'chiradi va botning sozlamalarini qayta o'rnatib, kerakli rollarni, kanallarni va toifalarni yaratib, serverni o'rnatadi..",
	usage: ''
};