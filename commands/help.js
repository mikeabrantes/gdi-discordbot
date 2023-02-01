const { SlashCommandBuilder } = require("discord.js");
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
// Ajuda Pannel
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ajuda")
    .setDescription("Painel de Ajuda"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x2e3135)
      .setTitle("Me ajuda! Como funciona esse BOT!?")
      .setDescription(
        "E aí! Eu sou o GDI, o famoso (sqn) Gerador de Improbabilidade!\n Se você me chamou por esse comando então deve ter algumas dúvidas!\n Não se desespere! Pra me utilizar na sua partida de RPG e rolar alguns dados é muito simples!\n O meu criador é iniciante nessa coisa de programação...\n Então caso você tenha alguma sugestão para acrescentar mais algum painel/sistema\n Entre no servidor clicando no botão abaixo e envie no Fórum (bot-gdi)!\n Agora vamos aos atuais comandos:\n 🦝 **``/geg``** | Painel de rolagem para o Sistema G&G (Guaxinins e Gambiarras!)\n 🛸 **``/nfu``** | Painel de Rolagem para o Sistema NFU (No Fim do Universo)!\n 🗿 **``/d20``** | Painel de rolagem simples de D20!\n 🎲 **``/2d6w``** | Painel de rolagem para o Sistema 2d6World!\n 🐙 **``/coc``** | Painel de Rolagem para o Sistema CallOfCthulhu!\n 🦾 **``/cp2020``** | Painel de Rolagem para o Sistema CyberPunk 2020!\n 🐉 **``/ded``** | Painel de Rolagem para o Sistema D&D (Dungeons&Dragons)!\n 🪤 **``/gurps``** | Painel de Rolagem para o Sistema GURPS!\n 🛡 **``/t20``** | Painel de Rolagem para o Sistema Tormenta20!\n 🆓 **``/ver``** | Painel de Rolagem para o Sistema Valor e Requerimento (O sistema do Sakamoto)!\n 💸 **``/megasena``** | Painel para sortear 6 números para apostas na MegaSena! Quem quer dinheirooooooo!?"
      );
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Entrar no Servidor!")
        .setEmoji("🛸")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.gg/HExdeMamBS")
    );
    await interaction.reply({
      embeds: [embed],
      components: [row],
    });
  },
};
