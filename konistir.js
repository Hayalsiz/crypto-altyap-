const Discord = require('discord.js')
const googleTTS = require('google-tts-api');
const opus = require("@discordjs/opus")

module.exports = {
    name: 'konus',
    aliases: ['konis'],
    category: 'bot',

    run: (client, message, args, ayarlar) => {

  let yazi = args.join(" ")
   
  if (!message.member.voice.channel) return message.channel.send(' Lütfen sesli bir kanala katıl ve tekrar dene.');
  if (!yazi) return message.channel.send('Yanlış kullandınız. Doğru kullanım `p!konustur <yazı>`')
  
  googleTTS(`${yazi}`, 'tr', 1).then(url => {
    message.member.voice.channel.join().then(connection => {
      message.delete();
      connection.play(url).on("end",() => {
        connection.disconnect();
      })
    })
  })
   }
}