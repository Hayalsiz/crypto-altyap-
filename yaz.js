  
const Discord = require('discord.js');
module.exports = {
    name: 'yaz',
    aliases: [],
    category: 'bot',

    run: (client, m, args) => {
            let tik = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'tik');
      let no = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'cross');
    const db = require("quick.db")
  let vip = db.fetch(`pre.${m.author.id}`)
   if(!vip) return m.channel.send(`${no}**HATA**${no} - Premium Üye Değilsin`)
let sec = args[0]
let yazi = args.slice(1)
if(sec === "yazı") {
  if(!yazi) return m.channel.send(`${no} **Hata** ${no} - Ne Yazıcam?`)
  m.delete()
  m.channel.send(yazi.join(" "))
}else if(sec === "embed") {
  if(!yazi) return m.channel.send(`${no} **Hata** ${no} - Ne Yazıcam?`)
    const yardim = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
  .setDescription(yazi.join(" "))
    m.delete()
    m.channel.send(yardim)
}else{
  m.delete()
  m.channel.send(`${no} **Hata** ${no} - Bir Seçenek Girermisin [\`embed\`,\`yazı\`]`).then(a => {
    a.delete({timeout: 2500})
  })
}
    //
  //m.channel.send(`${no} **Hata** ${no} - `)
    }
};