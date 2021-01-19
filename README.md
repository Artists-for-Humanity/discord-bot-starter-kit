# Discord Bot Starter Kit

## Setting Up a Discord Bot

If you prefer a video tutorial [this video](https://www.youtube.com/watch?v=ibtXXoMxaho&list=PLRqwX-V7Uu6avBYxeBSwF48YhAnSn_sA4&index=2) will walk you through the below steps.

1. Go to the [Discord developer portal](https://discord.com/developers/applications).
1. Click the New Application button.
1. Name your application. This is different than the name of your bot. If the bot has a specific use name it something related to that.
1. Navigate to the Bot page. You should see a link on the left hand side.
1. Click Add Bot.
1. Give it a username. This will appear in Discord.
1. Navigate to the OAuth page. You should see a link on the left hand side.
1. Select the bot checkbox in the Scopes section.
1. Select the bot permissions you think you will need. **Do not just select administrator**. If you don't know what permissions you will need you can start off with just "Send Messages".
1. Copy the link and send to Stephen.

## Getting Started

1. Make sure you set up your Discord bot using the above steps.
1. Clone the repository to your computer using the Github desktop app.
1. Copy the `.env.example` file and name it `.env`.
1. Go to the [Discord developer portal](https://discord.com/developers/applications).
1. Click on your bot application.
1. Click the bot link on the left side of the page.
1. Copy the token.
1. In the `.env` file you made replace `"PUT_YOUR_TOKEN_HERE"` with your token. You should leave the quotes around it.
1. Message Stephen for the channel ID and replace `"CHANNEL_ID"` with the channel ID. You should leave the quotes around it as well.
1. Open the project folder in terminal and run `npm install`.
1. Once that's finished run `npm run start` to start the bot.
