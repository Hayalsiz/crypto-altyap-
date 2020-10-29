module.exports = {
  
  name: 'reklamengel',
  aliases: ["reklam-engel"],
  category: 'moderaditon',
  
  run: (app, m, args) => {
        let db = require("quick.db")
        let Discord = require("discord.js")
    let no = app.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'cross');
    let o = app.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'tik');
    let reklam = db.fetch(`reklam.${m.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor("CYAN")
.setDescription(`${no}**HATA**${no} - Bu Sunucuda Yetkili Değilsin`)
        if (!m.member.permissions.has("MANAGE_MESSAGES")) return m.channel.send(member3)
      if(reklam) {
      db.delete(`reklam.${m.guild.id}`)
      m.channel.send(`${o}**Başarılı ile reklam engel kapandı**${o}`).then(l => {
      l.delete({timeout: 5000})
    })
    }else{
      db.set(`reklam.${m.guild.id}.durum`,true)
      m.channel.send(`${o}**Başarılı ile reklam engel açıldı**${o}`).then(l => {
      l.delete({timeout: 5000})
    })
    }
    }
}