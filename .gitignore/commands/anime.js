const Discord = require('discord.js');
exports.run = (client, message, args) => {
const Anime = require('malapi').Anime,
unirest = require("unirest");
	message.delete(message.author);
	var rec = message.content.toUpperCase().split(' ');
  var lrec = message.content.split(' ');
  rec.shift()
    Anime.fromName(rec.join(' ')).then(anime => {

      message.reply("**" + anime.title + ":**\n" + anime.synopsis + '\n**Nombre d\'Épisodes: **' + anime.episodes +
      '\n**Status: **' + anime.status + '\n**Réalisée: **' + anime.aired + '\n**Type: **' + anime.type +
      '\n**Note: **' + anime.statistics.score.value + "/10" + "\n**Genres: **" + anime.genres +
      '\n**Plus D\'Info: **' + anime.detailsLink + '\n');
      });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'anime',
  description: 'Effectue une recherhe sur l\'animé cité.',
  usage: '-anime <nom>'
};
