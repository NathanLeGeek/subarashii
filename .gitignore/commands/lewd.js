const request = require('request-promise');
const lewd = require('../lewd.json');
var randomItem = require('random-item');
const Discord = require('discord.js');
exports.run = (client, message, args) => { 
	const gif = randomItem(lewd);
    message.channel.sendMessage(message.channel.id, {
      content: ``,
      embed: {
        color: 0xf4ce11,
        author: {
          name: ``,
          url: ``,
          icon_url: ``
        },
        description: ``,
        image: {
          url: `${gif}`
        }
      }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: 'lewd',
  description: 'Envoie une photo lewd',
  usage: '-lewd'
};