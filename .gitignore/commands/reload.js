exports.run = (client, message, args) => {
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.sendMessage(`Je n'arrive pas a trouver la commande: ${args[0]}`);
  } else {
    message.channel.sendMessage(`Reloading: ${command}`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`Le reload a été un succés: **${command}** a bien été relancé !`);
          })
          .catch(e => {
            m.edit(`La Commande que vous avez essayé de reload a rencontré une erreur: ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'Reload un fichier de commande, Si il a été modifié ou bien mis à jour.',
  usage: 'reload <commandname>'
};
