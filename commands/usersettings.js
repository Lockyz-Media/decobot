const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField, EmbedBuilder, InviteGuild, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle  } = require('discord.js')
const SQLite = require("better-sqlite3");
const sql = new SQLite('./bot.sqlite');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('usersettings')
		.setDescription('Change User settings'),

	async execute(interaction) {
        const client = interaction.client
        var lan = 'en'
        const usSettTable = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'userSettings';").get();
        client.setUsSett = sql.prepare("INSERT OR REPLACE INTO userSettings (userID, userAccess, language) VALUES (@userID, @userAccess, @language);");
        client.getUsSett = sql.prepare("SELECT * FROM userSettings WHERE userID = ?");
        let userset = client.getUsSett.get(interaction.user.id)

        if(userset) {
            if(userset.language) {
                lan = userset.language;
            }
            userAccuss = userset.userAccess
        } else {
            showLeevels = 'true';
            userLangoog = 'en';
            userAccess = 'true';
        }

        const locale = require('../locale/'+lan+'.json')

        const modal = new ModalBuilder()
            .setCustomId('userSettings')
            .setTitle('User Settings')

        const userAccess = new TextInputBuilder()
            .setCustomId('userAccess')
            .setLabel("Give users access to your information?")
            .setStyle('SHORT')
            .setPlaceholder('Type true or false')
            .setRequired(true)

        const languageUser = new TextInputBuilder()
            .setCustomId('languageUser')
            .setLabel("What language do you use?")
            .setStyle('SHORT')
            .setPlaceholder('Currently only \'en\', \'en-UWU\', \'fr\' and \'de\'.')
            .setRequired(true)

        const firstActionRow = new ActionRowBuilder().addComponents(userAccess);
        const fifthActionRow = new ActionRowBuilder().addComponents(languageUser);

        modal.addComponents(firstActionRow, fifthActionRow);

        await interaction.showModal(modal);
    }
};
