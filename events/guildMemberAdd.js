
const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk')
module.exports = async member => {
 
   let client = member.client;
  const ayarlar = client.ayarlar
  
  //if (!client.users.cache.get(client.user.id).hasPermission("SEND_MESSAGES")) return message.reply(`Yeterli izinlere sahip değilim! \n**İhtiyacım Olan Yetki:** \n\`Mesaj Gönder\``)
  

  
let prefix;
  
if (db.has(`prefix_${member.guild.id}`) === true) {
  prefix = db.fetch(`prefix_${member.guild.id}`)
}
  
if (db.has(`prefix_${member.guild.id}`) === false) {
  prefix = client.ayarlar.prefix
}
  
  
  
  
  if (member.bot) return;
  
  
    let tag = await db.fetch(`tagB_${member.guild.id}`);
    var tagK = await db.fetch(`tagKanal_${member.guild.id}`);
    var tagKD = await `${member.guild.channels.cache.get(db.fetch(`tagKanal_${member.guild.id}`)) ? "var" : "yok"}`;
  if (db.has(`tagB_${member.guild.id}`) === true) {
member.setNickname(`${tag} ${member.user.username}`)
  

  if(db.has(`tagKanal_${member.guild.id}`) === true) {
    if(tagKD === "var") {
      member.guild.channels.cache.get(tagK).send(`**${member.user.tag}** adlı kullanıcıya \`${db.fetch(`tagB_${member.guild.id}`)}\` olarak ayarlanmış olan tag verilerek kullanıcının ismi sunucu için \`${member.nickname || `${db.fetch(`tagB_${member.guild.id}`)} ${member.user.username}`}\` olarak ayarlanmıştır!`)
  }}};

  if (db.has(`sayac_${member.guild.id}`) === true) {
    if (db.has(`sKanal_${member.guild.id}`) === true) {
    const channel = db.fetch(`sKanal_${member.guild.id}`)

    if(db.has(`üyelikk_${member.id}`)) {
    const embed = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setDescription(`<a:gif2:791583030200238110> Gold üye belirdi. \`${member.user.tag}\`, \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.members.cache.size}\` Kişi Kaldı<a:gif2:791583030200238110> `)
    if (!member.guild.channels.cache.get(channel)) return

    member.guild.channels.cache.get(channel).send(embed)
   
   } else
   
    member.guild.channels.cache.get(channel).send(`<a:acik:791458752866942976> <a:giris:791458670101004288> **${member.user.tag}** Serverga Keldi va! \`${db.fetch(`sayac_${member.guild.id}`)}\` a'zo bo'lishimizga oxirgi \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.members.cache.size}\` a'zo koldi!`)
    }};
  
  

  
};
