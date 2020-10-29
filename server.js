const { Client, Collection } = require("discord.js");
const Discord = require("discord.js");
const { config } = require("dotenv");
const ayarlar = require("./ayarlar.json");
const db = require("quick.db")
const ms = require("ms")
const app = new Client({
  disableEveryone: true
});

app.commands = new Collection();
app.aliases = new Collection();

config({
  path: __dirname + "/.env"
});

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(app);
});


//  0 proje aç aq
////////--Bot Oynuyor Kısmı--////////
const express = require('express');
const expres = express();
const http = require('http');
expres.get("/", async(request, response) => {
    response.sendStatus(200);

 })
   expres.listen(3000);
   setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 280000);



app.on("ready", () => {
  
app.user.setActivity("p!yardım ProNaX İle Sunucunu Yapılandır")
  console.log(`${app.user.username} Aktif!`);
});
app.on("message", async msg => {
  const request = require("node-superfetch");
  const db = require("quick.db");
  const ms2 = require("parse-ms");
  let timeout = ms("10m"); //süresini dilediğiniz gibi kısaltabilirsiniz.
  let dakdest = ms("1m");
  let i = db.fetch(`pre.${msg.author.id}`);
  if (db.has(`pre.${msg.author.id}`) == true) {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
      let time = ms2(timeout - (Date.now() - dakdest));
    } else {
      if (msg.author.bot) return;
if (msg.content.length > 60) {
      
        var embed = new Discord.MessageEmbed()
          .setAuthor(`ProNaX`,`${msg.author.avatarURL()}`)
          .setDescription(`Hizzaya Geçin! Burada Bir Gold Üye Belirdi! <@${msg.author.id}>`)
          .setColor("GOLD");
       msg.channel.send(embed).then(message => {
          message.delete({timeout: 4000});
       })
      }
    }
       
  } else if (i == undefined) {
  }
  if (!i) return;
});
app.on("message", async m => {
      let mute = db.fetch(`mute.${m.guild.id}.${m.author.id}`)
      if(mute) {
            if (!m.member.hasPermission("MANAGE_GUILD")) {
             
        m.delete()
        m.author.send(`${m.guild.name} Sunucusunda Susturuldun`)
            } }else{
        
      }
       })
app.on("ready", function() {
  app.users.cache.forEach(üye => {
    setInterval(() => {
      let x = db.fetch(`presure.${üye.id}`); // bu sürede bitecek (timestamp)
      let cc = db.has(`presure.${üye.id}`); // bu sürede bitecek (timestamp)
    if(cc === true) {
    if(x < Date.now()) {
   db.delete(`presure.${üye.id}`);
db.delete(`pre.${üye.id}`);
      let embe = new Discord.MessageEmbed() 
.setColor("#FFEE58") 
.setDescription(`\`${üye.tag}\` Premium üyeliği bitti`)
app.channels.cache.get("757551224898846763r").send(embe);

      }
}else{
}    }, ms("3h"))
  })
})

////////--Bot Oynuyor Kısmı--////////
   
