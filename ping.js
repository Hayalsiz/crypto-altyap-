  
const Discord = require('discord.js');
module.exports = {
    name: 'ping',
    aliases: ['p'],
    category: 'bot',

    run: (client, message, args) => {
            let iyi = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'iyi');
      let kotu = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'kotu');

          let durum = ""
    if(700 > client.ws.ping) {
      durum = `(${iyi})`
    }else{
      durum = `(${kotu})`
    }
    let x = Date.now() - message.createdTimestamp
    let d = ""
    if(700 > x) {
      d = `(${iyi})`
    }else{
      d = `(${kotu})`
    }
   let embed = new Discord.MessageEmbed()
      .setTitle(`Ölçümler`)
      .addFields({
        name:"Pingim",
   value:client.ws.ping + "ms" + durum
      },
                 {
        name:"Mesaj Gecikmem",
   value:x+"ms"+d
      }
                 )
        message.channel.send(embed)
    }
};