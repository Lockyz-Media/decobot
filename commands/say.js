const { SlashCommandBuilder } = require('@discordjs/builders');
const {EmbedBuilder} = require('discord.js')
const { embedColor, ownerID } = require('../config');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Force me (Decobot) to send a message.')
		.addStringOption((option) => 
			option
				.setName('message')
				.setDescription('What message would you like to send?')
				.setRequired(true)
		),
	async execute(interaction) {
		const client = interaction.client

        interaction.reply("'Scuse you?\nhttps://tenor.com/view/elmo-stare-sesame-street-rocco-death-stare-gif-24438342")
	}
};
