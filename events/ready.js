const { ActivityType } = require('discord.js');
const { embedColours, ownerID, botIDs, activity } = require('../config');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		var statusActivityType = ActivityType.Playing
		var statusActivityName = "string"
		var statusActivityState = "string"
		var activityStatus = "online"

		if(activity.type === "custom") {
			statusActivityType = ActivityType.Custom
		} else if(activity.type === "playing") {
			statusActivityType = ActivityType.Playing
		} else if(activity.type === "listening") {
			statusActivityType = ActivityType.Listening
		} else if(activity.type === "watching") {
			statusActivityType = ActivityType.Watching
		}

		if(activity.name) {
			statusActivityName = activity.name
		}

		if(activity.state) {
			statusActivityState = activity.state
		}

		if(activity.status) {
			activityStatus = activity.status
		}

		client.user.setPresence({
			activities: [{
				type: statusActivityType,
				name: statusActivityName,
				state: statusActivityState
			}],
			status: activityStatus
		})
		var logsID = botIDs.logs
		console.log("Custom Status Set")
		console.log("🟢 Bit Core: 4.0.0m Online! Logged in as "+client.user.tag)
		console.log('==== Have a good day! ====');
	},
};
