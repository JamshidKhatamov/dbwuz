const Discord = require("discord.js");
const client = new Discord.Client();
const { MessageEmbed } = require("discord.js");
const ms = require("parse-ms");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const chalk = require("chalk");
const fs = require("fs");
const { stripIndents } = require("common-tags");
require("moment-duration-format");
const moment = require("moment");
const fetch = require('node-fetch');
const request = require("request");
const db = require("quick.db");
const jimp = require("jimp");
const snekfetch = require("snekfetch");
const ayarlar = require("./ayarlar.json");
const config = require("./config.json");
var prefix = ayarlar.prefix;


require("./util/eventLoader")(client);

client.ayarlar = {

    official_sahip: "469111838295064586",
    sahip: "469111838295064586",
    
    yardimcilar: [""],
    isim: "dbwuz ",
    botD:
      "https://discordapp.com/oauth2/authorize?client_id=&scope=bot&permissions=8",
    webS: "https://discordbot.web.tr/",
    web: "https://discordbot.web.tr/",
    site: "https://discordbot.web.tr/",
    webpanel: "https://discordbot.web.tr/",
    versiyon: "2.0",
    prefix: "!",
    renk: "RANDOM",
    version: "1.0.0"
    };
    client.a = {
   
};

    
    //var prefix = ayarlar.prefix;
    
    const log = message => {
    console.log(`${chalk.yellow(`+`)} ${message}`);
};
// Consol Messaji Başlangiç\\
const botadi = "dbwuz";
client.on("ready", async () => {
    client.appInfo = await client.fetchApplication();
    setInterval(async () => {
      client.appInfo = await client.fetchApplication();
    }, 60000);
  
  
    console.log(
      `${chalk.green(client.user.username)}${chalk.red(",")} ${chalk.blue(
        client.guilds.cache.size
      )} ${chalk.yellow("Sunucu'ya")} ${chalk.red("ve")} ${chalk.blue(
        client.users.cache.size.toLocaleString()
      )} ${chalk.yellow("Kullanıcı'ya")} ${chalk.red("hizmet veriyor!")}`
    );
   
    client.user.setStatus("online");
   
  });
// Consol Messaji Son\\

