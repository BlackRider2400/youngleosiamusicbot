//client token ODgyMDI2MDQ1NjM1NzA2OTIw.YS1YxA.ZSGREv22RiHIVcmvGcgs2c85uOI
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login('ODgyMDI2MDQ1NjM1NzA2OTIw.YS1YxA.ZSGREv22RiHIVcmvGcgs2c85uOI');
