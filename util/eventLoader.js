const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
  client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
  
  client.on('guildMemberAdd', reqEvent('giris'));
  client.on('guildMemberRemove', reqEvent('cikis'));

  
  
};