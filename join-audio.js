const joinVoiceChannel = require('@discordjs/voice');
const config = require('./config.json')
const discord = require('discord.js');
const intents = new discord.Intents(32767);
const client = new discord.Client(( { intents }));
const Voice = require('@discordjs/voice')
new Voice.AudioPlayer();



client.login(config.token);