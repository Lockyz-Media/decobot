const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Permissions } = require('discord.js')
const { embedColor, ownerID } = require('../config');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Get advanced information about the bot.'),
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

        const botUptime = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
        const memUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        const guildSize = client.guilds.cache.size.toString();
        const userSize = client.users.cache.size.toString();
        
        var d = new Date();
        var n = d.getFullYear();
        const embed = new EmbedBuilder()
            .setTitle(locale.infoEmbedTitle)
            .setDescription(locale.infoEmbedDescription)
            .addFields([
                { name: locale.infoFieldSupport, value: "https://discord.gg/NgpN3YYbMM", inline: true },
                { name: locale.infoFieldDev, value: "Robin Painter", inline: true },
                { name: "Bit Core:", value: "v15122022", inline: true },
                { name: "Guilds", value: guildSize, inline: true },
                { name: "Users", value: userSize, inline: true },
                { name: "Uptime", value: botUptime, inline: true },
                { name: "Memory", value: `${Math.round(memUsage)} MB`, inline: true },
                { name: "Discord.js", value: `v${discordVersion}`, inline: true },
                { name: "Node", value: `${process.version}`, inline: true },
                { name: "Version", value: "v18122022", inline: true },
                { name: "Bug Tracker", value: "https://tracker.lockyzdev.net", inline: true },
            ])
            .setFooter({ text: "©2018-"+n+" Lockyz Dev"});
        interaction.reply({ embeds: [embed] })
	}
};