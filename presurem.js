const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  
  name: 'presurem',
  aliases: 'anime-php',
  category: 'genel',
  
  run: async(client, m, args, ayarlar , prefix) => {
   let pre= db.fetch(`presure.${m.author.id}`)
      const moment = require("moment");
    require("moment-duration-format");
    const sure = moment
      .duration(db.fetch(`presure.${m.author.id}`) - Date.now())
      .format(" D [gün], H [saat], m [dakika], s [saniye]");
        let embed4 = new Discord.MessageEmbed() .setColor("#FFD600") .setTimestamp() .setThumbnail(m.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setTitle("Başarılı")
    .setDescription(`
${sure}
`)  
        m.channel.send(embed4)
  }
}