app.on("message", async m => {
  let up = app.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'iyi');
      let izin = db.fetch(`levelayar.${m.guild.id}.kanalizin.${m.channel.id}`)
         let log = db.fetch(`levelayar.${m.guild.id}.log`)
         let mesaj = db.fetch(`levelayar.${m.guild.id}.mesaj`)
         let durum = db.fetch(`levelayar.${m.guild.id}.durum`)
        if(!durum) {
          
        }else{
        if(!izin) {
  if (m.channel.type === "dm") return;
  if(m.author.bot) return;  
     
    let xp = db.fetch(`xp.${m.author.id + m.guild.id}`) || 0;
    let lvl = db.fetch(`lvl.${m.author.id + m.guild.id}`) || 0;
 db.add(`xp.${m.author.id + m.guild.id}`, 1)
 db.add(`lvlxp.${m.author.id + m.guild.id}`, 1)
if(xp > lvl * 100) {
 db.add(`lvlxp.${m.author.id + m.guild.id}`, 1)
 db.delete(`xp.${m.author.id + m.guild.id}`)
 db.add(`lvl.${m.author.id + m.guild.id}`, 1)
  if(!mesaj) {
    let embed = new Discord.MessageEmbed()
      .setDescription(`${up} **${m.author} seviye atladın yeni seviyen \`${db.fetch(`lvl.${m.author.id + m.guild.id}`)}\`**`)
m.channel.send(embed)
  }else{
    
  }
  if(log) {
    
    let embed = new Discord.MessageEmbed()
      .setDescription(`${up} **${m.author} seviye atladı yeni seviyesi \`${db.fetch(`lvl.${m.author.id + m.guild.id}`)}\`**`)
app.channels.cache.get(log).send(embed)
  }else{
    
  }
}}}
});
app.on("message", async m => {
  if(m.content === `<@${app.user.id}>`){
    
    let embed = new Discord.MessageEmbed() 
    .setThumbnail(m.author.avatarURL({ dynamic: true, format: 'png', size: 1024 })) 
    .setDescription(`Merhaba!
> Prefixim **->** p!
> Sunucu Sayım **->** ${app.guilds.cache.size}`)

    m.channel.send(embed)
  }
})
app.on("message", async message => {
  const prefix = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  if (message.author.bot) return;
  if (!message.guild) return;

  
    if (!message.content.startsWith(prefix) ) return;
 
  if (!message.member)
    message.member = await message.guild.members.fetch(message);

 const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
let command = app.commands.get(cmd);
  if (!command) command = app.commands.get(app.aliases.get(cmd));

  let modul = require("./modul.js")

  if (command) command.run(app, message, args, ayarlar, `p!` , modul);

});
app.on("message", async message => {
    const prefix = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
 const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
 if(message.content === prefix + "yenile") {
  let no = app.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'cross');
        const member3 = new Discord.MessageEmbed()
       .setColor("CYAN")
.setDescription(`${no}**HATA**${no} - Sahibim veya Geliştiricim Değilsin`)
     if (!ayarlar.gelistiriciler.includes(message.author.id)) {
      message.channel.send(member3);
      return;
    }
    let sure = args[1]
    let komut = args[2]
  if(!sure) return message.channel.send(`${no}**HATA**${no} - Bir Kategori Belirt`)
  if(!komut) return message.channel.send(`${no}**HATA**${no} - Bir Komut Belirt`)
  const { readdirSync } = require("fs");
   const commands = readdirSync(`./komutlar/${sure}/`).filter(file => file.endsWith(".js"));
        
        for (let file of commands) {
       let pull = require(`./komutlar/${sure}/${komut}`);
    
            if (pull.name) {
                app.commands.set(pull.name, pull);
   message.channel.send("Başarılı")
            } else {
    message.channel.send("Başarısız")
           }
  }
 }
})
  const { get } = require("snekfetch");
   const { Canvas } = require('canvas-constructor');
const { loadImage } = require('canvas')
let resim = "https://cdn.discordapp.com/attachments/717087673243795467/718378781882187826/indir_2.jpeg"
app.on("guildMemberAdd", async member => {  
  let fontSize = 50;


  const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 50;

	do {
		ctx.font = `${fontSize -= 7}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};
   let kanal = db.fetch(`hgbb.${member.guild.id}`)
         if(!kanal) return ;
   let gonder = app.channels.cache.get(kanal)
       if(!gonder) return ;
 const Canvas = require('canvas')
    const canvas = Canvas.createCanvas(738,461);
    const ctx = canvas.getContext('2d');
  const background = await Canvas.loadImage(resim);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  let sokuk = app.users.cache.get(member.id)
    const avatar = await Canvas.loadImage(sokuk.avatarURL({format: "png"}));
   // ctx.fillStyle = "rgba(0, 0, 0, 0.27)";
    ctx.fill()
   // ctx.fillRect(10, 10 ,710, 440)  
    ctx.fillStyle = "#fff"
    ctx.font = '60px serif';
    ctx.fillText('Kullanıcı Katıldı!', 140, 360, 500);
   // ctx.fillStyle = "#263238"
    ctx.font = applyText(canvas, `${sokuk.tag}`);
	  ctx.fillText(`${sokuk.tag}`, 200, 430);
	  ctx.font = applyText(canvas, `$sokuk.tag}`);
	  ctx.fillStyle = '#ffffff';
	  ctx.fillText(`${sokuk.tag}`, 200, 430);
    ctx.font = '30pt Impact';
   // ctx.fillStyle = "#263238"
    ctx.fill()
    ctx.beginPath();
    ctx.ellipse(360, 170, 140, 140, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.clip();
    ctx.drawImage(avatar, 220, 20, 290, 290);
   const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "coat-giris.png");
 
gonder.send(attachment);
     
})
app.on("guildMemberRemove", async member => {  
  let fontSize = 50;


  const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 50;

	do {
		ctx.font = `${fontSize -= 7}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};
  let kanal = db.fetch(`hgbb.${member.guild.id}`)
     if(!kanal) return ;
       let gonder = app.channels.cache.get(kanal)
      if(!gonder) return ;
  const Canvas = require('canvas')
    const canvas = Canvas.createCanvas(738,461);
    const ctx = canvas.getContext('2d');
  const background = await Canvas.loadImage(resim);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  let sokuk = app.users.cache.get(member.id)
    const avatar = await Canvas.loadImage(sokuk.avatarURL({format: "png"}));
   // ctx.fillStyle = "rgba(0, 0, 0, 0.27)";
    ctx.fill()
   // ctx.fillRect(10, 10 ,710, 440)  
    ctx.fillStyle = "#fff"
    ctx.font = '60px serif';
    ctx.fillText('Kullanıcı Ayrıldı!', 140, 360, 500);
   // ctx.fillStyle = "#263238"
    ctx.font = applyText(canvas, `${sokuk.tag}`);
	  ctx.fillText(`${sokuk.tag}`, 200, 430);
	  ctx.font = applyText(canvas, `$sokuk.tag}`);
	  ctx.fillStyle = '#ffffff';
	  ctx.fillText(`${sokuk.tag}`, 200, 430);
     ctx.font = '30pt Impact';
   // ctx.fillStyle = "#263238"
    ctx.fill()
    ctx.beginPath();
    ctx.ellipse(360, 170, 140, 140, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.clip();
    ctx.drawImage(avatar, 220, 20, 290, 290);
   const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "coat-cikis.png");
 
      gonder.send(attachment);
     
})
      
