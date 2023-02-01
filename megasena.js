const { SlashCommandBuilder } = require("discord.js");
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
// MegaSena Pannel
module.exports = {
  data: new SlashCommandBuilder()
    .setName("megasena")
    .setDescription("Painel de sorteio de números para MegaSena"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x2e3135)
      .setTitle("MegaSena! 💸")
      .setDescription(
        "Painel para sortear 6 números para apostas na MegaSena! Quem quer dinheirooooooo!?"
      )
      .setFooter({ text: "Clique para sortear" });
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("megasena")
        .setLabel("Sortear!")
        .setEmoji("1047227318579507362")
        .setStyle(ButtonStyle.Secondary)
    );

    await interaction.reply({
      embeds: [embed],
      components: [row],
    });
  },
};

// MegaSena Pannel
