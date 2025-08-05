const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('get_assignments')
        .setDescription('Fetches all assignments from Canvas.'),
    async execute(interaction) {
        await interaction.reply('Fetching all assignments from Canvas...');
    },
};