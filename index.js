const Discord = require("discord.js");
const bot = new Discord.Client();

//const token = 'NTU2NjMxNDkxNTQzODI2NDMz.XlZ-NQ.1Bg-Wdw1cd3GhBgHV0jfaYNRxK4';

var test;

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

bot.on('ready', () => {
    console.log("Bot Status: Online");
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Irritating Tyler'
        }
    });
    test = 0;
})

bot.on('message', msg => {
    if (msg.content === "!commands") {
        msg.channel.send("!commands, !avatar, !ping, !test, !randint (min) (max)");
    } else if (msg.content === "!avatar") {
        msg.channel.send(msg.author.avatarURL);
    } else if (msg.content === "!ping") {
        msg.channel.send("PONG");
    } else if (msg.content === "!test") {
        test += 1;
        msg.channel.send(test);
    } else if (msg.content.includes("!randint")) {
        let m = msg.content.split(" ");
        let min = Math.floor(m[1]);
        let max = Math.floor(m[2]);
        if (max <= min) {
            msg.reply("the second number must be larger than the first! Please try again.")
        } else {
            let possible = [];
            let pos = 0
            for(let s = min; s < max + 1; s++) {
                possible[pos] = s;
                pos++
            }
            shuffle(possible);
            msg.reply(possible[0]);
        }
    } else if (msg.content.includes("!sendDM")) {
        //!sendDM_person_message
        let m = msg.content.split("-");
        console.log(m);
        
        msg.guild.members.forEach(member => {
            console.log(member.user.username)
            if (member.user.username === m[1]) {
                member.sendMessage(m[2])
            }
        })
    }
    //if bot recieves a dm
    if (msg.channel.type == "dm") {
        msg.author.send("For the mean time, send all messages to Michael.");
    }
})

/*bot.on('guildMemberAdd', member => {
    
    const channel = member.guild.channels.find(ch => ch.name === 'general');
    
    if (!channel) return;
    
    channel.send(`Welcome to the server, ${member}`);
});*/

bot.login(process.env.BOT_TOKEN);
