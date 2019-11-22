const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log("Ready!")
})

		client.on('message', message =>{
			if(message.content.startsWith(`${prefix}lazy`)){
				message.channel.send(" HEY! " + " **DO NOT** Mention me OR ELSE!")
				}
		})

			client.on('message', message =>{
				if(message.content.startsWith(`${prefix}respond`)){
					message.channel.send(" HI! "  + "How have you been today?")
					}
			})
					client.on('message', message =>{
					if(message.content.startsWith(`${prefix}nice`)){
						message.channel.send("not fucking nice lol")
						}
				})

client.login(token);