// Otoroll sistemi Başlangiç\\
client.on("guildMemberAdd", async member => {
    if (db.has(`otoR_${member.guild.id}`) === true) {
      var rol = member.guild.roles.cache.get(db.fetch(`otoR_${member.guild.id}`));
      var rolD = `${member.guild.roles.cache.get(db.fetch(`otoR_${member.guild.id}`))
          ? "var"
          : "yok"
      }`;
    
      var kanalD = `${member.guild.channels.cache.get(db.fetch(`otoRK_${member.guild.id}`))
          ? "var"
          : "yok"
      }`;
    
      if (rolD === "var") {member.roles.add(rol);
        if (db.has(`otoRK_${member.guild.id}`) === true) {
          if (kanalD === "var") {
            if (db.has(`üyelikk_${member.id}`)) {
              const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(
                  `<a:gif2:791583030200238110> Gold üye katıldı. \`${member.user.tag}\`, Hoşgeldin \`${rol.name}\` Adlı rolün verildi <a:gif2:791583030200238110>`
                );
    
              member.guild.channels.cache
                .get(db.fetch(`otoRK_${member.guild.id}`))
                .send(embed);
            } else
              member.guild.channels.cache
                .get(db.fetch(`otoRK_${member.guild.id}`))
                .send(
                  `<a:acik:791458752866942976> <a:giris:791458670101004288> **${member.user.tag}** İsimli foydalanuvchiga muvaffaqiyatli  \`${rol.name}\` isimli rol berildi!`
                );
          }
        }
      }
    }
});
// Otoroll Sistemi Son\\
// Sayaç Sistemi Başlangiç\\
client.on("message", async message => {
    if (!message.guild) return;
    
    if (db.has(`sayac_${message.guild.id}`) === true) {
      if (db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.cache.size) {
        const embed = new Discord.MessageEmbed()
          .setTitle(`Tebrikler ${message.guild.name}!`)
          .setDescription(
            `Başarıyla \`${db.fetch(
              `sayac_${message.guild.id}`
            )}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`
          )
          .setColor("RANDOM");
        message.channel.send({ embed });
        message.guild.owner.send({ embed });
        db.delete(`sayac_${message.guild.id}`);
      }
    }
});
// Sayaç Sistemi Başlangiç\\
client.on("message", async message => {
    if (!message.guild) return;
    
    if (db.has(`sayac_${message.guild.id}`) === true) {
      if (db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.cache.size) {
        const embed = new Discord.MessageEmbed()
          .setTitle(`Tebrikler ${message.guild.name}!`)
          .setDescription(
            `Başarıyla \`${db.fetch(
              `sayac_${message.guild.id}`
            )}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`
          )
          .setColor("RANDOM");
        message.channel.send({ embed });
        message.guild.owner.send({ embed });
        db.delete(`sayac_${message.guild.id}`);
      }
    }
});
// Sayaç Sistemi Son\\
// Sayaç Sistemi Kanal Başlangiç\\
client.on("guildMemberRemove", async member => {
    const channel = db.fetch(`sKanal_${member.guild.id}`);
    if (db.has(`sayac_${member.guild.id}`) === false) return;
    if (db.has(`sKanal_${member.guild.id}`) === false) return;
    
    if (db.has(`üyelikk_${member.id}`)) {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
    
        .setDescription(
          `<a:gif2:791583030200238110> Gold üye kayboldu. \`${
            member.user.tag
          }\` \`${db.fetch(
            `sayac_${member.guild.id}`
          )}\` A'zo bo'lishimizga ohirgi \`${db.fetch(`sayac_${member.guild.id}`) -
            member.guild.members.cache.size}\` Kişi Kaldı <a:gif2:791583030200238110>`
        );
    
      if (!member.guild.channels.cache.get(channel)) return;
    
      member.guild.channels.cache.get(channel).send(embed);
    } else
      member.guild.channels.cache.get(channel).send(
          `<a:kilit:791612739797254155> <a:cikis:791612741042438144> **${
            member.user.tag
          }** Serverdan ketti! va\`${db.fetch(
            `sayac_${member.guild.id}`
          )}\` A'zo bo'lishimizga oxirgi \`${db.fetch(`sayac_${member.guild.id}`) -
            member.guild.members.cache.size}\` a'zo qoldi!`
        );
});
// Sayaç Sistemi Kanal Son\\
// Resimli Giriş Çıkış Sistemi Başlangiç\\
client.on("guildMemberAdd", async member => {
    if (!member.guild) return;
    
    let prefix =
      (await db.fetch(`prefix_${member.guild.id}`)) || client.ayarlar.prefix;
    
    if (db.has(`gc_${member.guild.id}`) === false) return;
    
    const hgK = await db.fetch(`gc_${member.guild.id}`);
    if (!hgK) return;
    
    const giris = db.fetch(`girisM_${member.guild.id}`);
    if (!member.guild.channels.cache.get(hgK)) return;
    if (db.has(`üyelikk_${member.id}`)) {
      member.guild.channels.cache.get(hgK).send(
        db.has(`girisM_${member.guild.id}`)
          ? giris
              .replace("{kullanıcı}", `<@${member.user.id}>`)
              .replace("{user}", `<@${member.user.id}>`)
              .replace("{sunucu}", `**${member.guild.name}**`)
              .replace("{kişisayısı}", `**${member.guild.members.cache.size}**`)
          : `<a:gif2:791583030200238110> <@${member.user.id}> Adlı Gold Üye Katıldı! **${client.ayarlar.webpanel}** adresinden veya (\`giriş-mesaj-ayarla\` komutu ile mesajı değiştirilebilir. <a:gif2:791583030200238110>`
      );
    } else
      member.guild.channels.cache.get(hgK).send(
        db.has(`girisM_${member.guild.id}`)
          ? giris
              .replace("{kullanıcı}", `<@${member.user.id}>`)
              .replace("{user}", `<@${member.user.id}>`)
              .replace("{sunucu}", `**${member.guild.name}**`)
              .replace("{kişisayısı}", `**${member.guild.members.cache.size}**`)
          : `**${member.guild.name}** Serverimizga <@${member.user.id}> isimli a'zo keldi va **${member.guild.members.cache.size}** a'zomiz.)`
          
          
      );
});

