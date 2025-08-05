You are helping me build a Discord bot using Discord.js v14. I already have the bot and slash command system set up using Discord.js and dotenv. I need you to generate the full code for the following five slash commands. Each should be implemented as a separate module in the `commands/` folder, using the `SlashCommandBuilder` from `discord.js`.

Here's the list of commands I want:

1. /get_assignments  
   → Responds with a placeholder message like “Fetching all assignments from Canvas…”

2. /get_subject <subject>  
   → Takes a subject string input and replies with “Fetching assignments for subject: {subject}”

3. /get_announcements  
   → Replies with “Retrieving announcements…”

4. /answer_all  
   → Replies with “Sending all assignments to AI for answering…”

5. /answer_subject <subject>  
   → Takes a subject string input and replies with “Sending assignments for subject {subject} to AI for answering…”

**Requirements:**
- Use proper module exports (`module.exports = { data, execute }`)
- Each command should return early with `interaction.reply(...)` as a placeholder for now.
- Make sure to use `.setDescription()` and `.addStringOption()` where needed.

Output only the 5 command files, labeled clearly, so I can copy them into my `commands/` folder.

