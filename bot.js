const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready.")
});
client.on('message', message => {
    if (message.content == '!res') {
        message.reply('1080x1080')
    }
});
client.login(process.env.BOT_TOKEN)
