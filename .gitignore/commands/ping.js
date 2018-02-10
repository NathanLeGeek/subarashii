const moment = require("moment");
const request = require("superagent");
// Check if the bot is alive and well
exports.run = (client, message, args) => {
  var debut = new Date();
        var getvalueof = message.author;
request('http://www.google.com', function (error, response, body) {
   var fin = new Date();
  var tempsMs = fin.getTime() - debut.getTime();
  message.channel.sendMessage({
      embed: {
        type: 'rich',
        description: '',
        fields: [{
          name: 'Temps de réponse',
          value:  tempsMs/(5*2) + ' ms',
          inline: true
        }],
        color: 3447003,
        footer: {
          text: 'by Kô',
          proxy_icon_url: ' '
        },
         author: {
          name: getvalueof.username,
          icon_url: getvalueof.avatarURL,
          proxy_icon_url: ' '
        }
      }
}) });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Te permet de voir ton ping.',
  usage: '/ping'
};
