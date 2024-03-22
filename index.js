const { Client, ActivityType, TextChannel } = require('discord.js');
require('dotenv').config();
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('YaY Your Bot Status Changed✨');
});

app.listen(port, () => {
  console.log(`🔗 Listening to RTX: http://localhost:${port}`);
  console.log(`🔗 Powered By RTX`);
});

const statusMessages = ["Watching One Piece."];
let currentIndex = 0;

async function setupBot(token) {
  const client = new Client();

  client.once('ready', () => {
    console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
    console.log(`\x1b[36m%s\x1b[0m`, `|    ✨HAPPY NEW YEAR MY DEAR FAMILY`);
    console.log(`\x1b[36m%s\x1b[0m`, `|    ❤️WELCOME TO 2024`);
    updateStatusAndSendMessages(client);
    setInterval(() => {
      updateStatusAndSendMessages(client);
    }, 10000);
  });

  try {
    await client.login(token);
    console.log(`\x1b[36m%s\x1b[0m`, `|    🐇 Logged in as ${client.user.tag}`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

function updateStatusAndSendMessages(client) {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom }],
    status: 'dnd',
  });

  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {
    textChannel.send(`Bot status is: ${currentStatus}`);
  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

setupBot(process.env.TOKEN1); // Replace TOKEN1 with your first bot's token
setupBot(process.env.TOKEN2); // Replace TOKEN2 with your second bot's token
