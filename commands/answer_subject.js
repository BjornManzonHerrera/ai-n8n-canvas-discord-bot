const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('answer_subject')
        .setDescription('Sends assignments for a specific subject to AI for answering.')
        .addStringOption(option =>
            option.setName('subject')
                .setDescription('The subject to send assignments for.')
                .setRequired(true)),
    async execute(interaction) {
        const subject = interaction.options.getString('subject');
        await interaction.reply(`Sending assignments for subject ${subject} to AI for answering...`);
    },
};