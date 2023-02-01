const { SlashCommandBuilder } = require("discord.js");
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
// NFU Pannel
module.exports = {
  data: new SlashCommandBuilder()
    .setName("nfu")
    .setDescription("Painel de rolagem do sistema NFU"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x2e3135)
      .setTitle("Sistema NFU!🛸")
      .setDescription(
        "Painel de rolagem NFU, aquele sistema lá No Fim do Universo!"
      )
      .setFooter({ text: "Clique para rolar" });
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("1d6-nfu")
        .setLabel("1D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d10-nfu")
        .setLabel("1D10")
        .setEmoji("1041379204920508457")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d20-nfu")
        .setLabel("1D20")
        .setEmoji("1041379207302881370")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("2d20-nfu")
        .setLabel("2D20")
        .setEmoji("1041379207302881370")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d100-nfu")
        .setLabel("1D100")
        .setEmoji("1041379209278398554")
        .setStyle(ButtonStyle.Secondary)
    );

    await interaction.reply({
      embeds: [embed],
      components: [row],
    });
  },
};

// NFU Pannel
