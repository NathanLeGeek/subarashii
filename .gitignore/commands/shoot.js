 const Discord = require('discord.js');
exports.run = (client, message, args) => {
 if (message.mentions.users.size < 1) {
        throw '@mention some people to shoot!';
    }

    let output = message.mentions.users.map(m => `**${m}** :gun: PAN !!`).join('\n');

    message.delete();
    message.channel.sendMessage( {
        embed: {
                      color: 3447003,
                      title: ``,
                      fields: [
                          {
                              name: `\n**▬▬▬▬▬[Shoot]▬▬▬▬▬**`,
                              value: (`${client.user.username} is on a killing spree!`, output),
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
  name: 'shoot',
  description: 'Tir sur tes amis.',
  usage: '-shoot <name>'
};