const { EmbedBuilder } = require('discord.js');
const { embedColor, ownerID, logsID, guildId } = require('../config');

module.exports = {
	name: 'messageDelete',
	execute(message) {
		const client = message.client
		const user = message.user
		if(message.guild.id != guildId) {
			return;
		}

		const embed0 = new EmbedBuilder()
			.setColor(embedColor)
			.setDescription("A message by <@"+message.author.id+"> in <#"+message.channel.id+"> was deleted")
			if(message.cleanContent.length > 1024) {
				embed0.addFields({name: 'Content', value: 'Message Content is over 1024 lines, it\'s in a new embed', inline: false })
			} else if(message.cleanContent.length > 1) {
				embed0.addFields({ name: 'Content', value: message.cleanContent, inline: false })
			} else {
				embed0.addFields({ name: 'Content', value: 'Message Content was not cached so it cannot be displayed', inline: false })
			}
			embed0.setTimestamp();
		client.channels.cache.get(logsID).send({ embeds: [embed0] })
		if(message.cleanContent.length > 1024) {
			const embed1 = new EmbedBuilder()
				.setTitle("Message Deleted | Message Content")
				//.setColor(embedColor)
				.setDescription(message.cleanContent)
			client.channels.cache.get(logsID).send({ embeds: [embed1] })
		}
		return;
	}
}