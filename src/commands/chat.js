import chat from "../commands/chat.js";

const commands = {
  chat
};

export async function handleCommand(interaction) {
  if (!interaction.isChatInputCommand()) return;

  const command = commands[interaction.commandName];

  if (!command) {
    return interaction.reply("Diesen Befehl kenne ich nicht.");
  }

  try {
    await command.execute(interaction);
  } catch (err) {
    console.error(err);
    await interaction.reply("Der Befehl konnte nicht ausgeführt werden.");
  }
}
