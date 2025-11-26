import { Client, GatewayIntentBits } from "discord.js";
import { handleCommand } from "./handlers/commandHandler.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log(`Bot ist online als ${client.user.tag}`);
});

client.on("interactionCreate", handleCommand);

client.login(process.env.DISCORD_TOKEN);
