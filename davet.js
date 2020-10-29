  
const Discord = require('discord.js');
module.exports = {
    name: 'davet',
    aliases: ['iletisim'],
    category: 'bot',

    run: (client, message, args, ayarlar) => {
    let owner = client.users.cache.get(ayarlar.sahip);
      const a = new Discord.MessageEmbed()
      .setAuthor(client.user.username,client.user.avatarURL())
 .setDescription(`**
[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=706952577560084611&scope=bot&permissions=8)
[Bot Destek Sunucusu](https://discord.gg/5ZFbZ7G)


**`)
       .setFooter(`Herhangi bir sorunda sunucumuza gelip ${owner.tag} a sorabilirsiniz`)
   message.channel.send(a)
       }
};