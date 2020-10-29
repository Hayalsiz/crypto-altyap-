  
const Discord = require('discord.js');
module.exports = {
    name: 'oylama',
    aliases: [],
    category: 'bot',

    run: (client, message, args, ayarlar) => {
     let no = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'cross');
        let yes = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'tik');
   const member3 = new Discord.MessageEmbed()
       .setColor("CYAN")
  .setDescription(`${no}**HATA**${no} - Bu Sunucuda Yetkili Değilsin`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
   if(!args[0]) return message.channel.send(`${no} Hata ${no} - Bir Oylama Yazısı Yaz`)
      message.delete()
      const a = new Discord.MessageEmbed()
  .setDescription(`\`\`\`${args.join(" ")}\`\`\`

**
Evet ise :: ${yes}
Hayır ise :: ${no}
**
`)
       .setFooter(`Crypto Bot Oylama!`)
   message.channel.send(a).then(x => {
     x.react(yes)
     x.react(no)
   })
      message.channel.send("@everyone").then(a => a.delete())
       }
};