module.exports = {
  config: {
    name: "uptime",
aliases: ["upt"],
    version: "1.0",
    author: "OtinXSandip",
    role: 0,
    shortDescription: {
      en: "Displays the total number of users of the bot and check uptime "
    },
    longDescription: {
      en: "Displays the total number of users who have interacted with the bot and check uptime."
    },
    category: "system",
    guide: {
      en: "{n}"
    }
  },
  onStart: async function(){},
  onChat: async function ({ api, event, args, usersData, threadsData }) {
    const input = event.body;
          if(input && input.trim().toLowerCase().startsWith('upt') ||     input && input.trim().toLowerCase().startsWith('uptime')){
           const data = input.split(" ");
           data.shift();

    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();
      
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      
      const uptimeString = `${hours}Hrs ${minutes}min ${seconds}sec`;
            api.sendMessage(`𝗧𝗮𝗻𝗷𝗶𝗿𝗼 𝗞𝗮𝗺𝗮𝗱𝗼\n⏰ | Bot running time\n☞ ${uptimeString}\n\n👪 | Total Users\n☞ ${allUsers.length}\n🌸 | Total threads\n☞ ${allThreads.length}`, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
}
}; 
