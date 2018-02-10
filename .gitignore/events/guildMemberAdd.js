module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Bienvenue ${member.user.username} sur le serveur!`);
};
