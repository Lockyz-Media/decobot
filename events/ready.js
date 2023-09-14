module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		var logsID = "683458185763225617"
		console.log('Playing Status Set')
		console.log('🟢 Bit Core v10032023m Online! Logged in as '+ client.user.tag)
		console.log('==== Have a good day! ====');
	},
};
