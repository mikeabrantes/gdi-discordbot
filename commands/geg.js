const { SlashCommandBuilder } = require("discord.js");
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
// G&G Pannel
module.exports = {
  data: new SlashCommandBuilder()
    .setName("geg")
    .setDescription("Painel de rolagem do sistema G&G"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x2e3135)
      .setTitle("Sistema G&G! 🦝")
      .setDescription(
        "Painel de rolagem do sistema G&G, o famoso, o espetacular... Guaxinins e Gambiarras!"
      )
      .setFooter({ text: "Clique para rolar" });
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("1d6-geg")
        .setLabel("1D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("2d6-geg")
        .setLabel("2D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("3d6-geg")
        .setLabel("3D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1d2-geg")
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

// G&G Pannel
