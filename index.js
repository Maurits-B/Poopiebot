const Discord = require('discord.js');
const { send } = require('process');
const {token, prefix, versie} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on('message', async message => {
	if (message.content === `${prefix}ping`){
        message.channel.send(`pong! \ndit is versie ${versie} van Poopiebot`);
    };
    
    if (message.member.roles.cache.some(role => role.name === 'poopie')){
        message.react('💩');
    };

    if (message.content === `${prefix}kleur`){
        const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var chosenColor = '#';

        for (let index = 0; index <= 5; index++) {
            let pickedHex = hex[Math.floor(Math.random() * 16)];
            var chosenColor = chosenColor.concat(pickedHex);
        };
        message.channel.send(chosenColor);
    };
});