app.on("guildMemberAdd",async member => {
  let uye = member.guild.memberCount
  let hedef = db.fetch(`sayac.${member.guild.id}.sayi`)
  let kanal = db.fetch(`sayac.${member.guild.id}.kanal`)
  let kalan = parseInt(member.guild.memberCount) - parseInt(hedef)
 if(!hedef) return ;
  if(!kanal) return ;
  if(uye === hedef) {
    db.delete(`sayac.${member.guild.id}`)
    const embed = new Discord.MessageEmbed()
  .addFields({
    name:`Sonunda ${uye} olduk`,
    value:`${member.user.username} adlı kullanıcı katıldı ve hedef sayımıza ulaştık`
  })
  app.channels.cache.get(kanal).send(embed)
    
  }else{
    const embed = new Discord.MessageEmbed()
  .addFields({
    name:"Birisi Katıldı",
    value:`${member.user.username} adlı kullanıcı katıldı artık ${member.guild.memberCount} kişiyiz ${hedef} kişi olmamıza ${hedef - member.guild.memberCount} kişi kaldı`
  })
  app.channels.cache.get(kanal).send(embed)
  }
})
app.on("guildMemberAdd",async member => {
  let uye = member.guild.memberCount
  let rol = db.fetch(`otorol.${member.guild.id}.rol`)
  let botrol = db.fetch(`otorol.${member.guild.id}.botrol`)
  let kanal = db.fetch(`otorol.${member.guild.id}.kanal`)
   if(!rol) return ;
  if(!kanal) return ;
  if(botrol) {
  if(member.user.bot) {
  member.roles.add(botrol)
  const embed = new Discord.MessageEmbed()
  .addFields({
    name:"Bir Bot Katıldı",
    value:`${member.user.username} sunucumuza katıldı ve ayarlanmış olan rolü verdim sunucu artık ${uye} kişi`
  })
  app.channels.cache.get(kanal).send(embed)
    return;
  }else{
  member.roles.add(rol)
  const embed = new Discord.MessageEmbed()
  .addFields({
    name:"Birisi Katıldı",
    value:`${member.user.username} sunucumuza katıldı ve ayarlanmış olan rolü verdim sunucu artık ${uye} kişi`
  })
  app.channels.cache.get(kanal).send(embed)
return;
  }
  }else{
  member.roles.add(rol)
  const embed = new Discord.MessageEmbed()
  .addFields({
    name:"Birisi Katıldı",
    value:`${member.user.username} sunucumuza katıldı ve ayarlanmış olan rolü verdim sunucu artık ${uye} kişi`
  })
  app.channels.cache.get(kanal).send(embed)
  return;
  }
})
 app.on("guildMemberRemove",async member => {
  let hedef = db.fetch(`sayac.${member.guild.id}.sayi`)
  let kanal = db.fetch(`sayac.${member.guild.id}.kanal`)
  let kalan = parseInt(member.guild.memberCount) - parseInt(hedef)
   if(!hedef) return ;
  if(!kanal) return ;
  const embed = new Discord.MessageEmbed()
  .addFields({
    name:"Birisi Ayrıldı",
    value:`${member.user.username} adlı kullanıcı ayrıldı artık ${member.guild.memberCount} kişiyiz ${hedef} kişi olmamıza ${hedef - member.guild.memberCount} kişi kaldı`
  })
  app.channels.cache.get(kanal).send(embed)
})
   
