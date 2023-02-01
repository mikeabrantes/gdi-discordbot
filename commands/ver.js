const { SlashCommandBuilder } = require("discord.js");
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
// VER Pannel
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ver")
    .setDescription("Painel de Rolagem Valor e Requerimento"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x2e3135)
      .setTitle("Sistema Valor e Requerimento! 🆓")
      .setDescription(
        "Painel de rolagem Valor e Requerimento, um sistema minimalista totalmente elaborado pelo Sakamoto!"
      )
      .setFooter({ text: "Clique para rolar" });

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("1d20ver")
        .setLabel("1D20")
        .setEmoji("1041379207302881370")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d6ver")
        .setLabel("1D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d100ver")
        .setLabel("1D100")
        .setEmoji("1041379209278398554")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d2ver")
        .setLabel("1D2")
        .setEmoji("1041763319536689163")
        .setStyle(ButtonStyle.Secondary)
    );

    await interaction.reply({
      embeds: [embed],
      components: [row],
    });
  },
};

// VER Pannel