client.on("guildMemberRemove", async member => {
    if (!member.guild) return;
    
    let prefix =
      (await db.fetch(`prefix_${member.guild.id}`)) || client.ayarlar.prefix;
    
    if (db.has(`gc_${member.guild.id}`) === false) return;
    
    const hgK = await db.fetch(`gc_${member.guild.id}`);
    if (!hgK) return;
    
    const cikis = db.fetch(`cikisM_${member.guild.id}`);
    if (!member.guild.channels.cache.get(hgK)) return;
    if (db.has(`üyelikk_${member.id}`)) {
      member.guild.channels.cache.get(hgK).send(
        db.has(`cikisM_${member.guild.id}`)
          ? cikis
              .replace("{kullanıcı}", `**${member.user.username}**`)
              .replace("{user}", `**${member.user.username}**`)
              .replace("{sunucu}", `**${member.guild.name}**`)
              .replace("{kişisayısı}", `**${member.guild.members.cache.size}**`)
          : `<a:gif2:791583030200238110> **${member.user.username}** Adlı Gold Üye Ayrıldı! **${client.ayarlar.webpanel}** adresinden veya (\`çıkış-mesaj-ayarla\` komutu ile mesaj değiştirilebilir. <a:gif2:791583030200238110>)`
      );
    } else
      member.guild.channels.cache.get(hgK).send(
        db.has(`cikisM_${member.guild.id}`)
          ? cikis
              .replace("{kullanıcı}", `**${member.user.username}**`)
              .replace("{user}", `**${member.user.username}**`)
              .replace("{sunucu}", `**${member.guild.name}**`)
              .replace("{kişisayısı}", `**${member.guild.members.cache.size}**`)
          : `**${member.guild.name}** serverimizdan **${member.user.username}** isimli a'zo ketti va **${member.guild.members.cache.size}** A'zomiz.)`
      );
});
// Resimli Giriş Çıkış Sistemi Son\\
// Destek Sistemi Başlangiç\\


// Destek Sistemi Son\\

