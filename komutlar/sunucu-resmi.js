const Discord = require('discord.js');
  const db = require('quick.db')



exports.run = async (client, message, args) => {
  if (!message.guild) {
    const plasmic = new Discord.MessageEmbed()
    .setColor(0xff00ff)
    .setTimestamp()
    .setAuthor(message.author.username, message.guild.iconURL)
    .addField('YAW OLM ÖZEL MESAJLARIMDA KOMUT KULLANILMIYO ANLAYIN ARTIK ŞUNU!')
    return message.author.send(plasmic); }

  let user;

    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

 const PlasmicCode = new Discord.MessageEmbed()
        .setColor("RANDOM")
       .setAuthor("𝐀𝐬𝐬𝐚𝐬𝐬𝐢𝐧'𝐬 𝐂𝐫𝐞𝐞𝐝 𝐅𝐚𝐦𝐢𝐥𝐲 ⚔ ")
        .setImage(message.guild.iconURL(({ format: 'png', dynamic: true, size: 1024 })))
    message.channel.send(PlasmicCode)

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["sunucuresmi"],
  permLevel: 0
};

exports.help = {
  name: 'sunucupp',
  description: 'Sunucunun Logosunu Atar.',
  usage:'!sunucupp'
};