const { SlashCommandBuilder } = require("discord.js");
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
// FATE Pannel
module.exports = {
  data: new SlashCommandBuilder()
    .setName("fate")
    .setDescription("Painel de rolagem do sistema FATE"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x2e3135)
      .setTitle("Sistema FATE! 🟦")
      .setDescription(
        "Painel de rolagem do sistema FATE. -1, 0 e +1! EM CONSTRUÇÃO! NÃO UTILIZAR!"
      )
      .setFooter({ text: "Clique para rolar" });
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fate")
        .setLabel("fate")
        .setEmoji("1043910639686524999")
        .setStyle(ButtonStyle.Secondary)
    );

    await interaction.reply({
      embeds: [embed],
      // components: [row],
    });
  },
};

// FATE Pannel
