const { SlashCommandBuilder, AttachmentBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js')
const locale = require('../locale/en.json')
const SQLite = require("better-sqlite3");
const sql = new SQLite('./bot.sqlite');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('Ask the 8ball a question and get an answer STRAIGHT from the cosmos. (Results Vary)')
		.addStringOption((option) => 
			option
				.setName('question')
				.setDescription('The important question you want answered.')
				.setRequired(true)
		)
        .addStringOption((option) => 
			option
				.setName('drink')
				.setDescription('Drink the blue liquid inside?')
				.setRequired(true)
                .addChoices(
                    { name: 'Yes', value: 'true' },
                    { name: 'No', value: 'false' },
                )),
	async execute(interaction) {
        const client = interaction.client
        const question = interaction.options.getString('question');
        const drink = interaction.options.getString('drink');
        var lan = 'en'
        client.getUsSett = sql.prepare("SELECT * FROM userSettings WHERE userID = ?");
        let userset = client.getUsSett.get(interaction.user.id)

        if(userset) {
            if(userset.language) {
                lan = userset.language;
            }
        }
        const locale = require('../locale/'+lan+'.json')

        var roll = [
            ["01", locale.magicBallAnswer01],
            ["02", locale.magicBallAnswer02],
            ["03", locale.magicBallAnswer03],
            ["04", locale.magicBallAnswer04],
            ["05", locale.magicBallAnswer05],
            ["06", locale.magicBallAnswer06],
            ["07", locale.magicBallAnswer07],
            ["08", locale.magicBallAnswer08],
            ["09", locale.magicBallAnswer09],
            ["10", locale.magicBallAnswer10],
            ["11", locale.magicBallAnswer11],
            ["12", locale.magicBallAnswer12],
            ["13", locale.magicBallAnswer13],
            ["14", locale.magicBallAnswer14],
            ["15", locale.magicBallAnswer15],
            ["16", locale.magicBallAnswer16],
            ["17", locale.magicBallAnswer17],
            ["18", locale.magicBallAnswer18],
            ["19", locale.magicBallAnswer19],
            ["20", locale.magicBallAnswer20]
        ]

        var answer = roll[Math.floor(Math.random()* roll.length)];

        if(drink === "true") {
            var drinkChoices = [
                ["01", locale.magicBallDrink1],
                ["02", locale.magicBallDrink2],
                ["03", locale.magicBallDrink3],
                ["04", locale.magicBallDrink4]
            ]

            var drinkAnswer = drinkChoices[Math.floor(Math.random()* drinkChoices.length)];

            const embed = new EmbedBuilder()
                .setTitle(locale.magicBallName)
                .setDescription(locale.magicBallDescription)
                .addFields([
                    { name: question, value: answer[1] }
                ])
                .setImage('https://dbbackup.lockyzdev.net/botcommands/8ball/cracked/id-'+answer[0]+'.png')
                .setTimestamp();
            interaction.reply({ content: drinkAnswer[1].replace('{user}', interaction.user.username), embeds: [embed]})
            return;
        }

        const embed = new EmbedBuilder()
            .setTitle(locale.magicBallName)
            .setDescription(locale.magicBallDescription)
            .addFields([
                { name: question, value: answer[1] }
            ])
            .setImage("https://dbbackup.lockyzdev.net/botcommands/8ball/id-"+answer[0]+".png")
            .setTimestamp();
        interaction.reply({ embeds: [embed]})
	}
};
