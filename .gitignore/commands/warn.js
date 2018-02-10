const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('Je n\'arrive pas a trouver le channel #mod-log, si celui-ci n\'a pas encore été crééé je vous demande de le créer afin de pouvoir utiliser la commande.');
  if (reason.length < 1) return message.reply('Tu as besoin de mettre une raison pour pouvoir mettre un warn.');
  if (message.mentions.users.size < 1) return message.reply('Tu dois mentionné quelqu\'un lorsque tu utilises cette commande.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action:', 'Warning')
  .addField('Utilisateur:', `${user.username}#${user.discriminator}`)
  .addField('Bannie par:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Raison', reason);
  return client.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'warn',
  description: 'Envoie un warn à la personne mentionnée.',
  usage: 'warn <mention> <raison>'
};
