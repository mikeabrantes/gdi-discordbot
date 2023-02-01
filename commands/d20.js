const { SlashCommandBuilder } = require("discord.js");
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  SelectMenuBuilder,
} = require("discord.js");
// D20 Pannel
module.exports = {
  data: new SlashCommandBuilder()
    .setName("d20")
    .setDescription("Painel de rolagem D20 padrão"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x2e3135)
      .setTitle("Sistema D20!🗿")
      .setDescription("Painel de rolagem D20, bem simples e fácil!")
      .setFooter({ text: "Clique para rolar" });
    const row1 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("1d20-d20")
        .setLabel("1D20")
        .setEmoji("1041379207302881370")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("2d20-d20")
        .setLabel("2D20")
        .setEmoji("1041379207302881370")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("3d20-d20")
        .setLabel("3D20")
        .setEmoji("1041379207302881370")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("4d20-d20")
        .setLabel("4D20")
        .setEmoji("1041379207302881370")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("5d20-d20")
        .setLabel("5D20")
        .setEmoji("1041379207302881370")
        .setStyle(ButtonStyle.Secondary)
    );
    await interaction.reply({
      embeds: [embed],
      components: [row1],
    });
  },
};

// D20 Pannel
