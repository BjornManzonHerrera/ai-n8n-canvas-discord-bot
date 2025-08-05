const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('answer_all')
        .setDescription('Sends all assignments to AI for answering.'),
    async execute(interaction) {
        await interaction.reply('Sending all assignments to AI for answering...');
    },
};