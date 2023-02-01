const { SlashCommandBuilder } = require("discord.js");
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
// T20 Pannel
module.exports = {
  data: new SlashCommandBuilder()
    .setName("t20")
    .setDescription("Painel de rolagem Tormenta20"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x2e3135)
      .setTitle("Sistema Tormenta20! 🛡")
      .setDescription(
        "Painel de rolagem Tormenta20! Existem 20 deuses no panteão, qual deles você quer que eu te ajude a conhecer mais cedo?"
      )
      .setFooter({ text: "Clique para rolar" });

    const row1 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("1d4-t20")
        .setLabel("1D4")
        .setEmoji("1041456468307755008")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d6-t20")
        .setLabel("1D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d8-t20")
        .setLabel("1D8")
        .setEmoji("1042959477659422841")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d10-t20")
        .setLabel("1D10")
        .setEmoji("1041379204920508457")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d12-t20")
        .setLabel("1D12")
        .setEmoji("1042959479722999868")
        .setStyle(ButtonStyle.Secondary)
    );
    const row2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("2d4-t20")
        .setLabel("2D4")
        .setEmoji("1041456468307755008")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("2d6-t20")
        .setLabel("2D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("2d8-t20")
        .setLabel("2D8")
        .setEmoji("1042959477659422841")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("2d10-t20")
        .setLabel("2D10")
        .setEmoji("1041379204920508457")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("2d12-t20")
        .setLabel("2D12")
        .setEmoji("1042959479722999868")
        .setStyle(ButtonStyle.Secondary)
    );
    const row3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("3d4-t20")
        .setLabel("3D4")
        .setEmoji("1041456468307755008")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("3d6-t20")
        .setLabel("3D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("3d8-t20")
        .setLabel("3D8")
        .setEmoji("1042959477659422841")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("3d10-t20")
        .setLabel("3D10")
        .setEmoji("1041379204920508457")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("3d12-t20")
        .setLabel("3D12")
        .setEmoji("1042959479722999868")
        .setStyle(ButtonStyle.Secondary)
    );
    const row4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("4d4-t20")
        .setLabel("4D4")
        .setEmoji("1041456468307755008")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("4d6-t20")
        .setLabel("4D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("4d8-t20")
        .setLabel("4D8")
        .setEmoji("1042959477659422841")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("4d10-t20")
        .setLabel("4D10")
        .setEmoji("1041379204920508457")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("4d12-t20")
        .setLabel("4D12")
        .setEmoji("1042959479722999868")
        .setStyle(ButtonStyle.Secondary)
    );
    const row5 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("1d20-t20")
        .setLabel("1D20")
        .setEmoji("1041379207302881370")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("2d20-t20")
        .setLabel("2D20")
        .setEmoji("1041379207302881370")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("3d20-t20")
        .setLabel("3D20")
        .setEmoji("1041379207302881370")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("4d20-t20")
        .setLabel("4D20")
        .setEmoji("1041379207302881370")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d100-t20")
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

// T20 Pannel
