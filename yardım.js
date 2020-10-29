  
const Discord = require('discord.js');
const client = new Discord.Client()
module.exports = {
    name: 'yardım',
    aliases: ['help'],
    category: 'bot',
    run: (client, m, args, ayarlar, prefix) => {
          let x = Date.now() - m.createdTimestamp
let s = args.join(" ")
//** ▸ ${prefix} =** 
if(s === "genel") {
   const yardim = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
   .setDescription(`** ▸ ${prefix}animepp =** Anime ppler atar
** ▸ ${prefix}kullanıcıbilgi =** Kullanıcı Profilini Gösterir
** ▸ ${prefix}sunucubilgi =** Sunucu Hakkında Bilgi Verir
** ▸ ${prefix}bilgi =** Botun bilgilerini gösterir
** ▸ ${prefix}ping =** Botun Pingini Gösterir
** ▸ ${prefix}tavsiye =** Bota tavsiyede bulunursunuz
** ▸ ${prefix}davet =** Botun linkleri
** ▸ ${prefix}avatar =** Avatarınızı atar
** ▸ ${prefix}kodkullan =** Premium kod kullanırsınız
** ▸ ${prefix}yetkilerim =** Yetkilerini gösterir
** ▸ ${prefix}rolbilgi =** Rol hakkında bilgi verir
** ▸ ${prefix}ayarlar =** Ayarlar menüsü
** ▸ ${prefix}presurem =** Premium süren`)
 .addField(`Yardımcı Bağlantılar`," [Discord](https://discord.gg/5ZFbZ7G) **|** [Beni ekle](https://discord.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8) **|** [WebSite](https://eklecryptobot.com/) ")
  .setFooter(`Toplam ${client.guilds.cache.size} sunucuya ${client.commands.size} komut ile hizmet ediyorum`,m.author.avatarURL())
    m.channel.send(yardim)
}else if(s === "yetkili") {
   const yardim = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
   .setDescription(`** ▸ ${prefix}kick =** Sunucudan belirtilen kişiyi atar
** ▸ ${prefix}ban =** Sunucudan belirtilen kişiyi banlar
** ▸ ${prefix}otorol =** Sunucuya girene rol verir
** ▸ ${prefix}sayac =** Sunucuya giren çıkanları belli kanala atar
** ▸ ${prefix}sil =** Belirlenen miktar kadar mesajı siler
** ▸ ${prefix}reklam-engel =** Reklam engelleme sistemi
** ▸ ${prefix}otorol-kapat =** Otorolü kapatır
** ▸ ${prefix}sayac-kapat =** Sayaçı kapatır
** ▸ ${prefix}oylama =** Oylama yaparsiniz
** ▸ ${prefix}yasaklıkelime =** Yasaklı Kelime Sistemi.
** ▸ ${prefix}mute =** o kisiye o sunucuda susuturursunuz
** ▸ ${prefix}unmute =** o kişinin susturmasıni kaldırırsınız`)
   .addField(`Yardımcı Bağlantılar`," [Discord](https://discord.gg/5ZFbZ7G) **|** [Beni ekle](https://discord.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8) ")
  .setFooter(`Toplam ${client.guilds.cache.size} sunucuya ${client.commands.size} komut ile hizmet ediyorum`,m.author.avatarURL())
    m.channel.send(yardim)

}else if(s === "efekt") {
   const yardim = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
   .setDescription(`** ▸ ${prefix}wasted =** Avatara wasted efekti ekler
** ▸ ${prefix}dyno =** Avatarı dyno gibi yapar
** ▸ ${prefix}rainbow =** Avatarı renklendirir
** ▸ ${prefix}snow =** Avatara kar ekler
** ▸ ${prefix}thuglife =** Avatara thuglife efekti yapar
** ▸ ${prefix}heart =** Avatara kalp efekti uygular`)
   .addField(`Yardımcı Bağlantılar`," [Discord](https://discord.gg/5ZFbZ7G) **|** [Beni ekle](https://discord.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8) ")
  .setFooter(`Toplam ${client.guilds.cache.size} sunucuya ${client.commands.size} komut ile hizmet ediyorum`,m.author.avatarURL())
    m.channel.send(yardim)

}else if(s === "premium") {
   const yardim = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
   .setDescription(`**Premium Özellikler**
**-** Tavsiyelerinizin direk sahibe dm yoluyla gitmesi
**-** Süreli özel mesaj
**Premium Komutlar**
** ▸ ${prefix}yaz =** Bot ile yazı yazarsın
** ▸ ${prefix}reklamlog =** Reklam yapanı loga atar
** ▸ ${prefix}bototorol =** Sunucuya giren botlara rol verir
`)
   .addField(`Yardımcı Bağlantılar`," [Discord](https://discord.gg/5ZFbZ7G) **|** [Beni ekle](https://discord.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8) ")
  .setFooter(`Toplam ${client.guilds.cache.size} sunucuya ${client.commands.size} komut ile hizmet ediyorum`,m.author.avatarURL())
    m.channel.send(yardim)
}else if(s === "eğlence") {
   const yardim = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
   .setDescription(`** ▸ ${prefix}vur =** Belirtilen kişiye vurur
** ▸ ${prefix}aşkölçer =** Aşkına bakmaya hazırmısın?
** ▸ ${prefix}fbi =** Fbi open the door
** ▸ ${prefix}sigara =** Çek bir sigara
** ▸ ${prefix}dünya =** Dünyamız
** ▸ ${prefix}konuştur =** Bot senin için konuşur
`)
   .addField(`Yardımcı Bağlantılar`," [Discord](https://discord.gg/5ZFbZ7G) **|** [Beni ekle](https://discord.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8) ")
  .setFooter(`Toplam ${client.guilds.cache.size} sunucuya ${client.commands.size} komut ile hizmet ediyorum`,m.author.avatarURL())
    m.channel.send(yardim)
}else if(s === "level") {
   const yardim = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
   .setDescription(`** ▸ ${prefix}level =** Levelinizi gösterir
** ▸ ${prefix}liderlik =** Level sıralamasını gösterir
** ▸ ${prefix}lvl ayar =** Level sistemini açıp kapatır
** ▸ ${prefix}lvl logkanal =** Biri seviye atlayınca belirlenen kanala atar
** ▸ ${prefix}lvl kanalizin =** Belirtilen kanalda level almayı kapatır açar
** ▸ ${prefix}lvl mesaj =** Level Atladı Yazısını Açar Kapatır`)
   .addField(`Yardımcı Bağlantılar`," [Discord](https://discord.gg/5ZFbZ7G) **|** [Beni ekle](https://discord.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8) ")
   .setFooter(`Toplam ${client.guilds.cache.size} sunucuya ${client.commands.size} komut ile hizmet ediyorum`,m.author.avatarURL())
   m.channel.send(yardim)
}else{
    const yardim = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
   .setDescription(`${prefix}yardım genel → Genel Komutlar
${prefix}yardım yetkili → Yetkili Komutları
${prefix}yardım efekt → Efekt Komutları
${prefix}yardım premium → Premium Komutları
${prefix}yardım level → Level Komutları
${prefix}yardım eğlence → Eğlence Komutları
`)
   .addField(`Yardımcı Bağlantılar`," [Discord](https://discord.gg/5ZFbZ7G) **|** [Beni ekle](https://discord.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8) ")
  .setFooter(`Toplam ${client.guilds.cache.size} sunucuya ${client.commands.size} komut ile hizmet ediyorum`,m.author.avatarURL())
    m.channel.send(yardim)
}
    }
};