const reklam = [
        ".com",
        ".net",
        ".xyz",
        ".tk",
        ".pw",
        ".io",
        ".me",
        ".gg",
        "www.",
        "https",
        "http",
        ".gl",
        ".org",
        ".com.tr",
        ".biz",
        "net",
        ".rf",
        ".gd",
        ".az",
        ".party"
      ];
app.on("messageUpdate", async (old, nev) => {
  let hyr = app.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'uyari');
    if (old.content != nev.content) {
    let i = await db.fetch(`reklam.${nev.member.guild.id}.durum`);
    let y = await db.fetch(`reklam.${nev.member.guild.id}.kanal`);
   if (i) {
      
      if (reklam.some(word => nev.content.includes(word))) {
      if (nev.member.hasPermission("BAN_MEMBERS")) return ;
       //if (ayarlar.gelistiriciler.includes(nev.author.id)) return ;
 const embed = new Discord.MessageEmbed() .setColor("#ff7e00") .setDescription(`${hyr} ${nev.author} , **Mesajını Editleyerek Reklam Yapmaya Çalıştı**`)
            .addField("Reklamı",nev)
        
            nev.delete();
            const embeds = new Discord.MessageEmbed() .setColor("#ff7e00") .setDescription(`${hyr} ${nev.author} , **Mesajı Editleyerek Reklam Yapamana İzin Veremem !**`) 
          app.channels.cache.get(y).send(embed)
            nev.channel.send(embeds).then(msg => msg.delete({timeout:5000}));
          
      }
    } else {
    }
    if (!i) return;
  }
});

app.on("message", async msg => {
 let hyr = app.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'uyari');
     
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
         let y = await db.fetch(`reklam.${msg.member.guild.id}.kanal`);
   
    let i = await db.fetch(`reklam.${msg.member.guild.id}.durum`);
          if (i) {
              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                 if (!msg.member.hasPermission("MANAGE_GUILD")) {
                 //  if (!ayarlar.gelistiriciler.includes(msg.author.id)) return ;
     msg.delete({timeout:5000});
                    const embeds = new Discord.MessageEmbed() .setColor("#ff7e00") .setDescription(`${hyr} <@${msg.author.id}> , **Bu Sunucuda Reklam Yapmak Yasak !**`)
      msg.channel.send(embeds).then(msg => msg.delete({timeout: 5000}));
                const embed = new Discord.MessageEmbed() .setColor("#ff7e00") .setDescription(`${hyr} ${msg.author} , **Reklam Yapmaya Çalıştı**`) .addField("Mesajı",msg)
               app.channels.cache.get(y).send(embed)
                  }              
                } catch(err) {
                  console.log(err);
                }
              }
          }
         if(!i) return ;
});


app.on("messageUpdate", async (old, nev) => {
  let hyr = app.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'uyari');
    if (old.content != nev.content) {
    let i = await db.fetch(`yasakli_kelime.${nev.member.guild.id}.durum`);
    let y = await db.fetch(`yasak_kelime.${nev.member.guild.id}.kanal`);
  
      if (i) {
  
const kelimeler = Object.keys(db.fetch(`yasakli_kelime.${nev.member.guild.id}`))
          
      if (kelimeler.some(word => nev.content.includes(word))) {
      if (!nev.member.hasPermission("BAN_MEMBERS")) return ;
       //if (ayarlar.gelistiriciler.includes(nev.author.id)) return ;
                 const embeds = new Discord.MessageEmbed() .setColor("#ff7e00") .setDescription(`${hyr} <@${nev.author.id}> , **Mesajınsa Yasak Kelime Var!**`)
                const embed = new Discord.MessageEmbed() .setColor("#ff7e00") .setDescription(`${hyr} ${nev.author} , **Yasaklı Kelime Kullanmaya Çalıştı**`) .addField("Mesajı",nev)
      
            nev.delete();
            nev.channel.send(embeds).then(msg => msg.delete({timeout:5000}));
         if(y) {
            app.channels.cache.get(y).send(embed)
        
         }
      }
    } else {
    }
    if (!i) return;
  }
});



