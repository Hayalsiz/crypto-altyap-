
module.exports = {
  
  name: 'animepp',
  aliases: 'anime-pp',
  category: 'genel',
  
  run: async(app, message, args) => {
  let resimler = [ "https://i.pinimg.com/564x/7a/68/6a/7a686a7b9ada3a5fe6c76bbf2a5488e2.jpg",
  "https://i.pinimg.com/236x/97/89/69/9789699ba44df7283e031f9f897f419d.jpg",
  "https://img.utdstc.com/icons/anime-stickers-android.png:225",
  "https://static.zerochan.net/Mokuzu.full.930151.jpg",
  "https://i.pinimg.com/564x/35/94/66/359466aa75d87c36e3315e9cd5bb3384.jpg",
  "https://i.pinimg.com/236x/d0/55/d4/d055d45e53415c48b4739faed0f51dbc.jpg",
  "https://i.pinimg.com/236x/c2/65/68/c26568af5f30ee14ccef3f78eaa79c2c.jpg",
  "https://i.pinimg.com/originals/2b/82/f9/2b82f961d9dde9c116c13e8aea8eb017.jpg",
  "https://i.pinimg.com/736x/9e/d7/8c/9ed78c2664874d88a717c4eaa4f2e6c2.jpg",
  "https://i.pinimg.com/474x/ea/6f/ef/ea6fefc7e2b7b016a944b4534c522b43.jpg",
  "https://i.pinimg.com/564x/96/9c/2b/969c2b46d77f4fa2e8bceb4c2e39f7da.jpg",
  "https://i.pinimg.com/originals/12/36/59/123659381d2f0fd574c799aa754d6b5a.jpg",
  "https://i.pinimg.com/originals/ed/f2/71/edf271dca79b0b1a34d658244078bae1.jpg",
  "https://i.pinimg.com/474x/21/67/4f/21674fc27a2d4076c46b2bdeba98f941.jpg",
  "https://i.pinimg.com/736x/75/70/18/757018dcf87d9012dd3b0e9d19703913.jpg",
  "https://i.pinimg.com/474x/0c/bb/4f/0cbb4f1b566f5d03fff36ec24be097d0.jpg",
  "https://i.pinimg.com/236x/01/d3/7b/01d37b110ed73f4086653ce3283cffbb.jpg",
  "https://cdn.discordapp.com/attachments/714211945212936304/714497685926707860/bdaf8baee44e8af74f1fa052daf0949d.jpg",
  "https://cdn.discordapp.com/attachments/714211945212936304/714239816317009920/91e4bab3dec5b955951919eb4a8e6287.jpg",
  "https://cdn.discordapp.com/attachments/714211945212936304/714239807013781514/8d8637c97629cb0b8559549b87651e10.jpg",
  "https://cdn.discordapp.com/attachments/714211945212936304/714239797706883142/66990846_2101313816829848_2873030902112963365_n.jpg",
  "https://cdn.discordapp.com/attachments/714211945212936304/714239783999897633/1381466a02f0d467800b40a9d828d2d4.jpg",
  "https://cdn.discordapp.com/attachments/714211945212936304/714243898196885544/81cf5280f5225d3a60fc81ad3cd5f76c6d6f9314r1-400-400v2_uhq.jpg",
  "https://cdn.discordapp.com/attachments/714211945212936304/714243900025339964/images.jpg"]
  var resim = resimler[Math.floor(Math.random() * resimler.length)];
 const Discord = require("discord.js")
  let embed = new Discord.MessageEmbed() .setImage(resim)  

message.channel.send(embed)
    

}
}