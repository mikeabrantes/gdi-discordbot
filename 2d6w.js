const { SlashCommandBuilder } = require("discord.js");
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
// 2d6w Pannel
module.exports = {
  data: new SlashCommandBuilder()
    .setName("2d6w")
    .setDescription("Painel de rolagem do sistema 2d6World"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x2e3135)
      .setTitle("Sistema 2d6World! 🎲")
      .setDescription(
        "Painel de rolagem do sistema 2d6World. Só precisamos de d6 e muita sorte!"
      )
      .setFooter({ text: "Clique para rolar" });
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("2d6-d6w")
        .setLabel("2D6")
        .setEmoji("1041379203213439089")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("3d6-d6w")
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

// 2d6w Pannel
