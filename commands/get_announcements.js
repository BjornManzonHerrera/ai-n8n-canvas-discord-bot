const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('get_announcements')
        .setDescription('Retrieves announcements.'),
    async execute(interaction) {
        await interaction.reply('Retrieving announcements...');
    },
};