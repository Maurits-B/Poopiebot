const Discord = require('discord.js');
const { send } = require('process');
const {token, prefix} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

const poepieRole = "Poopie";

client.on('message', async message => {
	if (message.content === `${prefix}ping`){
        message.channel.send('HAHAHA STINKY POOPY')
    }
    
    if (message.member.roles.cache.some(role => role.name === 'poopie')){
        message.react('💩');
    }
});