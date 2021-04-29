const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('BLUE')
 .setDescription(`
 > ➬ \`.eğlence \` -> Eğlence Komutlarını gösterir.

 > ➬ \`.kullanıcı-yardım \` -> Kullanıcı Komutlarını gösterir.

 > ➬ \`.moderasyon \` -> Moderasyon Komutlarını gösterir.

 > ➬ \`.inv-yardım \` -> Davetlerim Komutlarını gösterir.

 > ➬ \`.seviye-yardım \` -> Seviye Komutlarını gösterir.

 > ➬\`.istatistik \`-> İstatistik Komutlarını gösterir.\``)
 
    .setFooter(`⚔ 𝗔𝘀𝘀𝗮𝘀𝗶𝗻'𝘀 𝗰𝗿𝗲𝗲𝗱 Sunar .`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/801730953813688340/811572708068163644/assas.gif")
message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',   
  description: '',
  usage: ''
};