const Discord = require('discord.js');

// Create the first bot client
const client1 = new Discord.Client();

// Event: First bot is ready
client1.once('ready', () => {
    console.log(`Logged in as ${client1.user.tag}`);
    
    // Set the first bot's status
    client1.user.setPresence({
        activity: {
            name: 'First bot status',
            type: 'PLAYING' // Possible types: 'PLAYING', 'WATCHING', 'LISTENING', 'STREAMING'
        },
        status: 'online' // Possible statuses: 'online', 'idle', 'dnd', 'invisible'
    });
});

// Run the first bot with its Discord bot token
client1.login('YOUR_FIRST_DISCORD_BOT_TOKEN');

// Create the second bot client
const client2 = new Discord.Client();

// Event: Second bot is ready
client2.once('ready', () => {
    console.log(`Logged in as ${client2.user.tag}`);
    
    // Set the second bot's status
    client2.user.setPresence({
        activity: {
            name: 'Second bot status',
            type: 'PLAYING' // Possible types: 'PLAYING', 'WATCHING', 'LISTENING', 'STREAMING'
        },
        status: 'online' // Possible statuses: 'online', 'idle', 'dnd', 'invisible'
    });
});

// Run the second bot with its Discord bot token
client2.login('YOUR_SECOND_DISCORD_BOT_TOKEN');
