const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const config = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.login(config.token);