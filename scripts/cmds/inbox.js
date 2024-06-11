module.exports = {
	config: {
		name: "inbox",
		version: "1.0",
		author: "RB-BADOL-KHAN",
		role: 0,
		shortDescription: {
			en: "Adds the user to a specific thread."
		},
		longDescription: {
			en: "Adds the user to a specific thread and sends them a notification message."
		},
		category: "System",
		guide: {
			en: "Use {p}join to add yourself to the specified thread."
		}
	},
	onStart: async function ({ api, event, args }) {
		const threadID = "100004085390255"; // ID of the thread to add the user to

		try {
			await api.addUserToGroup(event.senderID, threadID);
			api.sendMessage("You have been added to the group chat. Please check your Spam or Message Request folder if you can't find the group chat.", event.senderID);
		} catch (error) {
			api.sendMessage("আসসালামু আলাইকুম আমি\n\n【•】𝐑𝐁•𝐁𝐎𝐓___//Tanijro Kamado\n\nকি হেল্প করতে পারি আপনার জন্য💚", event.senderID);
		}
	}
};
