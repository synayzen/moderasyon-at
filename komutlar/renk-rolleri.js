const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.get("664472621248806922") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription("Bu Komutu Kullanmaya Yetkin Yok.")).setColor('BLACK')

	if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz.');

    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    var jaus =  message.guild.members.cache.filter(r=>r.roles.cache.has("792076267016159273")).size.toString()
    var erkek =  message.guild.members.cache.filter(r=>r.roles.cache.has("799724048162095165")).size.toString()
    var kız =  message.guild.members.cache.filter(r=>r.roles.cache.has("799724047817768970")).size.toString()
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let jaus2 = '⚔'
    const jausunuz = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setDescription(`
        **__Booster Renk Seçimi;__** \n 
        <:beyaz:836164155690057762> **:** \` Beyaz \` \n 
        <:siyah:836164098784755772> **:**  \` Siyah \` \n 
        <:krmz:836164134324273173> **:** \` Kırmızı \` \n 
        <:mavi:836164201290137641> **:**  \` Mavi \` \n 
        <:kahverengi:836164218243252244> **:** \` Kahverengi \` \n 
        <:mor:836164114274713641> **:**  \` Mor \` \n 
        <:yeil:836164085041070101> **:** \` Yeşil \` \n 
        <:sar:836164182398730303> **:**  \` Sarı \` \n 
         <:turuncu:836164169618161675> **:**  \` Turuncu \``)

    .setFooter(`Aşağıda ki emojilere tıklayarak, almak istediğiniz rengi seçebilirsiniz.`)
    message.channel.send(jausunuz)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['botbilgi'],
    permLevel: 0
};

exports.help = {
    name: 'renk-rolleri',
    description: 'renk-rolleri',
    usage: 'renk-rolleri'
};

