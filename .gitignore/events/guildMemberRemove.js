module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Au revoir ${member.user.username}, tu vas nous manquer !`);
};
