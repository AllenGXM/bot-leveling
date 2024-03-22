const { Client, Intents } = require('discord.js');

// Define intents for the bot
const intents = new Intents([
    Intents.FLAGS.GUILDS, // include GUILDS intent
    Intents.FLAGS.GUILD_MESSAGES // include GUILD_MESSAGES intent
]);

// Create the first bot client
const client1 = new Client({ intents });

// Event: First bot is ready
client1.once('ready', () => {
    console.log(`Logged in as ${client1.user.tag}`);
    
    // Set the first bot's status
    client1.user.setPresence({
        activities: [{
            name: 'First bot status',
            type: 'PLAYING' // Possible types: 'PLAYING', 'WATCHING', 'LISTENING', 'STREAMING'
        }],
        status: 'online' // Possible statuses: 'online', 'idle', 'dnd', 'invisible'
    });
});

// Run the first bot with its Discord bot token from environment variable TOKEN1
client1.login(process.env.TOKEN1);

// Create the second bot client
const client2 = new Client({ intents });

// Event: Second bot is ready
client2.once('ready', () => {
    console.log(`Logged in as ${client2.user.tag}`);
    
    // Set the second bot's status
    client2.user.setPresence({
        activities: [{
            name: 'Second bot status',
            type: 'PLAYING' // Possible types: 'PLAYING', 'WATCHING', 'LISTENING', 'STREAMING'
        }],
        status: 'online' // Possible statuses: 'online', 'idle', 'dnd', 'invisible'
    });
});

// Run the second bot with its Discord bot token from environment variable TOKEN2
client2.login(process.env.TOKEN2);
