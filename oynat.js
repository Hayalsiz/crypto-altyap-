const Discord = require('discord.js')
const googleTTS = require('google-tts-api');
const opus = require("@discordjs/opus")

module.exports = {
    name: 'oynat',
    aliases: ['cal'],
    category: 'bot',

    run: (client, message, args, ayarlar) => {

  let yazi = args.join(" ")
   
  if (!message.member.voice.channel) return message.channel.send(' Lütfen sesli bir kanala katıl ve tekrar dene.');
  if (!yazi) return message.channel.send('Yanlış kullandınız. Doğru kullanım `c!cal muzik`')
  let url = "https://m.youtube.com/watch?v=Kwy1YpRz02E&t=142s"
    message.member.voice.channel.join().then(connection => {
      connection.play(url)
        message.delete();
   
  })
   }
}