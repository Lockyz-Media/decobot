const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, PermissionsBitField, Modal, ActionRowBuilder, TextInputComponent } = require('discord.js')
const locale = require('../locale/en.json')
const SQLite = require("better-sqlite3");
const sql = new SQLite('./bot.sqlite');
const sql1 = new SQLite('./bot.sqlite');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('punish')
		.setDescription('Slam down the hammer.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('ban')
                .setDescription('Ban a user.')
		        .addUserOption((option) => 
			        option
				        .setName('user')
				        .setDescription('The user you wanna ban.')
				        .setRequired(true)
		        )
		        .addStringOption((option) => 
			        option
				        .setName('reason')
				        .setDescription('The reason you wanna ban the user for.')
				        .setRequired(false)
                        .addChoices(
                            { name: 'Spam', value: 'Spam' },
                            { name: 'Discord TOS', value: 'Broke Discord TOS' },
                            { name: 'Pedophilia', value: 'Pedophilia' },
                            { name: 'Unsolicited Nudes', value: 'Unsolicited Nudes' },
                            { name: 'Racism', value: 'Racism' },
                            { name: 'Bot', value: 'Bot' },
                            { name: 'Compromised Account', value: 'Compromised Account' },
                            { name: 'Harassment', value: 'Harassment' },
                            { name: 'Doxing', value: 'Doxing' },
                            { name: 'Bullying', value: 'Bullying' },
                            { name: 'Mysogyny', value: 'Mysogyny' },
                            { name: 'Homophobia', value: 'Homophobia' },
                            { name: 'Gore Content', value: 'Gore Content' },
                            { name: 'Phishing', value: 'Phishing' },
                            { name: 'Scamming', value: 'Scamming' },
                            { name: 'Other', value: 'Other' },
                        )
		        )
                .addStringOption((option) => 
                    option
                        .setName('custom_reason')
                        .setDescription('If your reason isn\'t listed you can use a custom one here.')
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName('send_reason')
                        .setDescription('Do you want to send your custom reason to our developers so they can add it to the list of reasons?')
                        .setRequired(false)
                        .addChoices(
                            { name: 'Yes', value: 'true' },
                            { name: 'No', value: 'false' },
                        )
                ),
            )
        .addSubcommand(subcommand =>
            subcommand
                .setName('kick')
                .setDescription('Kick a user.')
                .addUserOption((option) => 
                    option
                        .setName('user')
                        .setDescription('The user you wanna kick.')
                        .setRequired(true)
                )
                .addStringOption((option) => 
                    option
                        .setName('reason')
                        .setDescription('The reason you wanna kick the user for.')
                        .setRequired(false)
                        .addChoices(
                            { name: 'Spam', value: 'Spam' },
                            { name: 'Discord TOS', value: 'Broke Discord TOS' },
                            { name: 'Pedophilia', value: 'Pedophilia' },
                            { name: 'Unsolicited Nudes', value: 'Unsolicited Nudes' },
                            { name: 'Racism', value: 'Racism' },
                            { name: 'Bot', value: 'Bot' },
                            { name: 'Compromised Account', value: 'Compromised Account' },
                            { name: 'Harassment', value: 'Harassment' },
                            { name: 'Doxing', value: 'Doxing' },
                            { name: 'Bullying', value: 'Bullying' },
                            { name: 'Mysogyny', value: 'Mysogyny' },
                            { name: 'Homophobia', value: 'Homophobia' },
                            { name: 'Gore Content', value: 'Gore Content' },
                            { name: 'Phishing', value: 'Phishing' },
                            { name: 'Scamming', value: 'Scamming' },
                            { name: 'Other', value: 'Other' },
                        )
                )
                .addStringOption((option) => 
                    option
                        .setName('custom_reason')
                        .setDescription('If your reason isn\'t listed you can use a custom one here.')
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName('send_reason')
                        .setDescription('Do you want to send your custom reason to our developers so they can add it to the list of reasons?')
                        .setRequired(false)
                        .addChoices(
                            { name: 'Yes', value: 'true' },
                            { name: 'No', value: 'false' },
                        )
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('warn')
                .setDescription('Warn a User')
                .addUserOption((option) => 
                    option
                        .setName('user')
                        .setDescription('The user you wanna warn.')
                        .setRequired(true)
                )
                .addStringOption((option) => 
                    option
                        .setName('reason')
                        .setDescription('The reason you wanna warn the user for.')
                        .setRequired(false)
                        .addChoices(
                            { name: 'Spam', value: 'Spam' },
                            { name: 'Discord TOS', value: 'Broke Discord TOS' },
                            { name: 'Pedophilia', value: 'Pedophilia' },
                            { name: 'Unsolicited Nudes', value: 'Unsolicited Nudes' },
                            { name: 'Racism', value: 'Racism' },
                            { name: 'Bot', value: 'Bot' },
                            { name: 'Compromised Account', value: 'Compromised Account' },
                            { name: 'Harassment', value: 'Harassment' },
                            { name: 'Doxing', value: 'Doxing' },
                            { name: 'Bullying', value: 'Bullying' },
                            { name: 'Mysogyny', value: 'Mysogyny' },
                            { name: 'Homophobia', value: 'Homophobia' },
                            { name: 'Gore Content', value: 'Gore Content' },
                            { name: 'Phishing', value: 'Phishing' },
                            { name: 'Scamming', value: 'Scamming' },
                            { name: 'Other', value: 'Other' },
                        )
                )
                .addStringOption((option) => 
                    option
                        .setName('custom_reason')
                        .setDescription('If your reason isn\'t listed you can use a custom one here.')
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName('send_reason')
                        .setDescription('Do you want to send your custom reason to our developers so they can add it to the list of reasons?')
                        .setRequired(false)
                        .addChoices(
                            { name: 'Yes', value: 'true' },
                            { name: 'No', value: 'false' },
                        )
                )
        )
        /*.addSubcommand(subcommand =>
            subcommand
                .setName('mute')
                .setDescription('Mute a User')
                .addUserOption((option) => 
                    option
                        .setName('user')
                        .setDescription('The user you wanna mute.')
                        .setRequired(true)
                )
                .addStringOption((option) => 
                    option
                        .setName('reason')
                        .setDescription('The reason you wanna mute the user for.')
                        .setRequired(false)
                        .addChoices(
                            { name: 'Spam', value: 'Spam' },
                            { name: 'Discord TOS', value: 'Broke Discord TOS' },
                            { name: 'Pedophilia', value: 'Pedophilia' },
                            { name: 'Unsolicited Nudes', value: 'Unsolicited Nudes' },
                            { name: 'Racism', value: 'Racism' },
                            { name: 'Bot', value: 'Bot' },
                            { name: 'Compromised Account', value: 'Compromised Account' },
                            { name: 'Harassment', value: 'Harassment' },
                            { name: 'Doxing', value: 'Doxing' },
                            { name: 'Bullying', value: 'Bullying' },
                            { name: 'Mysogyny', value: 'Mysogyny' },
                            { name: 'Homophobia', value: 'Homophobia' },
                            { name: 'Gore Content', value: 'Gore Content' },
                            { name: 'Phishing', value: 'Phishing' },
                            { name: 'Scamming', value: 'Scamming' },
                            { name: 'Other', value: 'Other' },
                        )
                )
                .addStringOption((option) => 
                    option
                        .setName('custom_reason')
                        .setDescription('If your reason isn\'t listed you can use a custom one here.')
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName('send_reason')
                        .setDescription('Do you want to send your custom reason to our developers so they can add it to the list of reasons?')
                        .setRequired(false)
                        .addChoices(
                            { name: 'Yes', value: 'true' },
                            { name: 'No', value: 'false' },
                        )
                )
            )*/
        .addSubcommand(subcommand =>
            subcommand
                .setName('query')
                .setDescription('Reroll an ended giveaway.')
                .addUserOption((option) => 
                    option
                        .setName('user')
                        .setDescription('The user you wanna query.')
                        .setRequired(true)
                )
        )
        ,
	async execute(interaction) {
        const client = interaction.client
        var lan = 'en'
        client.getUsSett = sql1.prepare("SELECT * FROM userSettings WHERE userID = ?");
        let userset = client.getUsSett.get(interaction.user.id)
        client.getLastPunish = sql1.prepare("SELECT * FROM punishments WHERE guildid = ? AND userid = ? ORDER BY punishmentid DESC LIMIT 3;").all(interaction.guild.id, user.id);
        client.setUserPunish = sql.prepare("INSERT OR REPLACE INTO punishments (id, userid, punishmentid, punishment, reason, timestamp, guildid) VALUES (@id, @userid, @punishmentid, @punishment, @reason, @timestamp, @guildid);");

        if(userset) {
            if(userset.language) {
                lan = userset.language;
            }
        }
        const locale = require('../locale/'+lan+'.json')

        let lastPunish = client.getLastPunish[0];
        if(!lastPunish) {
            lastPunish = 0000;
        } else {
            lastPunish = client.getLastPunish[0].punishmentid;
        }

        let punID = lastPunish+1;
        const now = Date.now()

        if(interaction.options.getSubcommand() === 'builder') {
            const modal = new Modal()
                .setCustomId('punishmentBuilder')
                .setTitle('Punishment Generator')

            const punishment = new TextInputComponent()
                .setCustomId('punishment')
                .setLabel("Punishment")
                .setStyle('SHORT')
                .setPlaceholder('Kick/Ban/Warn')
                .setRequired(true)

            const reason = new TextInputComponent()
                .setCustomId('reason')
                .setLabel("Reason")
                .setStyle('PARAGRAPH')
                .setPlaceholder('Why would you like to punish this user?')
                .setRequired(true)

            const firstActionRow = new ActionRowBuilder().addComponents(punishment);
            const secondActionRow = new ActionRowBuilder().addComponents(reason);

            modal.addComponents(firstActionRow, secondActionRow);

            await interaction.showModal(modal);
        }

        if(interaction.options.getSubcommand() === 'ban') {
            if(interaction.member.permissions.has(PermissionsBitField.Flags.ADMINISTRATOR) || interaction.member.permissions.has(PermissionsBitField.Flags.MANAGE_GUILD) || interaction.member.permissions.has(PermissionsBitField.Flags.BAN_MEMBERS)) {
                const reason = interaction.options.getString('reason')
                const customReason = interaction.options.getString('custom_reason')
                const sendCustomReason = interaction.options.getString('send_reason')
                const user = interaction.options.getUser('user')
                const member = interaction.guild.members.cache.get(user.id)
                var reason1 = "Banned by "+interaction.user.username

                if(customReason) {
                    if(sendCustomReason === "true") {
                        client.channels.cache.get('906706193924386846').send({ content: "Someone used a custom reason. The reason is `"+customReason+"`" })
                    }
                    reason1 = locale.banReasonAdded.replace('{user}', interaction.user.username).replace('{reason}', customReason)
                } else {
                    if(!reason) {
                        reason1 = locale.banReasonDefault.replace('{user}', interaction.user.username)
                    } else {
                        reason1 = locale.banReasonAdded.replace('{user}', interaction.user.username).replace('{reason}', reason)
                    }
                }
                if(!member.bannable) {
                    interaction.reply({ content: locale.banUnbannable })
                } else {
                    let punishment

                    punishment = { id: `${user.id}-${punID}-${interaction.guild.id}`, userid: user.id, punishmentid: punID, punishment: 'Ban', reason: reason, timestamp: now.toString(), guildid: interaction.guild.id }
                    client.setUserPunish.run(punishment);

                    member.ban({ days: 7, reason: reason1 })
                    interaction.reply({ content: locale.banReasonAddedResponse.replace('{user}', member.username).replace('{reason}', reason1) })
                }
            } else {
                interaction.reply({ content: locale.noPermission })
            }
        }

        if(interaction.options.getSubcommand() === 'kick') {
            if(interaction.member.permissions.has(PermissionsBitField.Flags.ADMINISTRATOR) || interaction.member.permissions.has(PermissionsBitField.Flags.MANAGE_GUILD) || interaction.member.permissions.has(PermissionsBitField.Flags.BAN_MEMBERS) || interaction.member.permissions.has(PermissionsBitField.Flags.KICK_MEMBERS)) {
                const user = interaction.options.getUser('user')
                const reason = interaction.options.getString('reason')
                const customReason = interaction.options.getString('custom_reason')
                const sendCustomReason = interaction.options.getString('send_reason')
                const member = interaction.guild.members.cache.get(user.id)
                var reason1 = "Kicked by "+interaction.user.username;

                if(customReason) {
                    if(sendCustomReason === "true") {
                        client.channels.cache.get('906706193924386846').send({ content: "Someone used a custom reason. The reason is `"+customReason+"`" })
                    }
                    reason1 = locale.kickReasonAdded.replace('{user}', interaction.user.username).replace('{reason}', customReason)
                } else {
                    if(!reason) {
                        reason1 = locale.kickReasonDefault.replace('{user}', interaction.user.username)
                    } else {
                        reason1 = locale.kickReasonAdded.replace('{user}', interaction.user.username).replace('{reason}', reason)
                    }
                }
                if(!member.kickable) {
                    interaction.reply({ content: locale.kickUnkickable })
                } else {
                    let punishment

                    punishment = { id: `${user.id}-${punID}-${interaction.guild.id}`, userid: user.id, punishmentid: punID, punishment: 'Kick', reason: reason, timestamp: now.toString(), guildid: interaction.guild.id }
                    client.setUserPunish.run(punishment);

                    member.kick({ reason: reason1 })
                    interaction.reply({ content: locale.kickReasonAddedResponse.replace('{user}', member.username).replace('{reason}', reason1) })
                }
            } else {
                interaction.reply({ content: locale.noPermission })
            }
        }

        if(interaction.options.getSubcommand() === 'warn') {
            if(interaction.member.permissions.has(PermissionsBitField.Flags.ADMINISTRATOR) || interaction.member.permissions.has(PermissionsBitField.Flags.MANAGE_GUILD) || interaction.member.permissions.has(PermissionsBitField.Flags.BAN_MEMBERS) || interaction.member.permissions.has(PermissionsBitField.Flags.KICK_MEMBERS)) {
                const user = interaction.options.getUser('user')
                const reason = interaction.options.getString('reason')
                const customReason = interaction.options.getString('custom_reason')
                const sendCustomReason = interaction.options.getString('send_reason')
                const member = interaction.guild.members.cache.get(user.id)
                var reason1 = "Warned by "+interaction.user.username

                if(customReason) {
                    if(sendCustomReason === "true") {
                        client.channels.cache.get('906706193924386846').send({ content: "Someone used a custom reason. The reason is `"+customReason+"`" })
                    }
                    reason1 = locale.banReasonAdded.replace('{user}', interaction.user.username).replace('{reason}', customReason)
                } else {
                    if(!reason) {
                        reason1 = reason1.replace('{user}', interaction.user.username)
                    } else {
                        reason1 = reason
                    }
                }
                let punishment

                punishment = { id: `${user.id}-${punID}-${interaction.guild.id}`, userid: user.id, punishmentid: punID, punishment: 'Warn', reason: reason, timestamp: now.toString(), guildid: interaction.guild.id }
                client.setUserPunish.run(punishment);

                await user.send({ content: '<@'+user.id+'> you have been warned in '+interaction.guild.name+' for '+reason }).catch((err) => {
                    interaction.reply({ content: 'User <@'+user.id+'> has been warned for '+reason })
                    return;
                })

                interaction.reply({ content: 'User '+user.username+' has been warned for '+reason })
            } else {
                interaction.reply({ content: locale.noPermission })
            }
        }

        if(interaction.options.getSubcommand() === 'query') {
            if(interaction.member.permissions.has(PermissionsBitField.Flags.ADMINISTRATOR) || interaction.member.permissions.has(PermissionsBitField.Flags.MANAGE_GUILD) || interaction.member.permissions.has(PermissionsBitField.Flags.BAN_MEMBERS) || interaction.member.permissions.has(PermissionsBitField.Flags.KICK_MEMBERS)) {
                const user = interaction.options.getUser('user')
                const member = interaction.guild.members.cache.get(user.id)

                const getAllUserPunish = sql.prepare("SELECT * FROM punishments WHERE userid = ? AND guildID = ?  ORDER BY punishmentid DESC;").all(user.id, interaction.guild.id);

                if(!getAllUserPunish) {
                    interaction.reply({ content: 'This user has never been punished before' })
                }

                const embed = new EmbedBuilder()
                    .setTitle(user.username+'s Punishments')
                    .setThumbnail(user.avatarURL())

                for(const data of getAllUserPunish) {
                    embed.addField('#'+data.punishmentid+' '+data.punishment, data.reason)
                }

                return interaction.reply({ embeds: [embed] });
            } else {
                interaction.reply({ content: locale.noPermission })
            }
        }
	}
};