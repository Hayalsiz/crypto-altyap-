module.exports = {
  
  name: 'otorol',
  aliases: 'yasahkla',
  category: 'moderaditon',
  
  run: (client, message, args) => {
    const db = require("quick.db")
    let Discord = require("discord.js")
      let no = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'cross');
        let yes = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'tik');
      const member3 = new Discord.MessageEmbed()
       .setColor("CYAN")
  .setDescription(`${no}**HATA**${no} - Bu Sunucuda Yetkili Değilsin`)
  
      const hata = new Discord.MessageEmbed()
    .setColor("CYAN")
 .setDescription(`${no}**HATA**${no} - Bir Rol Etiketlermisin`)
 
      const err = new Discord.MessageEmbed()
   .setColor("CYAN")
  .setDescription(`${no}**HATA**${no} - Bir Kanal Etiketlermisin?`)
      const s = new Discord.MessageEmbed()
    .setColor("CYAN")
 .setDescription(`${yes}**BAŞARILI**${yes} - Otorol Başarı İle Ayarlandı`)
  
        if (!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send(member3)
    let rol = message.mentions.roles.first()
    let kanal = message.mentions.channels.first()
    if(!rol) return message.channel.send(hata)
    if(!kanal) return message.channel.send(err)
    db.set(`otorol.${message.guild.id}.rol`,rol.id)
    db.set(`otorol.${message.guild.id}.kanal`,kanal.id)
    message.channel.send(s)
   }
}