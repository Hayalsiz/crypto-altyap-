
const Discord = require('discord.js');
module.exports = {
    name: 'yetkilerim',
    aliases: ['yetkileri'],
    category: 'bot',

    run: (client, msg, args, ayarlar) => {
   const { stripIndents } = require('common-tags');


  let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    let x12;
        let tik = client.guilds.cache.get("717085525147779153").emojis.cache.find(emoji => emoji.name === 'evet');
      let no = client.guilds.cache.get("717085525147779153").emojis.cache.find(emoji => emoji.name === 'no');
let user = msg.mentions.users.first() || msg.author
    //yönetici
    if (msg.guild.member(user).hasPermission("ADMINISTRATOR")) x = tik
    if (!msg.guild.member(user).hasPermission("ADMINISTRATOR")) x = no
   
    //Denetim kaydı
    if (msg.guild.member(user).hasPermission("VIEW_AUDIT_LOG")) x2 = tik
    if (!msg.guild.member(user).hasPermission("VIEW_AUDIT_LOG")) x2 = no
   
    //Sunucuyu yönet
    if (msg.guild.member(user).hasPermission("MANAGE_GUILD")) x3 = tik
    if (!msg.guild.member(user).hasPermission("MANAGE_GUILD")) x3 = no
   
    //Rolleri yönet
    if (msg.guild.member(user).hasPermission("MANAGE_ROLES")) x4 = tik
    if (!msg.guild.member(user).hasPermission("MANAGE_ROLES")) x4 = no
   
    //Kanalları yönet
    if (msg.guild.member(user).hasPermission("MANAGE_CHANNELS")) x5 = tik
    if (!msg.guild.member(user).hasPermission("MANAGE_CHANNELS")) x5 = no
   
    //üyeleri at
    if (msg.guild.member(user).hasPermission("KICK_MEMBERS")) x6 = tik
    if (!msg.guild.member(user).hasPermission("KICK_MEMBERS")) x6 = no
   
    //üyeleri yasakla
    if (msg.guild.member(user).hasPermission("BAN_MEMBERS")) x7 = tik
    if (!msg.guild.member(user).hasPermission("BAN_MEMBERS")) x7 = no
   
    //mesajları yönet
    if (msg.guild.member(user).hasPermission("MANAGE_MESSAGES")) x8 = tik
    if (!msg.guild.member(user).hasPermission("MANAGE_MESSAGES")) x8 = no
   
    //kullanıcı adlarını yönet
    if (msg.guild.member(user).hasPermission("MANAGE_NICKNAMES")) x9 = tik
    if (!msg.guild.member(user).hasPermission("MANAGE_NICKNAMES")) x9 = no
   
    //emojileri yönet
    if (msg.guild.member(user).hasPermission("MANAGE_EMOJIS")) x10 = tik
    if (!msg.guild.member(user).hasPermission("MANAGE_EMOJIS")) x10 = no
   
    //webhookları yönet
    if (msg.guild.member(user).hasPermission("MANAGE_WEBHOOKS")) x11 = tik
    if (!msg.guild.member(user).hasPermission("MANAGE_WEBHOOKS")) x11 = no

    //kullanıcının adı
    if (msg.member.id) x12 = "Adlı kullanıcının yetkisi gösterildi."
    if (!msg.member.id) x12 = "Adlı kullanıcının yetkisi gösterildi."

   
   const yardim = new Discord.MessageEmbed()
   .setAuthor(client.user.username,client.user.avatarURL())
   .setDescription(
stripIndents`
   ** 
${x} • Yönetici
${x2} • Denetim Kaydını Görüntüle
${x3} • Sunucuyu Yönet
${x4} • Rolleri Yönet
${x5} • Kanalları Yönet
${x6} • Üyeleri At
${x7} • Üyeleri Yasakla
${x8} • Mesajları Yönet
${x9} • Kullanıcı Adlarını Yönet
${x10} • Emojileri Yönet
${x11} • Webhook'ları Yönet
**
${user} ${x12} 

   
`)
    msg.channel.send(yardim)

}
}