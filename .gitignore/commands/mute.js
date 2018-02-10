const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'mute');
  if (!modlog) return message.reply('Je n\'arrive pas a trouver le channel #mod-log, si celui-ci n\'a pas encore été crééé je vous demande de le créer afin de pouvoir utiliser la commande.').catch(console.error);
  if (!muteRole) return message.reply('e n\'arrive pas a trouver le rôle @mute, si celui-ci n\'a pas encore été crééé je vous demande de le créer afin de pouvoir utiliser la commande.').catch(console.error);
  if (reason.length < 1) return message.reply('Tu as besoin de mettre une raison pour pouvoir mettre un warn.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('Tu dois mentionné quelqu\'un lorsque tu utilises cette commande.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Un/Mute')
    .addField('Utilisateur:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Bannie par:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Raison', reason);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Je n\'ai pas les permissions pour éxécuter la commande.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
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
  name: 'mute',
  description: 'Rend Muet un Utilisateur mentionné',
  usage: 'un/mute <mention> <reason>'
};
