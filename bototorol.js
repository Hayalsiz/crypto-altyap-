module.exports = {
  
  name: 'bototorol',
  aliases: 'yasakkla',
  category: 'moderaditon',
  
  run: (client, message, args) => {
    const db = require("quick.db")
    let no = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'cross');
        let yes = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'tik');
     let vip = db.fetch(`pre.${message.author.id}`)
 if(!vip) return message.channel.send(`${no}**HATA**${no} - Premium Üye Değilsin`)
    let Discord = require("discord.js")
      const member3 = new Discord.MessageEmbed()
       .setColor("CYAN")
  .setDescription(`${no}**HATA**${no} - Bu Sunucuda Yetkili Değilsin`)
  
      const hata = new Discord.MessageEmbed()
    .setColor("CYAN")
 .setDescription(`${no}**HATA**${no} - Bir Rol Etiketlermisin`)
 
      const err = new Discord.MessageEmbed()
   .setColor("CYAN")
  .setDescription(`${no}**HATA**${no} - İlk önce otorol ayarla`)
      const s = new Discord.MessageEmbed()
    .setColor("CYAN")
 .setDescription(`${yes}**BAŞARILI**${yes} - bototorol Başarı İle Ayarlandı`)
  
        if(!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send(member3)
    let rol = message.mentions.roles.first()
    let kanal = db.fetch(`otorol.${message.guild.id}`)
    if(!rol) return message.channel.send(hata)
    if(!kanal) return message.channel.send(err)
    db.set(`otorol.${message.guild.id}.botrol`,rol.id)
    message.channel.send(s)
   }
}