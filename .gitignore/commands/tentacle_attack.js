 const Discord = require('discord.js');
exports.run = (client, message, args) => {
 if (message.mentions.users.size < 1) {
        throw '@mention some people to shoot!';
    }

    let output = message.mentions.users.map(m => `**${m}** **est attaqué par des tentacules,** *"YAMETE KUDASEI~"* :octopus:  !!`).join('\n');

    message.delete();
    message.channel.sendMessage( {
        embed: {
                      color: 3447003,
                      title: ``,
                      fields: [
                          {
                              name: `\n**▬▬▬▬▬▬▬▬▬▬[Tentacles Attack]▬▬▬▬▬▬▬▬▬▬**`,
                              value: (`${client.user.username}`, output),
                              inline: true
                          },
                          ],
                      timestamp: new Date(),
                      thumbnail: {
                          url: ''
                      }
                  }
              });
        
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tentacle_attack',
  description: 'Yamete Kudasei Onii-Sama...',
  usage: '-tentacle_attack <name>'
};