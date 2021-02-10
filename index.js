const Discord = require('discord.js');
const { send } = require('process');
const {token, prefix, versie} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

const triggerWord = ["stinky", "shit"];

client.on('message', async message => {
	if (message.content === `${prefix}ping`){
        message.channel.send(`pong! \ndit is versie ${versie} van Poopiebot`);
    };
    
    if (message.member.roles.cache.some(role => role.name === 'poopie')){
        message.react('💩');
    };

    if (message.content === triggerWord[1]){
        let gebruiker = message.member.displayName;
        console.log(triggerWord)
        message.channel.send(`Hihi ${gebruiker} stuurde een stinky winky woord.`);
    };
});