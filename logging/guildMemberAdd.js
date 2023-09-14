const { EmbedBuilder, Message, AttachmentBuilder } = require('discord.js');
const { embedColor, ownerID, logsID, guildId, welcomeID } = require('../config');
const { createCanvas, Image, GlobalFonts } = require('@napi-rs/canvas');
const { readFile } = require('fs/promises');
const { request } = require('undici');

module.exports = {
	name: 'guildMemberAdd',
	async execute(member) {
		const client = member.client
		const user = member.user

		if(member.guild.id != guildId) {
			return;
		}

		const canvas = createCanvas(700, 250);
		const context = canvas.getContext('2d');

		const background = await readFile('./assets/images/unity.png');
		const backgroundImage = new Image();
		backgroundImage.src = background;
		context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

		const welcomeText = {
			title: {
				x: canvas.width / 2,
				y: canvas.height / 2+50,
				textAlign: "center",
				fontSize: "50",
				font: "Arial",
				colour: "#e2c522",
				borderColour: "#3e6ab4",
				text: "Welcome, "+member.username,
			},
			subtitle: {
				x: canvas.width / 2,
				y: canvas.height / 2+100,
				textAlign: "center",
				fontSize: "30",
				font: "Arial",
				colour: "#e2c522",
				borderColour: "#3e6ab4",
				text: "to "+member.guild.name+"!",
			},
		}
		//1165124
		context.letterSpacing = "5px"
		context.font = `${welcomeText.title.fontSize}px "${welcomeText.title.font}"`;
		context.textAlign = welcomeText.title.textAlign;
		context.strokeStyle = welcomeText.title.borderColour;
		context.fillStyle = welcomeText.title.colour;
		context.lineWidth = 5;
		context.strokeText(welcomeText.title.text, welcomeText.title.x, welcomeText.title.y);
		context.fillText(welcomeText.title.text, welcomeText.title.x, welcomeText.title.y);

		context.font = `${welcomeText.subtitle.fontSize}px "${welcomeText.subtitle.font}"`;
		context.strokeStyle = welcomeText.subtitle.borderColour;
		context.textAlign = welcomeText.subtitle.textAlign;
		context.font = `${welcomeText.subtitle.fontSize}px "${welcomeText.subtitle.font}"`;
		context.fillStyle = welcomeText.subtitle.colour;
		context.lineWidth = 4;
		context.strokeText(welcomeText.subtitle.text, welcomeText.subtitle.x, welcomeText.subtitle.y);
		context.fillText(welcomeText.subtitle.text, welcomeText.subtitle.x, welcomeText.subtitle.y);
		//const text = formatTitle(welcomeText.title)

		context.strokeStyle = '#0099ff';
		context.strokeRect(0, 0, canvas.width, canvas.height);

		const xOffset = canvas.width/2 - 100/2;
  		const yOffset = canvas.height/2 - 100/2;
		const circle = {
			x: canvas.width / 2,
			y: canvas.height / 2,
			radius: 100/2,
		}

		context.beginPath();
		context.arc(circle.x, circle.y-50, circle.radius, 0, Math.PI * 2, true);
		context.closePath();
		context.clip();

		const { body } = await request(user.displayAvatarURL({ format: 'jpg' }));
		const avatar = new Image();
		avatar.src = Buffer.from(await body.arrayBuffer());
		context.drawImage(avatar, xOffset, yOffset-50, 100, 100);

		//context.font = '48px serif';
		//context.fillStyle = '#ffffff';
		//context.fillText('Profile', canvas.width / 2.5, canvas.height / 3.5);

		//context.font = applyText(canvas, `Welcome, ${member.username} to ${member.guild.name}!`);
		//context.fillStyle = '#ffffff';
		//context.fillText(`Welcome, ${member.username} to ${member.guild.name}!`, canvas.width / 2, canvas.height / 2);

		const attachment = new AttachmentBuilder(canvas.toBuffer('image/png'), { name: 'profile-image.png' });

		const embed = new EmbedBuilder()
			.setColor(embedColor)
			.setDescription("A user named <@"+user.id+"> joined the server.")
			.setFooter({ text: 'User ID '+ user.id })
			.setTimestamp();
		client.channels.cache.get(logsID).send({ embeds: [embed] })
		
		/*const embed2 = new EmbedBuilder()
			.setDescription('# Welcome <@'+user.id+'> to '+member.guild.name)
			.setTimestamp();*/
		client.channels.cache.get(welcomeID).send({ content: 'Welcome <@'+member.user.id+'>', files: [attachment] })
		return;

		/*var logsID = '683458185763225617'
		var welcomeID = '683458023636860981'

		const embed = new EmbedBuilder()
			.setTitle('Member Joined | '+user.username, user.avatarURL())
			.setDescription("Member <@"+user.id+"> joined "+member.guild.name)
			.setColor(embedColor)
			.setFooter({ text: 'User ID '+ user.id })
			.setTimestamp();
		client.channels.cache.get(logsID).send({ embeds: [embed] })
		
		const embed2 = new EmbedBuilder()
            .setDescription("Welcome to " + member.guild.name + ", make sure to read <#889441596683190332>\nDO NOT ask for updates or backports")
            .setColor(embedColor)
            .setTimestamp()
		client.channels.cache.get(welcomeID).send({ content: 'Welcome <@'+member.id+'>', embeds: [embed2]})
		return;*/
	}
}