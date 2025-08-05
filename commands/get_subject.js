const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('get_subject')
        .setDescription('Fetches assignments for a specific subject.')
        .addStringOption(option =>
            option.setName('subject')
                .setDescription('The subject to fetch assignments for.')
                .setRequired(true)),
    async execute(interaction) {
        const subject = interaction.options.getString('subject');
        await interaction.reply(`Fetching assignments for subject: ${subject}`);
    },
};