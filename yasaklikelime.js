module.exports = {
  
  name: 'yasaklıkelime',
  aliases: ["yasaklı-kelime"],
  category: 'moderaditon',
  
  run: (app, m, args) => {
        let db = require("quick.db")
        let Discord = require("discord.js")
    let no = app.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'cross');
    let o = app.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'tik');
  const member3 = new Discord.MessageEmbed()
     .setColor("CYAN")
.setDescription(`${no}**HATA**${no} - Bu Sunucuda Yetkili Değilsin`)
     if (!m.member.permissions.has("MANAGE_ROLES")) return m.channel.send(member3)
      
const kelimeler = db.fetch(`yasakli_kelime.${m.member.guild.id}`)
if(args[0] === "çıkar") {
  if(kelimeler) {
    if(!args[1]) return  m.channel.send(`${no}**Bir Kelime Gir**${no}`).then(l => {
      l.delete({timeout: 5000})
    })
    
const x = db.fetch(`yasakli_kelime.${m.member.guild.id}.${args[1]}`)
    if(!x) return  m.channel.send(`${no}**Kelime Yasaklanmamış**${no}`).then(l => {
      l.delete({timeout: 5000})
    })
 
    db.delete(`yasakli_kelime.${m.guild.id}.${args[1]}`)
     m.channel.send(`${o}**Başarılı ile kelime kaldirildi**${o}`).then(l => {
      l.delete({timeout: 5000})
    })
  }else{
     m.channel.send(`${no}**Daha Bir Kelime Eklemedin**${no}`).then(l => {
      l.delete({timeout: 5000})
    })
    
  }
    }else if(args[0] === "ekle") {
      
    if(!args[1]) return  m.channel.send(`${no}**Bir Kelime Gir**${no}`).then(l => {
      l.delete({timeout: 5000})
    })
    
      db.set(`yasakli_kelime.${m.guild.id}.${args[1]}`,true)
      m.channel.send(`${o}**Başarılı ile kelime eklendi**${o}`).then(l => {
      l.delete({timeout: 5000})
    })
        }else if(args[0] === "liste") {
          if(kelimeler) {
  const embed = new Discord.MessageEmbed()
  .setTitle("Kelime Liste")
  .setDescription(`**${Object.keys(db.fetch(`yasakli_kelime.${m.guild.id}`)).join("\n")}**`)
  m.channel.send(embed)
          }else{
               m.channel.send(`${no}**Daha Bir Kelime Eklemedin**${no}`).then(l => {
      l.delete({timeout: 5000})
    })
          }
          }else return  m.channel.send(`${no}**Bir Secenek Gir[\`çıkar\`,\`liste\`,\`ekle\`]**${no}`).then(l => {
      l.delete({timeout: 5000})
    })
    
    }
}