// \\
client.on("guildMemberAdd", member => {
    //if (member.author.bot) return;
    
    // if (!logA[member.guild.id]) return;
    
    var user = member.user;
    var tarih = "";
    if (moment(user.createdAt).format("MM") === "01") {
      var tarih = `${moment(user.createdAt).format("DD")} Ocak ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "02") {
      var tarih = `${moment(user.createdAt).format("DD")} Şubat ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "03") {
      var tarih = `${moment(user.createdAt).format("DD")} Mart ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "04") {
      var tarih = `${moment(user.createdAt).format("DD")} Nisan ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "05") {
      var tarih = `${moment(user.createdAt).format("DD")} Mayıs ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "06") {
      var tarih = `${moment(user.createdAt).format("DD")} Haziran ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "07") {
      var tarih = `${moment(user.createdAt).format("DD")} Temmuz ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "08") {
      var tarih = `${moment(user.createdAt).format("DD")} Ağustos ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "09") {
      var tarih = `${moment(user.createdAt).format("DD")} Eylül ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "10") {
      var tarih = `${moment(user.createdAt).format("DD")} Ekim ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "11") {
      var tarih = `${moment(user.createdAt).format("DD")} Kasım ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "12") {
      var tarih = `${moment(user.createdAt).format("DD")} Aralık ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    
    var tarih2 = "";
    if (moment(user.joinedAt).format("MM") === "01") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Ocak ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "02") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Şubat ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "03") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Mart ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "04") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Nisan ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "05") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Mayıs ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "06") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Haziran ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "07") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Temmuz ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "08") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Ağustos ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "09") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Eylül ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "10") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Ekim ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "11") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Kasım ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "12") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Aralık ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    
    //var kanal = member.guild.channels.cache.get(logA[member.guild.id].log);
    
    if (db.has(`log_${member.guild.id}`) === false) return;
    
    var kanal = member.guild.channels.cache.get(db.fetch(`log_${member.guild.id}`));
    if (!kanal) return;
    
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Sunucuya Bir Kullanıcı Katıldı!`, member.user.avatarURL())
      .addField("Kullanıcı Tag", member.user.tag, true)
      .addField("ID", member.user.id, true)
      .addField("Discord Kayıt Tarihi", tarih, true)
      .addField("Sunucuya Katıldığı Tarih", tarih2, true)
      .setThumbnail(member.user.avatarURL());
    kanal.send(embed);
    });
    
    client.on("guildMemberRemove", member => {
    //if (member.author.bot) return;
    
    // if (!logA[member.guild.id]) return;
    
    var user = member.user;
    var tarih = "";
    if (moment(user.createdAt).format("MM") === "01") {
      var tarih = `${moment(user.createdAt).format("DD")} Ocak ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "02") {
      var tarih = `${moment(user.createdAt).format("DD")} Şubat ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "03") {
      var tarih = `${moment(user.createdAt).format("DD")} Mart ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "04") {
      var tarih = `${moment(user.createdAt).format("DD")} Nisan ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "05") {
      var tarih = `${moment(user.createdAt).format("DD")} Mayıs ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "06") {
      var tarih = `${moment(user.createdAt).format("DD")} Haziran ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "07") {
      var tarih = `${moment(user.createdAt).format("DD")} Temmuz ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "08") {
      var tarih = `${moment(user.createdAt).format("DD")} Ağustos ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "09") {
      var tarih = `${moment(user.createdAt).format("DD")} Eylül ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "10") {
      var tarih = `${moment(user.createdAt).format("DD")} Ekim ${moment(
        user.createdAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.createdAt).format("MM") === "11") {
      var tarih = `${moment(user.createdAt).format("DD")} Kasım ${moment(
        user.createdAt
        ).format("YYYY HH:mm:ss")} `;
      }
      if (moment(user.createdAt).format("MM") === "12") {
        var tarih = `${moment(user.createdAt).format("DD")} Aralık ${moment(
          user.createdAt
        ).format("YYYY HH:mm:ss")} `;
      }
    
    var tarih2 = "";
    if (moment(user.joinedAt).format("MM") === "01") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Ocak ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "02") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Şubat ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "03") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Mart ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "04") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Nisan ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "05") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Mayıs ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "06") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Haziran ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "07") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Temmuz ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "08") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Ağustos ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "09") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Eylül ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "10") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Ekim ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "11") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Kasım ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    if (moment(user.joinedAt).format("MM") === "12") {
      var tarih2 = `${moment(user.joinedAt).format("DD")} Aralık ${moment(
        user.joinedAt
      ).format("YYYY HH:mm:ss")} `;
    }
    
    //var kanal = member.guild.channels.get(logA[member.guild.id].log);
    
    if (db.has(`log_${member.guild.id}`) === false) return;
    
    var kanal = member.guild.channels.cache.get(db.fetch(`log_${member.guild.id}`));
    if (!kanal) return;
    
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Sunucudan Bir Kullanıcı Ayrıldı!`, member.user.avatarURL())
      .addField("Kullanıcı Tag", member.user.tag, true)
      .addField("ID", member.user.id, true)
      .addField("Discord Kayıt Tarihi", tarih, true)
      .addField("Sunucuya Katıldığı Tarih", tarih2, true)
      .setThumbnail(member.user.avatarURL());
    kanal.send(embed);
    });
// \\

