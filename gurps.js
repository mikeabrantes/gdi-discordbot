const { SlashCommandBuilder } = require("discord.js");
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
// gurps Pannel
module.exports = {
  data: new SlashCommandBuilder()
    .setName("gurps")
    .setDescription("Painel de rolagem do sistema GURPS"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x2e3135)
      .setTitle("Sistema GURPS! 🪤")
      .setDescription(
        "Painel de rolagem do sistema GURPS. Genérico mas muito útil!"
      )
      .setFooter({ text: "Clique para rolar" });
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("1d6-gurps")
        .setLabel("1D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("2d6-gurps")
        .setLabel("2D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("3d6-gurps")
        .setLabel("3D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary)
    );

    await interaction.reply({
      embeds: [embed],
      components: [row],
    });
  },
};

// gurps Pannel
