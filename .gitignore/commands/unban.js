exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('Je n\'arrive pas a trouver le channel #mod-log, si celui-ci n\'a pas encore été crééé je vous demande de le créer afin de pouvoir utiliser la commande.');
  if (reason.length < 1) return message.reply('Tu as besoin de mettre une raison pour pouvoir utiliser le unban.');
  if (!user) return message.reply('Tu dois mentionné quelqu\'un lorsque tu utilises cette commande.').catch(console.error);
  message.guild.unban(user);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'Unban l\'utilisateur mentionné',
  usage: 'unban <mention> <raison>'
};
