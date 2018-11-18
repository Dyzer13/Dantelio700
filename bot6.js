const Discord = require('discord.js');
const client = new Discord.Client();

const adminprefix = "-";
const devs = ['513323053334396928'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
      
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش حب:white_check_mark:   ${argresult}**`)
}
});

client.login(process.env.BOT_TOKEN6);
