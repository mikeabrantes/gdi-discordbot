const { Events, SelectMenuInteraction } = require("discord.js");
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isButton()) return;
    try {
      const user = interaction.user.id;
      switch (interaction.customId) {
        // MegaSena
        case "megasena":
          const megasena1 = randomIntFromInterval(1, 60);
          const megasena2 = randomIntFromInterval(1, 60);
          const megasena3 = randomIntFromInterval(1, 60);
          const megasena4 = randomIntFromInterval(1, 60);
          const megasena5 = randomIntFromInterval(1, 60);
          const megasena6 = randomIntFromInterval(1, 60);
          await interaction.reply(
            `__**\`\`MEGASENA\`\`**__ | <@${user}> Sorteou <:megasena:1047227318579507362>\n ► **${megasena1}** | **${megasena2}** | **${megasena3}** | **${megasena4}** | **${megasena5}** | **${megasena6}**`
          );
          break;
        // G&G
        case "1d6-geg":
          const gegd6a = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`1D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089>\n ► **${gegd6a}**`
          );
          break;
        case "2d6-geg":
          const gegdd6a = randomIntFromInterval(1, 6);
          const gegdd6b = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`2D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${gegdd6a}** | **${gegdd6b}**`
          );
          break;
        case "3d6-geg":
          const gegddd6a = randomIntFromInterval(1, 6);
          const gegddd6b = randomIntFromInterval(1, 6);
          const gegddd6c = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`3D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${gegddd6a}** | **${gegddd6b}** | **${gegddd6c}**`
          );
          break;
        case "1d2-geg":
          const gegd2a = randomIntFromInterval(1, 2);
          await interaction.reply(
            `__**\`\`1D2\`\`**__ | <@${user}> Rolou <:d2:1041763319536689163>\n ► **${gegd2a}**`
          );
          break;
        //D20
        case "1d20-d20":
          const d20a = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`1D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370>\n ► **${d20a}**`
          );
          break;
        case "2d20-d20":
          const dd20a = randomIntFromInterval(1, 20);
          const dd20b = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`2D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370><:d20:1041379207302881370>\n ► **${dd20a}** | **${dd20b}**`
          );
          break;
        case "3d20-d20":
          const ddd20a = randomIntFromInterval(1, 20);
          const ddd20b = randomIntFromInterval(1, 20);
          const ddd20c = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`3D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370><:d20:1041379207302881370><:d20:1041379207302881370>\n ► **${ddd20a}** | **${ddd20b}** | **${ddd20c}**`
          );
          break;
        case "4d20-d20":
          const dddd20a = randomIntFromInterval(1, 20);
          const dddd20b = randomIntFromInterval(1, 20);
          const dddd20c = randomIntFromInterval(1, 20);
          const dddd20d = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`4D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370><:d20:1041379207302881370><:d20:1041379207302881370><:d20:1041379207302881370>\n ► **${dddd20a}** | **${dddd20b}** | **${dddd20c}** | **${dddd20d}**`
          );
          break;
        case "5d20-d20":
          const ddddd20a = randomIntFromInterval(1, 20);
          const ddddd20b = randomIntFromInterval(1, 20);
          const ddddd20c = randomIntFromInterval(1, 20);
          const ddddd20d = randomIntFromInterval(1, 20);
          const ddddd20e = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`5D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370><:d20:1041379207302881370><:d20:1041379207302881370><:d20:1041379207302881370>\n ► **${ddddd20a}** | **${ddddd20b}** | **${ddddd20c}** | **${ddddd20d}** | **${ddddd20e}**`
          );
          break;
        // NFU
        case "1d6-nfu":
          const nfud6a = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`1D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089>\n ► **${nfud6a}**`
          );
          break;
        case "1d10-nfu":
          const nfud10a = randomIntFromInterval(1, 10);
          await interaction.reply(
            `__**\`\`1D10\`\`**__ | <@${user}> Rolou <:d10:1041379204920508457>\n ► **${nfud10a}**`
          );
          break;
        case "1d20-nfu":
          const nfud20a = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`1D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370>\n ► **${nfud20a}**`
          );
          break;
        case "2d20-nfu":
          const nfudd20a = randomIntFromInterval(1, 20);
          const nfudd20b = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`2D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370><:d20:1041379207302881370>\n ► **${nfudd20a}** | **${nfudd20b}**`
          );
          break;
        case "1d100-nfu":
          const nfud100a = randomIntFromInterval(1, 100);
          await interaction.reply(
            `__**\`\`1D100\`\`**__ | <@${user}> Rolou <:d100:1041379209278398554>\n ► **${nfud100a}**`
          );
          break;
        case "1d4-nfu":
          const nfud4a = randomIntFromInterval(1, 4);
          await interaction.reply(
            `__**\`\`1D4\`\`**__ | <@${user}> Rolou <:d4:1041456468307755008>\n ► **${nfud4a}**`
          );
          break;
        // VER
        case "1d20ver":
          const verd20a = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`1D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370>\n ► **${verd20a}**`
          );
          break;
        case "1d6ver":
          const verd6a = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`1D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089>\n ► **${verd6a}**`
          );
          break;
        case "1d100ver":
          const verd100a = randomIntFromInterval(1, 100);
          await interaction.reply(
            `__**\`\`1D100\`\`**__ | <@${user}> Rolou <:d100:1041379209278398554>\n ► **${verd100a}**`
          );
          break;
        case "1d2ver":
          const verd2a = randomIntFromInterval(1, 2);
          await interaction.reply(
            `__**\`\`1D2\`\`**__ | <@${user}> Rolou <:d2:1041763319536689163>\n ► **${verd2a}**`
          );
          break;
        // CyberPunk
        case "1d6-cp2020":
          const cpd6a = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`1D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089>\n ► **${cpd6a}**`
          );
          break;
        case "2d6-cp2020":
          const cpdd6a = randomIntFromInterval(1, 6);
          const cpdd6b = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`2D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${cpdd6a}** | **${cpdd6b}**`
          );
          break;
        case "3d6-cp2020":
          const cpddd6a = randomIntFromInterval(1, 6);
          const cpddd6b = randomIntFromInterval(1, 6);
          const cpddd6c = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`3D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${cpddd6a}** | **${cpddd6b}** | **${cpddd6c}**`
          );
          break;
        case "1d10-cp2020":
          const cpd10a = randomIntFromInterval(1, 10);
          await interaction.reply(
            `__**\`\`1D10\`\`**__ | <@${user}> Rolou <:d10:1041379204920508457>\n ► **${cpd10a}**`
          );
          break;
        case "2d10-cp2020":
          const cpdd10a = randomIntFromInterval(1, 10);
          const cpdd10b = randomIntFromInterval(1, 10);
          await interaction.reply(
            `__**\`\`2D10\`\`**__ | <@${user}> Rolou <:d10:1041379204920508457><:d10:1041379204920508457>\n ► **${cpdd10a}** | **${cpdd10b}**`
          );
          break;
        //D&D ----------------------------------------------------------------
        // Row1
        case "1d4-ded":
          const dedd4a = randomIntFromInterval(1, 4);
          await interaction.reply(
            `__**\`\`1D4\`\`**__ | <@${user}> Rolou <:d4:1041456468307755008>\n ► **${dedd4a}**`
          );
          break;
        case "1d6-ded":
          const dedd6a = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`1D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089>\n ► **${dedd6a}**`
          );
          break;
        case "1d8-ded":
          const dedd8a = randomIntFromInterval(1, 8);
          await interaction.reply(
            `__**\`\`1D8\`\`**__ | <@${user}> Rolou <:d8:1042959477659422841>\n ► **${dedd8a}**`
          );
          break;
        case "1d10-ded":
          const dedd10a = randomIntFromInterval(1, 10);
          await interaction.reply(
            `__**\`\`1D10\`\`**__ | <@${user}> Rolou <:d10:1041379204920508457>\n ► **${dedd10a}**`
          );
          break;
        case "1d12-ded":
          const dedd12a = randomIntFromInterval(1, 12);
          await interaction.reply(
            `__**\`\`1D12\`\`**__ | <@${user}> Rolou <:d12:1042959479722999868>\n ► **${dedd12a}**`
          );
          break;
        //Row2
        case "2d4-ded":
          const deddd4a = randomIntFromInterval(1, 4);
          const deddd4b = randomIntFromInterval(1, 4);
          await interaction.reply(
            `__**\`\`2D4\`\`**__ | <@${user}> Rolou <:d4:1041456468307755008><:d4:1041456468307755008>\n ► **${deddd4a}** | **${deddd4b}**`
          );
          break;
        case "2d6-ded":
          const deddd6a = randomIntFromInterval(1, 6);
          const deddd6b = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`2D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${deddd6a}** | **${deddd6b}**`
          );
          break;
        case "2d8-ded":
          const deddd8a = randomIntFromInterval(1, 8);
          const deddd8b = randomIntFromInterval(1, 8);
          await interaction.reply(
            `__**\`\`2D8\`\`**__ | <@${user}> Rolou <:d8:1042959477659422841><:d8:1042959477659422841>\n ► **${deddd8a}** | **${deddd8b}**`
          );
          break;
        case "2d10-ded":
          const deddd10a = randomIntFromInterval(1, 10);
          const deddd10b = randomIntFromInterval(1, 10);
          await interaction.reply(
            `__**\`\`2D10\`\`**__ | <@${user}> Rolou <:d10:1041379204920508457><:d10:1041379204920508457>\n ► **${deddd10a}** | **${deddd10b}**`
          );
          break;
        case "2d12-ded":
          const deddd12a = randomIntFromInterval(1, 12);
          const deddd12b = randomIntFromInterval(1, 12);
          await interaction.reply(
            `__**\`\`2D12\`\`**__ | <@${user}> Rolou <:d12:1042959479722999868><:d12:1042959479722999868>\n ► **${deddd12a}** | **${deddd12b}**`
          );
          break;
        //Row3
        case "3d4-ded":
          const dedddd4a = randomIntFromInterval(1, 4);
          const dedddd4b = randomIntFromInterval(1, 4);
          const dedddd4c = randomIntFromInterval(1, 4);
          await interaction.reply(
            `__**\`\`3D4\`\`**__ | <@${user}> Rolou <:d4:1041456468307755008><:d4:1041456468307755008><:d4:1041456468307755008>\n ► **${dedddd4a}** | **${dedddd4b}** | **${dedddd4c}**`
          );
          break;
        case "3d6-ded":
          const dedddd6a = randomIntFromInterval(1, 6);
          const dedddd6b = randomIntFromInterval(1, 6);
          const dedddd6c = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`3D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${dedddd6a}** | **${dedddd6b}** | **${dedddd6c}**`
          );
          break;
        case "3d8-ded":
          const dedddd8a = randomIntFromInterval(1, 8);
          const dedddd8b = randomIntFromInterval(1, 8);
          const dedddd8c = randomIntFromInterval(1, 8);
          await interaction.reply(
            `__**\`\`3D8\`\`**__ | <@${user}> Rolou <:d8:1042959477659422841><:d8:1042959477659422841><:d8:1042959477659422841>\n ► **${dedddd8a}** | **${dedddd8b}** | **${dedddd8c}**`
          );
          break;
        case "3d10-ded":
          const dedddd10a = randomIntFromInterval(1, 10);
          const dedddd10b = randomIntFromInterval(1, 10);
          const dedddd10c = randomIntFromInterval(1, 10);
          await interaction.reply(
            `__**\`\`3D10\`\`**__ | <@${user}> Rolou <:d10:1041379204920508457><:d10:1041379204920508457><:d10:1041379204920508457>\n ► **${dedddd10a}** | **${dedddd10b}** | **${dedddd10c}**`
          );
          break;
        case "3d12-ded":
          const dedddd12a = randomIntFromInterval(1, 12);
          const dedddd12b = randomIntFromInterval(1, 12);
          const dedddd12c = randomIntFromInterval(1, 12);
          await interaction.reply(
            `__**\`\`3D12\`\`**__ | <@${user}> Rolou <:d12:1042959479722999868><:d12:1042959479722999868><:d12:1042959479722999868>\n ► **${dedddd12a}** | **${dedddd12b}** | **${dedddd12c}**`
          );
          break;
        //Row4
        case "4d4-ded":
          const deddddd4a = randomIntFromInterval(1, 4);
          const deddddd4b = randomIntFromInterval(1, 4);
          const deddddd4c = randomIntFromInterval(1, 4);
          const deddddd4d = randomIntFromInterval(1, 4);
          await interaction.reply(
            `__**\`\`4D4\`\`**__ | <@${user}> Rolou <:d4:1041456468307755008><:d4:1041456468307755008><:d4:1041456468307755008><:d4:1041456468307755008>\n ► **${deddddd4a}** | **${deddddd4b}** | **${deddddd4c}** | **${deddddd4d}**`
          );
          break;
        case "4d6-ded":
          const deddddd6a = randomIntFromInterval(1, 6);
          const deddddd6b = randomIntFromInterval(1, 6);
          const deddddd6c = randomIntFromInterval(1, 6);
          const deddddd6d = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`4D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089><:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${deddddd6a}** | **${deddddd6b}** | **${deddddd6c}** | **${deddddd6d}**`
          );
          break;
        case "4d8-ded":
          const deddddd8a = randomIntFromInterval(1, 8);
          const deddddd8b = randomIntFromInterval(1, 8);
          const deddddd8c = randomIntFromInterval(1, 8);
          const deddddd8d = randomIntFromInterval(1, 8);
          await interaction.reply(
            `__**\`\`4D8\`\`**__ | <@${user}> Rolou <:d8:1042959477659422841><:d8:1042959477659422841><:d8:1042959477659422841><:d8:1042959477659422841>\n ► **${deddddd8a}** | **${deddddd8b}** | **${deddddd8c}** | **${deddddd8d}**`
          );
          break;
        case "4d10-ded":
          const deddddd10a = randomIntFromInterval(1, 10);
          const deddddd10b = randomIntFromInterval(1, 10);
          const deddddd10c = randomIntFromInterval(1, 10);
          const deddddd10d = randomIntFromInterval(1, 10);
          await interaction.reply(
            `__**\`\`4D10\`\`**__ | <@${user}> Rolou <:d10:1041379204920508457><:d10:1041379204920508457><:d10:1041379204920508457><:d10:1041379204920508457>\n ► **${deddddd10a}** | **${deddddd10b}** | **${deddddd10c}** | **${deddddd10d}**`
          );
          break;
        case "4d12-ded":
          const deddddd12a = randomIntFromInterval(1, 12);
          const deddddd12b = randomIntFromInterval(1, 12);
          const deddddd12c = randomIntFromInterval(1, 12);
          const deddddd12d = randomIntFromInterval(1, 12);
          await interaction.reply(
            `__**\`\`4D12\`\`**__ | <@${user}> Rolou <:d12:1042959479722999868><:d12:1042959479722999868><:d12:1042959479722999868><:d12:1042959479722999868>\n ► **${deddddd12a}** | **${deddddd12b}** | **${deddddd12c}** | **${deddddd12d}**`
          );
          break;
        //Row5
        case "1d20-ded":
          const dedd20a = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`1D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370>\n ► **${dedd20a}**`
          );
          break;
        case "2d20-ded":
          const deddd20a = randomIntFromInterval(1, 20);
          const deddd20b = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`2D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370><:d20:1041379207302881370>\n ► **${deddd20a}** | **${deddd20b}**`
          );
          break;
        case "3d20-ded":
          const dedddd20a = randomIntFromInterval(1, 20);
          const dedddd20b = randomIntFromInterval(1, 20);
          const dedddd20c = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`3D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370><:d20:1041379207302881370><:d20:1041379207302881370>\n ► **${dedddd20a}** | **${dedddd20b}** | **${dedddd20c}**`
          );
          break;
        case "4d20-ded":
          const deddddd20a = randomIntFromInterval(1, 20);
          const deddddd20b = randomIntFromInterval(1, 20);
          const deddddd20c = randomIntFromInterval(1, 20);
          const deddddd20d = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`4D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370><:d20:1041379207302881370><:d20:1041379207302881370><:d20:1041379207302881370>\n ► **${deddddd20a}** | **${deddddd20b}** | **${deddddd20c}** | **${deddddd20d}**`
          );
          break;
        case "1d100-ded":
          const dedd100a = randomIntFromInterval(1, 100);
          await interaction.reply(
            `__**\`\`1D100\`\`**__ | <@${user}> Rolou <:d100:1041379209278398554>\n ► **${dedd100a}**`
          );
          break;

        //CallOfCthulhu ----------------------------------------------------------------
        // Row1
        case "1d4-coc":
          const cocd4a = randomIntFromInterval(1, 4);
          await interaction.reply(
            `__**\`\`1D4\`\`**__ | <@${user}> Rolou <:d4:1041456468307755008>\n ► **${cocd4a}**`
          );
          break;
        case "1d6-coc":
          const cocd6a = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`1D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089>\n ► **${cocd6a}**`
          );
          break;
        case "1d8-coc":
          const cocd8a = randomIntFromInterval(1, 8);
          await interaction.reply(
            `__**\`\`1D8\`\`**__ | <@${user}> Rolou <:d8:1042959477659422841>\n ► **${cocd8a}**`
          );
          break;
        case "1d10-coc":
          const cocd10a = randomIntFromInterval(1, 10);
          await interaction.reply(
            `__**\`\`1D10\`\`**__ | <@${user}> Rolou <:d10:1041379204920508457>\n ► **${cocd10a}**`
          );
          break;
        case "1d12-coc":
          const cocd12a = randomIntFromInterval(1, 12);
          await interaction.reply(
            `__**\`\`1D12\`\`**__ | <@${user}> Rolou <:d12:1042959479722999868>\n ► **${cocd12a}**`
          );
          break;
        //Row2
        case "2d4-coc":
          const cocdd4a = randomIntFromInterval(1, 4);
          const cocdd4b = randomIntFromInterval(1, 4);
          await interaction.reply(
            `__**\`\`2D4\`\`**__ | <@${user}> Rolou <:d4:1041456468307755008><:d4:1041456468307755008>\n ► **${cocdd4a}** | **${cocdd4b}**`
          );
          break;
        case "2d6-coc":
          const cocdd6a = randomIntFromInterval(1, 6);
          const cocdd6b = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`2D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${cocdd6a}** | **${cocdd6b}**`
          );
          break;
        case "2d8-coc":
          const cocdd8a = randomIntFromInterval(1, 8);
          const cocdd8b = randomIntFromInterval(1, 8);
          await interaction.reply(
            `__**\`\`2D8\`\`**__ | <@${user}> Rolou <:d8:1042959477659422841><:d8:1042959477659422841>\n ► **${cocdd8a}** | **${cocdd8b}**`
          );
          break;
        case "2d10-coc":
          const cocdd10a = randomIntFromInterval(1, 10);
          const cocdd10b = randomIntFromInterval(1, 10);
          await interaction.reply(
            `__**\`\`2D10\`\`**__ | <@${user}> Rolou <:d10:1041379204920508457><:d10:1041379204920508457>\n ► **${cocdd10a}** | **${cocdd10b}**`
          );
          break;
        case "2d12-coc":
          const cocdd12a = randomIntFromInterval(1, 12);
          const cocdd12b = randomIntFromInterval(1, 12);
          await interaction.reply(
            `__**\`\`2D12\`\`**__ | <@${user}> Rolou <:d12:1042959479722999868><:d12:1042959479722999868>\n ► **${cocdd12a}** | **${cocdd12b}**`
          );
          break;
        //Row3
        case "3d4-coc":
          const cocddd4a = randomIntFromInterval(1, 4);
          const cocddd4b = randomIntFromInterval(1, 4);
          const cocddd4c = randomIntFromInterval(1, 4);
          await interaction.reply(
            `__**\`\`3D4\`\`**__ | <@${user}> Rolou <:d4:1041456468307755008><:d4:1041456468307755008><:d4:1041456468307755008>\n ► **${cocddd4a}** | **${cocddd4b}** | **${cocddd4c}**`
          );
          break;
        case "3d6-coc":
          const cocddd6a = randomIntFromInterval(1, 6);
          const cocddd6b = randomIntFromInterval(1, 6);
          const cocddd6c = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`3D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${cocddd6a}** | **${cocddd6b}** | **${cocddd6c}**`
          );
          break;
        case "3d8-coc":
          const cocddd8a = randomIntFromInterval(1, 8);
          const cocddd8b = randomIntFromInterval(1, 8);
          const cocddd8c = randomIntFromInterval(1, 8);
          await interaction.reply(
            `__**\`\`3D8\`\`**__ | <@${user}> Rolou <:d8:1042959477659422841><:d8:1042959477659422841><:d8:1042959477659422841>\n ► **${cocddd8a}** | **${cocddd8b}** | **${cocddd8c}**`
          );
          break;
        case "3d10-coc":
          const cocddd10a = randomIntFromInterval(1, 10);
          const cocddd10b = randomIntFromInterval(1, 10);
          const cocddd10c = randomIntFromInterval(1, 10);
          await interaction.reply(
            `__**\`\`3D10\`\`**__ | <@${user}> Rolou <:d10:1041379204920508457><:d10:1041379204920508457><:d10:1041379204920508457>\n ► **${cocddd10a}** | **${cocddd10b}** | **${cocddd10c}**`
          );
          break;
        case "3d12-coc":
          const cocddd12a = randomIntFromInterval(1, 12);
          const cocddd12b = randomIntFromInterval(1, 12);
          const cocddd12c = randomIntFromInterval(1, 12);
          await interaction.reply(
            `__**\`\`3D12\`\`**__ | <@${user}> Rolou <:d12:1042959479722999868><:d12:1042959479722999868><:d12:1042959479722999868>\n ► **${cocddd12a}** | **${cocddd12b}** | **${cocddd12c}**`
          );
          break;
        //Row4
        case "4d4-coc":
          const cocdddd4a = randomIntFromInterval(1, 4);
          const cocdddd4b = randomIntFromInterval(1, 4);
          const cocdddd4c = randomIntFromInterval(1, 4);
          const cocdddd4d = randomIntFromInterval(1, 4);
          await interaction.reply(
            `__**\`\`4D4\`\`**__ | <@${user}> Rolou <:d4:1041456468307755008><:d4:1041456468307755008><:d4:1041456468307755008><:d4:1041456468307755008>\n ► **${cocdddd4a}** | **${cocdddd4b}** | **${cocdddd4c}** | **${cocdddd4d}**`
          );
          break;
        case "4d6-coc":
          const cocdddd6a = randomIntFromInterval(1, 6);
          const cocdddd6b = randomIntFromInterval(1, 6);
          const cocdddd6c = randomIntFromInterval(1, 6);
          const cocdddd6d = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`4D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089><:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${cocdddd6a}** | **${cocdddd6b}** | **${cocdddd6c}** | **${cocdddd6d}**`
          );
          break;
        case "4d8-coc":
          const cocdddd8a = randomIntFromInterval(1, 8);
          const cocdddd8b = randomIntFromInterval(1, 8);
          const cocdddd8c = randomIntFromInterval(1, 8);
          const cocdddd8d = randomIntFromInterval(1, 8);
          await interaction.reply(
            `__**\`\`4D8\`\`**__ | <@${user}> Rolou <:d8:1042959477659422841><:d8:1042959477659422841><:d8:1042959477659422841><:d8:1042959477659422841>\n ► **${cocdddd8a}** | **${cocdddd8b}** | **${cocdddd8c}** | **${cocdddd8d}**`
          );
          break;
        case "4d10-coc":
          const cocdddd10a = randomIntFromInterval(1, 10);
          const cocdddd10b = randomIntFromInterval(1, 10);
          const cocdddd10c = randomIntFromInterval(1, 10);
          const cocdddd10d = randomIntFromInterval(1, 10);
          await interaction.reply(
            `__**\`\`4D10\`\`**__ | <@${user}> Rolou <:d10:1041379204920508457><:d10:1041379204920508457><:d10:1041379204920508457><:d10:1041379204920508457>\n ► **${cocdddd10a}** | **${cocdddd10b}** | **${cocdddd10c}** | **${cocdddd10d}**`
          );
          break;
        case "4d12-coc":
          const cocdddd12a = randomIntFromInterval(1, 12);
          const cocdddd12b = randomIntFromInterval(1, 12);
          const cocdddd12c = randomIntFromInterval(1, 12);
          const cocdddd12d = randomIntFromInterval(1, 12);
          await interaction.reply(
            `__**\`\`4D12\`\`**__ | <@${user}> Rolou <:d12:1042959479722999868><:d12:1042959479722999868><:d12:1042959479722999868><:d12:1042959479722999868>\n ► **${cocdddd12a}** | **${cocdddd12b}** | **${cocdddd12c}** | **${cocdddd12d}**`
          );
          break;
        //Row5
        case "1d20-coc":
          const cocd20a = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`1D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370>\n ► **${cocd20a}**`
          );
          break;
        case "2d20-coc":
          const cocdd20a = randomIntFromInterval(1, 20);
          const cocdd20b = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`2D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370><:d20:1041379207302881370>\n ► **${cocdd20a}** | **${cocdd20b}**`
          );
          break;
        case "3d20-coc":
          const cocddd20a = randomIntFromInterval(1, 20);
          const cocddd20b = randomIntFromInterval(1, 20);
          const cocddd20c = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`3D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370><:d20:1041379207302881370><:d20:1041379207302881370>\n ► **${cocddd20a}** | **${cocddd20b}** | **${cocddd20c}**`
          );
          break;
        case "4d20-coc":
          const cocdddd20a = randomIntFromInterval(1, 20);
          const cocdddd20b = randomIntFromInterval(1, 20);
          const cocdddd20c = randomIntFromInterval(1, 20);
          const cocdddd20d = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`4D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370><:d20:1041379207302881370><:d20:1041379207302881370><:d20:1041379207302881370>\n ► **${cocdddd20a}** | **${cocdddd20b}** | **${cocdddd20c}** | **${cocdddd20d}**`
          );
          break;
        case "1d100-coc":
          const cocd100a = randomIntFromInterval(1, 100);
          await interaction.reply(
            `__**\`\`1D100\`\`**__ | <@${user}> Rolou <:d100:1041379209278398554>\n ► **${cocd100a}**`
          );
          break;

        //Tormenta20 ----------------------------------------------------------------
        // Row1
        case "1d4-t20":
          const t20d4a = randomIntFromInterval(1, 4);
          await interaction.reply(
            `__**\`\`1D4\`\`**__ | <@${user}> Rolou <:d4:1041456468307755008>\n ► **${t20d4a}**`
          );
          break;
        case "1d6-t20":
          const t20d6a = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`1D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089>\n ► **${t20d6a}**`
          );
          break;
        case "1d8-t20":
          const t20d8a = randomIntFromInterval(1, 8);
          await interaction.reply(
            `__**\`\`1D8\`\`**__ | <@${user}> Rolou <:d8:1042959477659422841>\n ► **${t20d8a}**`
          );
          break;
        case "1d10-t20":
          const t20d10a = randomIntFromInterval(1, 10);
          await interaction.reply(
            `__**\`\`1D10\`\`**__ | <@${user}> Rolou <:d10:1041379204920508457>\n ► **${t20d10a}**`
          );
          break;
        case "1d12-t20":
          const t20d12a = randomIntFromInterval(1, 12);
          await interaction.reply(
            `__**\`\`1D12\`\`**__ | <@${user}> Rolou <:d12:1042959479722999868>\n ► **${t20d12a}**`
          );
          break;
        //Row2
        case "2d4-t20":
          const t20dd4a = randomIntFromInterval(1, 4);
          const t20dd4b = randomIntFromInterval(1, 4);
          await interaction.reply(
            `__**\`\`2D4\`\`**__ | <@${user}> Rolou <:d4:1041456468307755008><:d4:1041456468307755008>\n ► **${t20dd4a}** | **${t20dd4b}**`
          );
          break;
        case "2d6-t20":
          const t20dd6a = randomIntFromInterval(1, 6);
          const t20dd6b = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`2D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${t20dd6a}** | **${t20dd6b}**`
          );
          break;
        case "2d8-t20":
          const t20dd8a = randomIntFromInterval(1, 8);
          const t20dd8b = randomIntFromInterval(1, 8);
          await interaction.reply(
            `__**\`\`2D8\`\`**__ | <@${user}> Rolou <:d8:1042959477659422841><:d8:1042959477659422841>\n ► **${t20dd8a}** | **${t20dd8b}**`
          );
          break;
        case "2d10-t20":
          const t20dd10a = randomIntFromInterval(1, 10);
          const t20dd10b = randomIntFromInterval(1, 10);
          await interaction.reply(
            `__**\`\`2D10\`\`**__ | <@${user}> Rolou <:d10:1041379204920508457><:d10:1041379204920508457>\n ► **${t20dd10a}** | **${t20dd10b}**`
          );
          break;
        case "2d12-t20":
          const t20dd12a = randomIntFromInterval(1, 12);
          const t20dd12b = randomIntFromInterval(1, 12);
          await interaction.reply(
            `__**\`\`2D12\`\`**__ | <@${user}> Rolou <:d12:1042959479722999868><:d12:1042959479722999868>\n ► **${t20dd12a}** | **${t20dd12b}**`
          );
          break;
        //Row3
        case "3d4-t20":
          const t20ddd4a = randomIntFromInterval(1, 4);
          const t20ddd4b = randomIntFromInterval(1, 4);
          const t20ddd4c = randomIntFromInterval(1, 4);
          await interaction.reply(
            `__**\`\`3D4\`\`**__ | <@${user}> Rolou <:d4:1041456468307755008><:d4:1041456468307755008><:d4:1041456468307755008>\n ► **${t20ddd4a}** | **${t20ddd4b}** | **${t20ddd4c}**`
          );
          break;
        case "3d6-t20":
          const t20ddd6a = randomIntFromInterval(1, 6);
          const t20ddd6b = randomIntFromInterval(1, 6);
          const t20ddd6c = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`3D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${t20ddd6a}** | **${t20ddd6b}** | **${t20ddd6c}**`
          );
          break;
        case "3d8-t20":
          const t20ddd8a = randomIntFromInterval(1, 8);
          const t20ddd8b = randomIntFromInterval(1, 8);
          const t20ddd8c = randomIntFromInterval(1, 8);
          await interaction.reply(
            `__**\`\`3D8\`\`**__ | <@${user}> Rolou <:d8:1042959477659422841><:d8:1042959477659422841><:d8:1042959477659422841>\n ► **${t20ddd8a}** | **${t20ddd8b}** | **${t20ddd8c}**`
          );
          break;
        case "3d10-t20":
          const t20ddd10a = randomIntFromInterval(1, 10);
          const t20ddd10b = randomIntFromInterval(1, 10);
          const t20ddd10c = randomIntFromInterval(1, 10);
          await interaction.reply(
            `__**\`\`3D10\`\`**__ | <@${user}> Rolou <:d10:1041379204920508457><:d10:1041379204920508457><:d10:1041379204920508457>\n ► **${t20ddd10a}** | **${t20ddd10b}** | **${t20ddd10c}**`
          );
          break;
        case "3d12-t20":
          const t20ddd12a = randomIntFromInterval(1, 12);
          const t20ddd12b = randomIntFromInterval(1, 12);
          const t20ddd12c = randomIntFromInterval(1, 12);
          await interaction.reply(
            `__**\`\`3D12\`\`**__ | <@${user}> Rolou <:d12:1042959479722999868><:d12:1042959479722999868><:d12:1042959479722999868>\n ► **${t20ddd12a}** | **${t20ddd12b}** | **${t20ddd12c}**`
          );
          break;
        //Row4
        case "4d4-t20":
          const t20dddd4a = randomIntFromInterval(1, 4);
          const t20dddd4b = randomIntFromInterval(1, 4);
          const t20dddd4c = randomIntFromInterval(1, 4);
          const t20dddd4d = randomIntFromInterval(1, 4);
          await interaction.reply(
            `__**\`\`4D4\`\`**__ | <@${user}> Rolou <:d4:1041456468307755008><:d4:1041456468307755008><:d4:1041456468307755008><:d4:1041456468307755008>\n ► **${t20dddd4a}** | **${t20dddd4b}** | **${t20dddd4c}** | **${t20dddd4d}**`
          );
          break;
        case "4d6-t20":
          const t20dddd6a = randomIntFromInterval(1, 6);
          const t20dddd6b = randomIntFromInterval(1, 6);
          const t20dddd6c = randomIntFromInterval(1, 6);
          const t20dddd6d = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`4D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089><:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${t20dddd6a}** | **${t20dddd6b}** | **${t20dddd6c}** | **${t20dddd6d}**`
          );
          break;
        case "4d8-t20":
          const t20dddd8a = randomIntFromInterval(1, 8);
          const t20dddd8b = randomIntFromInterval(1, 8);
          const t20dddd8c = randomIntFromInterval(1, 8);
          const t20dddd8d = randomIntFromInterval(1, 8);
          await interaction.reply(
            `__**\`\`4D8\`\`**__ | <@${user}> Rolou <:d8:1042959477659422841><:d8:1042959477659422841><:d8:1042959477659422841><:d8:1042959477659422841>\n ► **${t20dddd8a}** | **${t20dddd8b}** | **${t20dddd8c}** | **${t20dddd8d}**`
          );
          break;
        case "4d10-t20":
          const t20dddd10a = randomIntFromInterval(1, 10);
          const t20dddd10b = randomIntFromInterval(1, 10);
          const t20dddd10c = randomIntFromInterval(1, 10);
          const t20dddd10d = randomIntFromInterval(1, 10);
          await interaction.reply(
            `__**\`\`4D10\`\`**__ | <@${user}> Rolou <:d10:1041379204920508457><:d10:1041379204920508457><:d10:1041379204920508457><:d10:1041379204920508457>\n ► **${t20dddd10a}** | **${t20dddd10b}** | **${t20dddd10c}** | **${t20dddd10d}**`
          );
          break;
        case "4d12-t20":
          const t20dddd12a = randomIntFromInterval(1, 12);
          const t20dddd12b = randomIntFromInterval(1, 12);
          const t20dddd12c = randomIntFromInterval(1, 12);
          const t20dddd12d = randomIntFromInterval(1, 12);
          await interaction.reply(
            `__**\`\`4D12\`\`**__ | <@${user}> Rolou <:d12:1042959479722999868><:d12:1042959479722999868><:d12:1042959479722999868><:d12:1042959479722999868>\n ► **${t20dddd12a}** | **${t20dddd12b}** | **${t20dddd12c}** | **${t20dddd12d}**`
          );
          break;
        //Row5
        case "1d20-t20":
          const t20d20a = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`1D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370>\n ► **${t20d20a}**`
          );
          break;
        case "2d20-t20":
          const t20dd20a = randomIntFromInterval(1, 20);
          const t20dd20b = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`2D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370><:d20:1041379207302881370>\n ► **${t20dd20a}** | **${t20dd20b}**`
          );
          break;
        case "3d20-t20":
          const t20ddd20a = randomIntFromInterval(1, 20);
          const t20ddd20b = randomIntFromInterval(1, 20);
          const t20ddd20c = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`3D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370><:d20:1041379207302881370><:d20:1041379207302881370>\n ► **${t20ddd20a}** | **${t20ddd20b}** | **${t20ddd20c}**`
          );
          break;
        case "4d20-t20":
          const t20dddd20a = randomIntFromInterval(1, 20);
          const t20dddd20b = randomIntFromInterval(1, 20);
          const t20dddd20c = randomIntFromInterval(1, 20);
          const t20dddd20d = randomIntFromInterval(1, 20);
          await interaction.reply(
            `__**\`\`4D20\`\`**__ | <@${user}> Rolou <:d20:1041379207302881370><:d20:1041379207302881370><:d20:1041379207302881370><:d20:1041379207302881370>\n ► **${t20dddd20a}** | **${t20dddd20b}** | **${t20dddd20c}** | **${t20dddd20d}**`
          );
          break;
        case "1d100-t20":
          const t20d100a = randomIntFromInterval(1, 100);
          await interaction.reply(
            `__**\`\`1D100\`\`**__ | <@${user}> Rolou <:d100:1041379209278398554>\n ► **${t20d100a}**`
          );
          break;

        // GURPS
        case "1d6-gurps":
          const gurpsd6a = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`1D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089>\n ► **${gurpsd6a}**`
          );
          break;
        case "2d6-gurps":
          const gurpsdd6a = randomIntFromInterval(1, 6);
          const gurpsdd6b = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`2D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${gurpsdd6a}** | **${gurpsdd6b}**`
          );
          break;
        case "3d6-gurps":
          const gurpsddd6a = randomIntFromInterval(1, 6);
          const gurpsddd6b = randomIntFromInterval(1, 6);
          const gurpsddd6c = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`3D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${gurpsddd6a}** | **${gurpsddd6b}** | **${gurpsddd6c}**`
          );
          break;

        // 2d6World
        case "2d6-d6w":
          const d6wdd6a = randomIntFromInterval(1, 6);
          const d6wdd6b = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`2D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${d6wdd6a}** | **${d6wdd6b}**`
          );
          break;
        case "3d6-d6w":
          const d6wddd6a = randomIntFromInterval(1, 6);
          const d6wddd6b = randomIntFromInterval(1, 6);
          const d6wddd6c = randomIntFromInterval(1, 6);
          await interaction.reply(
            `__**\`\`3D6\`\`**__ | <@${user}> Rolou <:d6:1041379203213439089><:d6:1041379203213439089><:d6:1041379203213439089>\n ► **${d6wddd6a}** | **${d6wddd6b}** | **${d6wddd6c}**`
          );
          break;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
