const Discord = require('discord.js');
exports.run = (client, message, args) => {
client.user.setUsername(message.content.substr(9));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setname',
  description: 'Met un nouveaux nom au bot.',
  usage: 'setname <name>'
};
