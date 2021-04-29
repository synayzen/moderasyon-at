
const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('BLUE')
 .setDescription(`
 > ➥ \`.afk / afk <sebep> \` -> afk olduğunuzu belirtme.
 
 > ➥ \`.gel <@etiket> \` -> yanınıza gelmenizi isteyen kişiyi etiketle .
 
 > ➥ \`.git <@etiket> \` -> yanına gitmek istediğin kişiyi etiketle.
 
 > ➥ \`.bot-bilgi \` -> Botun  tüm bilgilerini gösterir .
 
 > ➥ \`.canlıdestek \` -> 📞canlı-destek sağlar.

 > ➥ \`.davet \` -> davet linkini gösterir.

 > ➥ \`.oylama <oylamaismi> \` -> Oylama yapmanızı sağlar.
 
 > ➥ \`.yapımcım\` -> yapımcım.
 
 > ➥ \`.sikayet <Şikayet> \` -> Şikayet de bulunursunuz.\``)
 .setFooter(`⚔ 𝗔𝘀𝘀𝗮𝘀𝗶𝗻'𝘀 𝗰𝗿𝗲𝗲𝗱 Sunar `)
    .setTimestamp()
    .setImage("https://media4.giphy.com/media/AaThTI6tAkJcgZylgw/giphy.gif?cid=ecf05e47vqalotk5phn0qxjtaz4mwmolir1ni4t7ffe7cop3&rid=giphy.gif")
message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı-yardım',   
  description: '',
  usage: ''
};