app.on("message", async msg => {
 let hyr = app.guilds.cache.get("715230848885981245").emojis.cache.find(emoji => emoji.name === 'uyari');
     
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
         let y = await db.fetch(`yasak_kelime.${msg.member.guild.id}.kanal`);
   
    let i = await db.fetch(`yasakli_kelime.${msg.member.guild.id}`);
          if (i) {
   
const kelimeler =  Object.keys(db.fetch(`yasakli_kelime.${msg.member.guild.id}`))
              if (kelimeler.some(word => msg.content.includes(word))) {
           try {
     
                 if (!msg.member.hasPermission("MANAGE_GUILD")) {
                 //  if (!ayarlar.gelistiriciler.includes(msg.author.id)) return ;
     msg.delete({timeout:5000});
                    const embeds = new Discord.MessageEmbed() .setColor("#ff7e00") .setDescription(`${hyr} <@${msg.author.id}> , **Mesajınsa Yasak Kelime Var!**`)
      msg.channel.send(embeds).then(msg => msg.delete({timeout: 5000}));
                const embed = new Discord.MessageEmbed() .setColor("#ff7e00") .setDescription(`${hyr} ${msg.author} , **Yasaklı Kelime Kullanmaya Çalıştı**`) .addField("Mesajı",msg)
                                
           if(y) {
            app.channels.cache.get(y).send(embed)
           }
         }     } catch(err) {
                  console.log(err);
                }
              }
          }
         if(!i) return ;
});

app.on("message", async message => {
  if (message.content === "c!katil") {
    app.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

app.on("message", async message => {
  if (message.content === "c!ayril") {
    app.emit(
      "guildMemberRemove",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

app.on("guildCreate", guild => {
  let kanal = guild.channels.cache.find(r => r.id === "757571467327176734")
  const embed = new Discord.MessageEmbed()
  .setColor("#FFD600")
  .setTitle(`${guild.name} Adlı sunucuya eklendim!`)
  .setDescription(`
  - | **Sunucu Adı**: ${guild.name}
  - | **Sunucu Sahip Bilgileri**: İD: ${guild.ownerID} - Sahip: ${guild.owner} - İsim: ${guild.owner.name}
  - | **Sunucu Üye Sayısı**: ${guild.memberCount}
  - | **Sunucu Kanal Sayısı**: ${guild.channels.cache.size}
  - | **Sunucu Rol Sayısı**: ${guild.roles.cache.size}
  - | Bünyemize **1** Sunucu ve **${guild.memberCount}** Üye Katıldı! 
  - | Toplamda **${app.guilds.cache.size}** Sunucu ve **${app.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** Üye Olduk!
  `)
  .setFooter(app.user.username, app.user.avatarURL())
  kanal.send(embed)
})


app.on("guildDelete", guild => {
  let kanal = guild.channels.cache.find(r => r.id === "757571467327176734")
  const embed = new Discord.MessageEmbed()
  .setColor("#FFD600")
  .setTitle(`${guild.name} Adlı sunucudan atıldım!`)
  .setDescription(`
  - | **Sunucu Adı**: ${guild.name}
  - | **Sunucu Sahip Bilgileri**: İD: ${guild.ownerID} - Sahip: ${guild.owner} - İsim: ${guild.owner.name}
  - | **Sunucu Üye Sayısı**: ${guild.memberCount}
  - | **Sunucu Kanal Sayısı**: ${guild.channels.cache.size}
  - | **Sunucu Rol Sayısı**: ${guild.roles.cache.size}
  - | Bünyemizden **1** Sunucu ve **${guild.memberCount}** Üye Ayrıldı! 
  - | Toplamda **${app.guilds.cache.size}** Sunucu ve **${app.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** Üye Kaldık!
  `)
  .setFooter(app.user.username, app.user.avatarURL())
  kanal.send(embed)
})




app.login(ayarlar.token);
console.log("Komutlar Yüklendi Bot Aktif")
console.log("Bota Bağlanılıyor")
console.log("En Son Yazılan Bot İstatistikleri")
console.log("Sunucu Sayısı 223")
console.log("Kullanıcı Sayısı 382.467")
console.log("Yapımcı Yiğit#2133")
  
