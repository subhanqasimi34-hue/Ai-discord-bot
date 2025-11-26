import { REST, Routes, ApplicationCommandOptionType } from "discord.js";

const commands = [
  {
    name: "chat",
    description: "Frag die KI etwas",
    options: [
      {
        name: "prompt",
        description: "Deine Frage oder Nachricht",
        type: ApplicationCommandOptionType.String,
        required: true
      }
    ]
  }
];

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

async function deploy() {
  try {
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );
    console.log("Slash Commands wurden registriert.");
  } catch (err) {
    console.error(err);
  }
}

deploy();