//Mod Los Sistem Başlangiç\\
client.on("messageDelete", message => {
    if (message.author.bot) return;
    
    db.set(`atan_${message.channel.id}`, `${message.author.tag}`);
    db.set(`mesaj_${message.channel.id}`, message.content);
    
    //if (!logA[message.guild.id]) return;
    
    var user = message.author;
    
    //var kanal = message.guild.channels.cache.get(logA[message.guild.id].log);
    
    if (db.has(`log_${message.guild.id}`) === false) return;
    
    var kanal = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`));
    if (!kanal) return;
    
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Bir Mesaj Silindi!`, message.author.avatarURL())
      .addField("Kullanıcı Tag", message.author.tag, true)
      .addField("ID", message.author.id, true)
      .addField("Silinen Mesaj", "```" + message.content + "```")
      .setThumbnail(message.author.avatarURL());
    kanal.send(embed);
    });
    
    client.on("messageUpdate", async (oldMsg, newMsg) => {
    if (oldMsg.author.bot) return;
    
    // if (!logA[oldMsg.guild.id]) return;
    
    var user = oldMsg.author;
    
    //var kanal = oldMsg.guild.channels.cache.get(logA[oldMsg.guild.id].log);
    
    if (db.has(`log_${oldMsg.guild.id}`) === false) return;
    
    var kanal = oldMsg.guild.channels.cache.get(db.fetch(`log_${oldMsg.guild.id}`));
    if (!kanal) return;
    
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Bir Mesaj Düzenlendi!`, oldMsg.author.avatarURL())
      .addField("Kullanıcı Tag", oldMsg.author.tag, true)
      .addField("ID", oldMsg.author.id, true)
      .addField("Eski Mesaj", "```" + oldMsg.content + "```")
      .addField("Yeni Mesaj", "```" + newMsg.content + "```")
      .setThumbnail(oldMsg.author.avatarURL());
    kanal.send(embed);
    });
    
    client.on("roleCreate", role => {
    // if (!logA[role.guild.id]) return;
    
    if (db.has(`log_${role.guild.id}`) === false) return;
    
    var kanal = role.guild.channels.cache.get(db.fetch(`log_${role.guild.id}`));
    if (!kanal) return;
    
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Bir Rol Oluşturuldu!`, role.guild.iconURL())
      .addField("Rol", `\`${role.name}\``, true)
      .addField("Rol Rengi Kodu", `${role.hexColor}`, true);
    kanal.send(embed);
    });
    
    client.on("roleDelete", role => {
    // if (!logA[role.guild.id]) return;
    
    if (db.has(`log_${role.guild.id}`) === false) return;
    
    var kanal = role.guild.channels.cache.get(db.fetch(`log_${role.guild.id}`));
    if (!kanal) return;
    
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Bir Rol Kaldırıldı!`, role.guild.iconURL())
      .addField("Rol", `\`${role.name}\``, true)
      .addField("Rol Rengi Kodu", `${role.hexColor}`, true);
    kanal.send(embed);
    });
    
    client.on("roleUpdate", role => {
    // if (!logA[role.guild.id]) return;
    
    if (db.has(`log_${role.guild.id}`) === false) return;
    
    var kanal = role.guild.channels.cache.get(db.fetch(`log_${role.guild.id}`));
    if (!kanal) return;
    
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Bir Rol Güncellendi!`, role.guild.iconURL())
      .addField("Rol", `\`${role.name}\``, true)
      .addField("Rol Rengi Kodu", `${role.hexColor}`, true);
    kanal.send(embed);
});
//Mod Log Sistem Son\\

//Komut Kulanımı Başlangiç\\
const sure = 3; //Komut bekleme süresi
const beklememesaji = `<:hata:637685816197382165> Bu komutu kullanabilmek için \`${sure}\` saniye kadar beklemelisiniz.`; //Komut bekleme mesajı
const sahipbeklemesi = true; //Sahip bekleme ayarı (false=kapalı, true=açık)
let yazma = new Set();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
if (err) console.error(err);
files.forEach(f => {
  let props = require(`./komutlar/${f}`);
  client.commands.set(props.help.name, props);
  props.conf.aliases.forEach(alias => {
    client.aliases.set(alias, props.help.name);
  });
});
});

client.english = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
if (err) console.error(err);
//log(`${chalk.red(files.length)} ${chalk.green("komut yüklenecek.")}`);
files.forEach(f => {
  let props = require(`./komutlar/${f}`);
  //log(`${chalk.green("Yüklenen komut:")} ${chalk.blue(props.help.name)}.`);
  client.english.set(props.help.enname, props);
});
});

client.reload = command => {
return new Promise((resolve, reject) => {
  try {
    delete require.cache[require.resolve(`./komutlar/${command}`)];
    let cmd = require(`./komutlar/${command}`);
    client.commands.delete(command);
    client.aliases.forEach((cmd, alias) => {
      if (cmd === command) client.aliases.delete(alias);
    });
    client.commands.set(command, cmd);
    cmd.conf.aliases.forEach(alias => {
      client.aliases.set(alias, cmd.help.name);
    });
    resolve();
  } catch (e) {
    reject(e);
  }
});
};

client.load = command => {
return new Promise((resolve, reject) => {
  try {
    let cmd = require(`./komutlar/${command}`);

    client.commands.set(command, cmd);
    cmd.conf.aliases.forEach(alias => {
      client.aliases.set(alias, cmd.help.name);
    });
    resolve();
  } catch (e) {
    reject(e);
  }
});
};

client.unload = command => {
return new Promise((resolve, reject) => {
  try {
    delete require.cache[require.resolve(`./komutlar/${command}`)];
    let cmd = require(`./komutlar/${command}`);
    client.commands.delete(command);
    client.aliases.forEach((cmd, alias) => {
      if (cmd === command) client.aliases.delete(alias);
    });
    resolve();
  } catch (e) {
    reject(e);
  }
});
};
//Komut Kulanımı Son\\

