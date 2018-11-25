const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", (message) => {
            if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        let yumz = new Discord.RichEmbed()
                    .setTimestamp()
                    .addField(`Sent By:`, `<@${message.author.id}>`)
                    .setThumbnail(message.author.displayAvatarURL)
                    .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                client.users.get("515474180603641866").send(yumz)
            }
});

client.login(process.env.BOT_TOKEN6);
