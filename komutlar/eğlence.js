
const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('BLUE')
 .setDescription(`

 > ➥ \`.bot-bilgi \` -> Botun  tüm bilgilerini gösterir .
 
 > ➥ \`.aşk <@etiket> \` -> aşkını söyler.
 
 > ➥ \`.aşkölçer <@etiket> \` -> aşkını ölçer.
 
 > ➥ \`.bitcoin \` -> bitcoin borsasının değerlerini söyler.
 
 > ➥ \`.canlıdestek \` -> 📞canlı-destek sağlar.
 
 > ➥ \`.havadurumu [şehir] \` -> Belirtiğiniz şehrin havadurumu söyler.
 
 > ➥ \`.csgo \` -> csgo bilgilerini gösterir.

 > ➥ \`.nitro \` -> beleş nitro ahaa.

 > ➥ \`.davet \` -> davet linkini gösterir.
 
 > ➥ \`.kartopu <@etiket> \`-> Kime kartopu atmak isterin.

 > ➥ \`.soda <@etiket> \` -> Soda ısmarlarsınız
  
 > ➥ \`.korona <ülke> \` -> Ülkelerdeki COVID-19 vakalarını inceyelebilirsiniz.
 
 > ➥ \`.saat \` -> Saatı gösterir.

 > ➥ \`.oylama <oylamaismi> \` -> Oylama yapmanızı sağlar.
 
 > ➥ \`.sigarayak \` -> sigara içersiniz.
 
 > ➥ \`.tkm <taş,kağıt,makas> \` -> Taş kağıt makas oyununu oynar.
 
 > ➥ \`.fal \` -> Neyse falin çıksın halin.
 
 > ➥ \`.yapımcım\` -> yapımcım.
 
 > ➥ \`.yazı-tura\` ->  Yazı Tura Oynamanıza Yarar.
  
 > ➥ \`.yılbaşı\` -> Yılbaşına ne kadar kaldığını gösterir.
 
 > ➥ \`.çıkma-teklifi-et <@etiket> \` -> Çıkma teklifi.

 > ➥ \`.öp <@etiket> \` -> İstediğiniz kişiyi öpersiniz.

 > ➥ \`.sarıl <@etiket> \` -> İstediğiniz kişiyi sarılırsınız.
 
 > ➥ \`.spotify <@etiket> \` -> Kişinin spotify'da dinlediği şarkıyı gösterir.

 > ➥ \`.sunucuresmi \` -> 𝐀𝐬𝐬𝐚𝐬𝐬𝐢𝐧'𝐬 𝐂𝐫𝐞𝐞𝐝 𝐅𝐚𝐦𝐢𝐥𝐲 sunucu resmi.
 
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
  name: 'eğlence',   
  description: '',
  usage: ''
};

