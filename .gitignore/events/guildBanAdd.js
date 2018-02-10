module.exports = (guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} a été banni(e)!`);
};
