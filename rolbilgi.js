  
const Discord = require('discord.js');
const client = new Discord.Client()
module.exports = {
    name: 'rolbilgi',
    aliases: [],
    category: 'bot',

    run: (client, m, args, ayarlar, prefix) => {
     let message = m
     const moment = require('moment');
require('moment-duration-format');

    var aylar = {
      "01": "Ocak",
      "02": "Şubat",
      "03": "Mart",
      "04": "Nisan",
      "05": "Mayıs",
      "06": "Haziran",
      "07": "Temmuz",
      "08": "Ağustos",
      "09": "Eylül",
      "10": "Ekim",
      "11": "Kasım",
      "12": "Aralık"
    }
    
    var duration = moment.duration(client.uptime).format(" D [gün] H [saat] m [dakika] s [saniye]")
   let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args.join(" ")) || message.guild.roles.cache.find(rol => rol.name === args.join(" "));
        let tik = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'yes');
      let x = client.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'no');
         var embed = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.avatarURL())
          .setDescription(`Rol Bilgi İçin Bir Rol Etiketlemelisin. Doğru kullanım: **${prefix}rolbilgi @rol**\n`)
          .setColor('RED')
          .setTimestamp()
          .setFooter(`${client.user.tag} | ${prefix}yardım`)
         if (!args[0]) return message.channel.send(embed)
       if(rol === undefined) return message.channel.send(`Hata!
Girdiğiniz rol sunucuda yok!`)
       
          var embed = new Discord.MessageEmbed()
            .addField('Genel Bilgiler', `**İsmi**: ${rol}\n**Role Sahip Kullanıcı(lar)**: ${rol.members.size}\n**İD:** ${rol.id}\n**Oluşturulma Tarihi:** ${moment(rol.createdAt).format('DD')} ${aylar[moment(rol.createdAt).format('MM')]} ${moment(rol.createdAt).format('YYYY HH:mm:ss')}` )
            .addField('Diğer Bilgiler', `**Entegrasyon mu?: ** ${rol.managed ? tik : x}\n**Etiketlenebilir mi?: ** ${rol.mentionable ? tik : x}\n**Pozisyonu: ** ${rol.position}\n**Ayrı Gösteriliyor mu?:** ${rol.hoisted ? tik : x} `)
            .setFooter(`${client.user.username} | ${prefix}yardım`)
            .setTimestamp()
             message.channel.send(embed);
      
       
            
    
  }
    
};