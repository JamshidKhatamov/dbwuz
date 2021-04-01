const Discord = require("discord.js")
const db = require("quick.db");
const Canvas = require('canvas')
    , Image = Canvas.Image

    , path = require('path');
const { registerFont, createCanvas } = require('canvas')
registerFont('ay.otf', { family: 'SONGER' })
const snekfetch = require('snekfetch');
const request = require('node-superfetch');

module.exports = async member => {  
   var randomMsg = [];
    var randomMsg_integer = randomMsg[Math.floor((Math.random() * randomMsg.length))]
  let user = member.client.users.cache.get(member.id);
  let paket = await db.fetch(`pakets_${member.id}`)
  let memberChannel = await db.fetch(`gcc_${member.guild.id}`)
  let msj = await db.fetch(`cikisM_${member.guild.id}`)
 
  
  
  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://media.discordapp.net/attachments/826979746919219230/826984537505398814/azo.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 8;
  ctx.strokeStyle = "#ffffff";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = `#ffffff`;
  ctx.font = `30px Impact"`;
  ctx.textAlign = "center";
  ctx.textAlign = "start";
  ctx.fillText(`${member.user.username}`, 250, 112);
  ctx.font = `30px Impact"`;
  ctx.textAlign = "start";
  ctx.fillText(`${member.user.discriminator}`, 275, 155);
  ctx.font = `20px Impact"`;
  ctx.textAlign = "start";
  ctx.fillText(`serverimizdan chiqib ketdi`, 215, 215);
  ctx.font = `25px Impact"`;
  ctx.textAlign = "start";
  ctx.fillText(`Endi ${member.guild.members.cache.size} A'zomiz.`, 15, 235);
  

  let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.fill()
  ctx.lineWidth = 0;
  ctx.arc(125, 125, 80, 0, Math.PI * 2, true);
  ctx.lineWidth = 8;
  ctx.strokeStyle = "#ffffff"
  ctx.stroke();
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(avatar, 25, 25, 200, 200);
  
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'youtube.com/dbwuz.png');
  if (!member.guild.channels.cache.get(memberChannel)) return


 if (db.has(`karalist_${user.id}`)) {
    member.guild.channels
      .get(memberChannel)
      .send("Yasaklı kullanıcı geldi. Lütfen DİKKATLİ olun");
    if (!member.guild.channels.cache.get(memberChannel)) return;
  } else 
    if (db.has(`üyelikk_${user.id}`)) {
    return
  } else 
    if (!member.guild.channels.cache.get(memberChannel)) return;
  member.guild.channels.cache.get(memberChannel).send(attachment) 
}