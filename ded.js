const { SlashCommandBuilder } = require("discord.js");
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
// D&D Pannel
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ded")
    .setDescription("Painel de rolagem Dungeons&Dragons"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x2e3135)
      .setTitle("Sistema D&D!🐉")
      .setDescription("Painel de rolagem D&D, não é armadilha! Será um mímico?")
      .setFooter({ text: "Clique para rolar" });

    const row1 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("1d4-ded")
        .setLabel("1D4")
        .setEmoji("1041456468307755008")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d6-ded")
        .setLabel("1D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d8-ded")
        .setLabel("1D8")
        .setEmoji("1042959477659422841")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d10-ded")
        .setLabel("1D10")
        .setEmoji("1041379204920508457")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d12-ded")
        .setLabel("1D12")
        .setEmoji("1042959479722999868")
        .setStyle(ButtonStyle.Secondary)
    );
    const row2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("2d4-ded")
        .setLabel("2D4")
        .setEmoji("1041456468307755008")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("2d6-ded")
        .setLabel("2D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("2d8-ded")
        .setLabel("2D8")
        .setEmoji("1042959477659422841")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("2d10-ded")
        .setLabel("2D10")
        .setEmoji("1041379204920508457")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("2d12-ded")
        .setLabel("2D12")
        .setEmoji("1042959479722999868")
        .setStyle(ButtonStyle.Secondary)
    );
    const row3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("3d4-ded")
        .setLabel("3D4")
        .setEmoji("1041456468307755008")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("3d6-ded")
        .setLabel("3D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("3d8-ded")
        .setLabel("3D8")
        .setEmoji("1042959477659422841")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("3d10-ded")
        .setLabel("3D10")
        .setEmoji("1041379204920508457")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("3d12-ded")
        .setLabel("3D12")
        .setEmoji("1042959479722999868")
        .setStyle(ButtonStyle.Secondary)
    );
    const row4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("4d4-ded")
        .setLabel("4D4")
        .setEmoji("1041456468307755008")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("4d6-ded")
        .setLabel("4D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("4d8-ded")
        .setLabel("4D8")
        .setEmoji("1042959477659422841")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("4d10-ded")
        .setLabel("4D10")
        .setEmoji("1041379204920508457")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("4d12-ded")
        .setLabel("4D12")
        .setEmoji("1042959479722999868")
        .setStyle(ButtonStyle.Secondary)
    );
    const row5 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("1d20-ded")
        .setLabel("1D20")
        .setEmoji("1041379207302881370")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("2d20-ded")
        .setLabel("2D20")
        .setEmoji("1041379207302881370")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("3d20-ded")
        .setLabel("3D20")
        .setEmoji("1041379207302881370")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("4d20-ded")
        .setLabel("4D20")
        .setEmoji("1041379207302881370")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d100-ded")
        .setLabel("1D100")
        .setEmoji("1041379209278398554")
        .setStyle(ButtonStyle.Secondary)
    );
    await interaction.reply({
      embeds: [embed],
      components: [row1, row2, row3, row4, row5],
    });
  },
};

// D&D Pannel
