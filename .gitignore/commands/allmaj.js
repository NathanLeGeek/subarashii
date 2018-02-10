const Discord = require('discord.js');
exports.run = (client, message, args) => {
	return message.channel.sendMessage( {
                  embed: {
                      color: 3447003,
                      title: ``,
                      fields: [
                          {
                              name: `\n**▬▬▬▬▬[Maj 0.0.1]▬▬▬▬▬**`,
                              value: `***-Création du Bot Discord\n-Ajout des commandes de Modérations Basique\n-Bot en Anglais***`,
                              inline: true
                          },
                          {
                              name: `\n**▬▬▬▬▬[Maj 0.0.2]▬▬▬▬▬**`,
                              value: `***-Amélioration du bot Discord \n-Ajout de la commande "allmaj" & "ping"\n-Bot passé en Français***`,
                              inline: true
                          },
                          {
                              name: `\n**▬▬▬▬▬[Maj 0.0.3]▬▬▬▬▬**`,
                              value: `***-Résolution des bugs\n-Ajout des commandes "anime" & "shoot"\n-Passage v0.0.2 à v0.0.3***`,
                              inline: true
                          },

                      ],
                      timestamp: new Date(),
                      thumbnail: {
                          url: client.user.avatarURL
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
  name: 'allmaj',
  description: 'Envoie un message contenant tout les ajouts ayant eu dans les derniers Mise à Jour.',
  usage: '-allmaj'
};