
const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms');
module.exports = {
    name: 'pre',
    aliases: ['mvip'],
    category: 'bot',

   run: async(client, message, args, ayarlar , prefix , modül) => {
   let no = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'cross');
        const member3 = new Discord.MessageEmbed()
       .setColor("CYAN")
.setDescription(`${no}**HATA**${no} - Sahibim veya Geliştiricim Değilsin`)
     if (!ayarlar.gelistiriciler.includes(message.author.id)) {
      message.channel.send(member3);
      return;
    }
     var generator = require('generate-password');
 
var kod = generator.generate({
    length: 10,
    numbers: true
}); 
    let sure = args[0]
  if(!sure) return message.channel.send(`${no}**HATA**${no} - Bir Süre Belirt`)
     db.set(`kod.${kod}`,ms(sure))
     message.channel.send("Başarılı")
     message.author.send(`\`\`\`${kod}\`\`\``)
  }
}