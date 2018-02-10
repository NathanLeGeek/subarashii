const request = require('request-promise');
const catgirls = require('../catgirls.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {  
	 try {
      var response = catgirls[Math.floor(Math.random() * catgirls.length)];
      if (response.includes("/a/")) { // If image is an album.
        message.channel.sendMessage(message.channel.id, {
          content: ``,
          embed: {
            color: 0xf4ce11,
            author: {
              name: `${message.author.username} à reçu une photo de nekogirl!`,
              url: `${message.author.avatarURL}`,
              icon_url: `${message.author.avatarURL}`
            },
            description: `**URL:\r\n${response}**`,
            image: {
              url: `${response}`
            }
          }
        });
      } else {
        message.channel.sendMessage(message.channel.id, {
          content: ``,
          embed: {
            color: 0xf4ce11,
            author: {
              name: `${message.author.username} à reçu une photo de nekogirl!`,
              url: `${message.author.avatarURL}`,
              icon_url: `${message.author.avatarURL}`
            },
            description: `**URL: ${response}**`,
            image: {
              url: `${response}`
            }
          }
        });
      }
    } catch (err) {
      message.channel.sendMessage(message.channel.id, {
        content: ``,
        embed: {
          color: 0xff0000,
          author: {
            name: ``,
            url: ``,
            icon_url: ``
          },
          description: `Ow Cherry, désolé mais il y a eu un problème...`,
          fields: [{
            name: `Pour plus d'aide::`,
            value: `https://discord.gg/XZDdUNT`,
            inline: true
          }]
        }
      });
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nekogirl',
  description: 'Envoie une photo de nekogirl.',
  usage: '-nekogirl'
};