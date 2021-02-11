/*
  START: You can ignore this
*/
require("dotenv").config();

if (!process.env.BOT_TOKEN) {
  console.log("Please create an .env file with a BOT_TOKEN");
  return;
}

if (!process.env.CHANNEL_ID) {
  console.log("Please create an .env file with a CHANNEL_ID");
  return;
}
/*
  END: You can ignore this
*/

const {
  Client,
  MessageEmbed
} = require("discord.js");

const client = new Client();
const CHANNEL_ID = process.env.CHANNEL_ID;

client.login(process.env.BOT_TOKEN);

// Events
client.on("ready", readyDiscord);
client.on("warn", (info) => console.log(info));
client.on("error", console.error);
client.on("message", messageRecieved);

function readyDiscord() {
  console.log(`${client.user.username} ready!`);
}

function messageRecieved(message) {
  if (message.channel.id == CHANNEL_ID) {
    console.log(`Message Received: ${message.content}`);
    message.channel.send("Message goes here");
    if (message.content.startsWith("10/1 something")) {}
  }
}