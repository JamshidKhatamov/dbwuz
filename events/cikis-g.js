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
    "https://i.hizliresim.com/QgBiJe.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#f3c06d`;
  ctx.font = `30px Impact"`;
  ctx.textAlign = "center";
  ctx.textAlign = "start";
  ctx.fillText(`${member.user.username}`, 250, 112);
  ctx.font = `30px Impact"`;
  ctx.textAlign = "start";
  ctx.fillText(`${member.user.discriminator}`, 275, 155);
  ctx.fillStyle = `#f3c06d`;
  ctx.font = `25px Impact"`;
  ctx.textAlign = "start";
  ctx.fillText(`Artık ${member.guild.members.cache.size} Üyeyiz.`, 15, 235);
  

  let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);
  
  ctx.beginPath();
ctx.lineWidth = 0;
ctx.fill()
ctx.lineWidth = 0;
ctx.arc(125, 125, 80, 0, Math.PI * 2, true);
ctx.clip();
ctx.drawImage(avatar, 25, 25, 200, 200);
  
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'vortex.png');
  if (!member.guild.channels.cache.get(memberChannel)) return


 const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")

      .setDescription(
        `<a:gif2:791583030200238110> ${member.user.username} Adlı Gold üye Ayrıldı. <a:gif2:791583030200238110>`
      );
     if (db.has(`üyelikk_${user.id}`)) {
    if (!member.guild.channels.cache.get(memberChannel)) return;
  member.guild.channels.cache.get(memberChannel).send(attachment) 
         member.guild.channels.cache.get(memberChannel).send(embed)
     } else return


}