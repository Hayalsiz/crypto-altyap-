const Discord = require("discord.js");
const snek = require('snekfetch');
const { Canvas } = require('canvas-constructor');
const { loadImage } = require('canvas');

module.exports = {     
name: 'snow',
description: 'Avatarınızı Rengarenk Yapar.',

  run : async(client, message, args) => {

    if (!message.guild.member(client.user).hasPermission('ATTACH_FILES')) return message.reply('Bu Komutu Kullanmak İçin **Dosyaları Yönet** Yetkisine Sahip Olmalıyım!')
    const getSlapped = async (person) => {
    const plate = await loadImage('https://cdn.discordapp.com/attachments/725420889285329007/725771211375640676/1593107721390.png');
    const png = person.replace('.gif', '.png');
    const { body } = await snek.get(png);
    return new Canvas(250, 250)
    .resetTransformation()
    .addImage(body, 0, 0, 250, 250)
    .addImage(plate, 0, 0, 250, 250)
    .toBuffer();
  }
     try {
    const person = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
    const result = await getSlapped(person);
    await message.channel.send({ files: [{ attachment: result, name: 'snow.png' }] });
  } catch (error) {
    throw error;
  }
}
}