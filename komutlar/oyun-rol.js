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
        **__Oyun Rol Seçimi;__** \n 
        <:Amongus:834911268568563733> **:** \` Among Us \` \n 
        <:bf1:834911974005145660> **:** \`Battlefield 1 \` \n
        <:CSGO:834911165951639572> **:**  \` Counter-Strike Global Offensive \` \n 
        <:warzone:834910430492098560> **:**  \` Call of Duty®: Warzone \` \n 
        <:dota2:834916141603749890> **:**  \` Dota 2 \` \n 
        <:FORNTE:834911014331088977> **:**  \` Fortnite \` \n 
        <:GARTC:834910993943494698> **:**  \` Gartic.io \` \n 
        <:EuroTruckSimulator2:834911143196754020>  **:** \`Euro Truck Simulator 2 \` \n
        <:GTAV:834910860056985661> **:**  \` Gta V \` \n 
        <:LEAGUEOFLEGENDS:834910834584322088> **:**  \` League Of Legends \` \n 
        <:MOBLELEGENDS:834910696792653904> **:**  \` Mobile Legends: Bang Bang \` \n 
        <:MNECRAFT:834910814179426335> **:**  \` Minecraft \` \n 
        <:rainbowsixege1:834914255404662815> **:**  \` Tom Clancy's Rainbow Six Siege \` \n 
        <:uno2:834939976688599040> **:**  \` Uno \` \n 
        <:payday21:834915964432547851> **:**  \` Pay Day 2 \` \n 
        <:Rocketleague:834910551842095155> **:**  \` Rocket League \` \n 
        <:PUBG:834920146455494687> **:**  \` Pubg \` \n 
        <:Pubglite:834910679822893117> **:**  \` Pubg Lite \` \n 
        <:PUBGMOBLE:834910664240660540> **:**  \` Pubg Mobile \`  \n 
        <:Valorant:834910532389175326> **:**  \` Valorant \`  \n 
        <:zula:834920174108409857> **:**  \` Zula \``)

    .setFooter(`Aşağıda ki emojilere tıklayarak, oynadığınız oyunların rolünü seçebilirsiniz.`)
    message.channel.send(jausunuz)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['botbilgi'],
    permLevel: 0
};

exports.help = {
    name: 'oyunrolleri',
    description: 'oyunrolleri',
    usage: 'oyunrolleri'
};

