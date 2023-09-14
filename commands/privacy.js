const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js')
const SQLite = require("better-sqlite3");
const sql = new SQLite('./bot.sqlite');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('privacy')
		.setDescription('Get privacy and data collection information.'),
	async execute(interaction) {
        const client = interaction.client
        var lan = 'en'
        client.getUsSett = sql.prepare("SELECT * FROM userSettings WHERE userID = ?");
        let userset = client.getUsSett.get(interaction.user.id)

        if(userset) {
            if(userset.language) {
                lan = userset.language;
            }
        }
        const locale = require('../locale/'+lan+'.json')
        const embed = new EmbedBuilder()
            .setTitle('Privacy Information')
            .setDescription(locale.privacyResponse)
            .addFields([
                { name: "Intents Used", value: "GUILDS\nGUILD_MEMBERS\nGUILD_BANS\nGUILD_EMOJIS_AND_STICKERS\nGUILD_INVITES\nGUILD_MESSAGES\n\nWe only use intents required to make features run."}
            ])
        interaction.reply({ content: locale.priacyResponse })
	}
};
