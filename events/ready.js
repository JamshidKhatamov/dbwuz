const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const snekfetch = require('snekfetch');

var prefix = ayarlar.prefix;

module.exports = async client => {
  

console.log(">>O'yin qismi muvaffaqiyatli yangilandi.");
console.log('Bot tayyor va tizimga kirdi.');
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: hozir ` + client.channels.cache.size + ` dona kanala, ` + client.guilds.cache.size + ` dona serverga va ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` a'zolarga xizmat qilmoqta!`);
    var Games = [
        "DBW-UZ",
        "Youtube.com/dbwuz",
        "DiscordBot.Web.TR",
        `${client.guilds.cache.size} Server | ${client.users.cache.size} Foydalanuvchilar`
    ];
  
  setInterval(function() {
    var random = Math.floor(Math.random()*(Games.length-0+1)+0);
    client.user.setActivity(Games[random], { type: "STREAMING", url: "https://www.youtube.com/dbwuz" } );
  }, 5 * 2000);

};