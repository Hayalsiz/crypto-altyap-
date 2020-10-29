const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  
  name: 'kodkullan',
  aliases: 'animev-pp',
  category: 'genel',
  
  run: async(client, m, args, ayarlar , prefix) => {
    let x = args[0]
        let embed = new Discord.MessageEmbed() .setColor("#FFD600") .setTimestamp() .setThumbnail(m.guild.iconURL({ dynamic: true, format: 'png', size: 1024 }))
    .setTitle(`Hata`)
    .setDescription(`
\`Bir Premium Kodu Girmemişsin\`
`)      
        let embed2 = new Discord.MessageEmbed() .setColor("#FFD600") .setTimestamp() .setThumbnail(m.guild.iconURL({ dynamic: true, format: 'png', size: 1024 }))
    .setTitle(`Hata`)
    .setDescription(`
\`Girdigin kod kullanılmış veya geçersiz\`
`)
        let embed3 = new Discord.MessageEmbed() .setColor("#FFD600") .setTimestamp() .setThumbnail(m.guild.iconURL({ dynamic: true, format: 'png', size: 1024 }))
    .setTitle(`Başarılı`)
    .setDescription(`
\`Başarıyla premium üye oldun\`
`)
  
    if(!x) return m.channel.send(embed)
    let kod = db.fetch(`kod.${x}`)
   let pre= db.fetch(`presure.${m.author.id}`)
    if(!kod) return m.channel.send(embed2)
    if(pre) {
    db.add(`presure.${m.author.id}`,kod)
    }else{
    db.add(`presure.${m.author.id}`,kod + Date.now())
      
    }db.set(`pre.${m.author.id}`,true)
    db.delete(`kod.${x}`)
      const moment = require("moment");
    require("moment-duration-format");
    const sure = moment
      .duration(db.fetch(`presure.${m.author.id}`) - Date.now())
      .format(" D [gün], H [saat], m [dakika], s [saniye]");
        let embed4 = new Discord.MessageEmbed() .setColor("#FFD600") .setTimestamp() .setThumbnail(m.guild.iconURL({ dynamic: true, format: 'png', size: 1024 }))
    .setTitle("Başarılı")
    .setDescription(`
\`${m.author.tag}\` taglı kullanıcı \`${x}\` kodunu kullanarak \`${sure}\` premium üye oldu
`)  
        m.channel.send(embed3)
        client.channels.cache.get("722534434972237856").send(embed4)
}}