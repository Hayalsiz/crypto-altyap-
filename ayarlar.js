const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  
  name: 'ayarlar',
  aliases: 'anime7-pp',
  category: 'genel',
  
  run: async(client, message, args, ayarlar , prefix , modül) => {
    let iyi = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'iyi');
      let kotu = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'kotu');
      
    let reklam = ""
    let otorol = ""
    let hgbb = ""
    let bototorol = ""
    let sayac = ""
    if(db.fetch(`reklam.${message.guild.id}`)) { 
      reklam = "açık"
    }else{
      reklam = "kapalı"
    }
    if(db.fetch(`otorol.${message.guild.id}`)) { 
    otorol = message.guild.roles.cache.get(db.fetch(`otorol.${message.guild.id}.rol`)).name + "|" + client.channels.cache.get(db.fetch(`otorol.${message.guild.id}.kanal`)).name
    }else{
      otorol = "p!otorol"
    }   
    if(db.fetch(`hgbb.${message.guild.id}`)) { 
    hgbb = client.channels.cache.get(db.fetch(`hgbb.${message.guild.id}`)).name
    }else{
    hgbb = "p!hgbb"
    }   
    if(db.fetch(`otorol.${message.guild.id}.botrol`)) { 
     bototorol = message.guild.roles.cache.get(db.fetch(`otorol.${message.guild.id}.botrol`)).name
    }else{
    bototorol = "p!bototorol"
    }
    if(db.fetch(`sayac.${message.guild.id}`)) { 
     sayac = db.fetch(`sayac.${message.guild.id}.sayi`)+ "|" + client.channels.cache.get(db.fetch(`sayac.${message.guild.id}.kanal`)).name
    }else{
      sayac = "p!sayac"
    }
    const embed = new Discord.MessageEmbed()
    .setTitle("ProNaX Bot Ayarlar")
    .addField("Reklam Engel",`\`${reklam}\``,{inline:true})
    .addField("Otorol",`\`${otorol}\``)
    .addField("Bototorol",`\`${bototorol}\``)
    .addField("Sayaç",`\`${sayac}\``)
    .addField("Hgbb",`\`${hgbb}\``)
    message.channel.send(embed)
}}