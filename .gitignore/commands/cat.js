const Discord = require('discord.js');
exports.run = (client, message, args) => {  
const request = require('request-promise-native');  
    request("http://random.cat/meow", function(err, response, body) {
      if (err) return message.channel.sendMessage(message.channel.id, {
        content: ``,
        embed: {
          color: 0xff0000,
          author: {
            name: ``,
            url: ``,
            icon_url: ``
          },
          description: `${err}`,
          fields: [{
            name: `Pour plus d'aide:`,
            value: `https://discord.gg/Vf4ne5b`,
            inline: true
          }]
        }
      });
      var cat = JSON.parse(body);
      if (!cat) return message.channel.sendMessage(message.channel.id, {
        content: ``,
        embed: {
          color: 0xff0000,
          author: {
            name: ``,
            url: ``,
            icon_url: ``
          },
          description: `Oups :no-mouth:, je n'ai pas reussi à attraper un chat pour toi, réssaye une nouvelle fois.`,
          fields: [{
            name: `Pour plus d'aide:`,
            value: `https://discord.gg/XZDdUNT`,
            inline: true
          }]
        }
      });
      message.channel.sendMessage(message.channel.id, {
        content: ``,
        embed: {
          color: 0xf4ce11,
          author: {
            name: `${message.author.username} reçois un petit chat ;3`,
            url: `${cat.file}`,
            icon_url: ``
          },
          description: `[>> Clique ici pour obtenir le lien de l'image qui a été envoyé <<](${cat.file})`,
          image: {
            url: `${cat.file}`
          }
        },
      });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'cat',
  description: 'Envoie une photo d\'un chat.',
  usage: '-cat'
};