module.exports = {
  
  name: 'reklamlog',
  aliases: ["reklam-log"],
  category: 'moderaditon',
  
  run: (app, m, args) => {
        let db = require("quick.db")
        let Discord = require("discord.js")
    let no = app.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'cross');
    let o = app.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'tik');
    let reklam = db.fetch(`reklam.${m.guild.id}.durum`)
    let vip = db.fetch(`pre.${m.author.id}`)
 if(!vip) return m.channel.send(`${no}**HATA**${no} - Premium Üye Değilsin`)
  const member3 = new Discord.MessageEmbed()
     .setColor("CYAN")
.setDescription(`${no}**HATA**${no} - Bu Sunucuda Yetkili Değilsin`)
        if (!m.member.permissions.has("MANAGE_MESSAGES")) return m.channel.send(member3)
    const member = new Discord.MessageEmbed()
     .setColor("CYAN")
.setDescription(`${no}**HATA**${no} - Bir Kanal Etiketle`)
      if(reklam) {
        let kanal = m.mentions.channels.first()
        if(!kanal) return m.channel.send(member)
      db.set(`reklam.${m.guild.id}.kanal`,kanal.id)
      m.channel.send(`${o}**Başarılı ile reklam log kanalı ayarlandı**${o}`).then(l => {
      l.delete({timeout: 5000})
    })
    }else{
     m.channel.send(`${o}**Reklam engel açık değil**${o}`).then(l => {
      l.delete({timeout: 5000})
    })
    }
    }
}