//Güvenlık Sistemi Canvas Başlangiç\\
//3
client.on("guildMemberAdd", async member => {
    let user = client.users.cache.get(member.id);
    let chan = client.channels.cache.get(db.fetch(`guvenlik3_${member.guild.id}`));
    const Canvas = require("canvas");
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext("2d");
    let memberChannel = await db.fetch(`guvenlik3_${member.guild.id}`);
    const resim1 = await Canvas.loadImage(
      "https://i.hizliresim.com/X9uLgQ.png"
      );
      const resim2 = await Canvas.loadImage(
        "https://i.hizliresim.com/MNbFlc.png"
      );
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment.duration(kurulus).format("D");
    var kontrol;
    if (kurulus > 1296000000) kontrol = resim2;
    if (kurulus < 1296000000) kontrol = resim1;
    
    
    const background = await Canvas.loadImage(
      "https://i.hizliresim.com/LmGiIK.png"
    );
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `#ffffff`;
    ctx.font = `30px Impact"`;
    ctx.textAlign = "center";
    ctx.textAlign = "start";
    ctx.fillText(`Discord Kayıt Tarihi`, 425, 72);
    ctx.font = `30px Impact"`;
    ctx.textAlign = "start";
    ctx.fillText(`${moment(user.createdAt).format("DD/MM/YYYY")}`, 510, 135);
    
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));
    ctx.drawImage(kontrol, 0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.arc(125, 125, 80, 0, Math.PI * 2, true);
    ctx.clip();
    ctx.drawImage(avatar, 25, 25, 200, 200);
    
    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "Dbw-TR-Plus-güvenlik3.png"
    );
    if (db.has(`karalist_${user.id}`)) {
      member.guild.channels.cache.get(memberChannel)
        .send("Yasaklı kullanıcı geldi. Lütfen DİKKATLİ olun");
      if (!member.guild.channels.cache.get(memberChannel)) return;
    } else if (db.has(`üyelikk_${user.id}`)) {
      return;
    } else if (!member.guild.channels.cache.get(memberChannel)) return;
    member.guild.channels.cache.get(memberChannel).send(attachment);
    });
    client.on("guildMemberAdd", async member => {
      let user = client.users.cache.get(member.id);
      let chan = client.channels.cache.get(db.fetch(`guvenlik3_${member.guild.id}`));
      const Canvas = require("canvas");
      const canvas = Canvas.createCanvas(700, 250);
      const ctx = canvas.getContext("2d");
      let memberChannel = await db.fetch(`guvenlik3_${member.guild.id}`);
      const resim1 = await Canvas.loadImage(
        "https://i.hizliresim.com/X9uLgQ.png"
      );
      const resim2 = await Canvas.loadImage(
        "https://i.hizliresim.com/MNbFlc.png"
      );
      const kurulus = new Date().getTime() - user.createdAt.getTime();
      const gün = moment.duration(kurulus).format("D");
      var kontrol;
      if (kurulus > 1296000000) kontrol = resim2;
      if (kurulus < 1296000000) kontrol = resim1;
      
    
      const background = await Canvas.loadImage(
        "https://i.hizliresim.com/LmGiIK.png"
      );
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      ctx.fillStyle = `#ffffff`;
      ctx.font = `30px Impact"`;
      ctx.textAlign = "center";
      ctx.textAlign = "start";
      ctx.fillText(`Discord Kayıt Tarihi`, 425, 72);
      ctx.font = `30px Impact"`;
      ctx.textAlign = "start";
      ctx.fillText(`${moment(user.createdAt).format("DD/MM/YYYY")}`, 510, 135);
      
      const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));
      ctx.drawImage(kontrol, 0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.arc(125, 125, 80, 0, Math.PI * 2, true);
      ctx.clip();
      ctx.drawImage(avatar, 25, 25, 200, 200);
    
    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "Dbw-TR-Plus-güvenlik3.png"
    );
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
    
      .setDescription(
        `<a:gif2:791583030200238110> ${member.user.username} Adlı Gold üye Katıldı. <a:gif2:791583030200238110>`
      );
    if (db.has(`üyelikk_${user.id}`)) {
      if (!member.guild.channels.cache.get(memberChannel)) return;
      member.guild.channels.cache.get(memberChannel).send(attachment);
      member.guild.channels.cache.get(memberChannel).send(embed);
    } else return;
    });
    //Güvenlik Sistemi Canvas Son\\




    client.login(config.Token);   