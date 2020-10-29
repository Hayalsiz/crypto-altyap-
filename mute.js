module.exports = {
  
  name: 'mute',
  aliases: 'yasakla',
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
 .setDescription(`${no}**HATA**${no} - Birisini Etiketlermisin`)
 
      const s = new Discord.MessageEmbed()
    .setColor("CYAN")
 .setDescription(`${yes}**BAŞARILI**${yes} - Muteledim`)
  
const err = new Discord.MessageEmbed()
    .setColor("CYAN")
 .setDescription(`${no}**HATA**${no} - Zaten mute yemis ki`)
 
        if (!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send(member3)
    let rol = message.mentions.users.first()
    if(!rol) return message.channel.send(hata)
    let mute = db.fetch(`mute.${message.guild.id}.${rol.id}`)
    if(!mute) {
       db.set(`mute.${message.guild.id}.${rol.id}`,true)
    message.channel.send(s)
   }else{
     message.channel.send(err)
   }
  }
}