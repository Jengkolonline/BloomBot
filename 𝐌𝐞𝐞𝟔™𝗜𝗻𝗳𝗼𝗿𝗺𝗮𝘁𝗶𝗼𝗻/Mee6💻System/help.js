const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const speed = require("performance-now");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const os = require("os");
const vers = require(`../../package.json`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍᴇᴇgit = require("simple-git")();
const fs = require("fs");
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `help`,
  commandType: `Mee6💻System`,
  description: `ɢᴇᴛ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, arg, Mee6Sitrep) {
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    await ᴍᴇᴇgit.fetch();
    var Sender = ᴍᴇᴇ6.sender;
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    const runtime = function (seconds) {
      seconds = Number(seconds);
      var d = Math.floor(seconds / (3600 * 24));
      var h = Math.floor((seconds % (3600 * 24)) / 3600);
      var m = Math.floor((seconds % 3600) / 60);
      var s = Math.floor(seconds % 60);
      var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
      var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
      var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
      return dDisplay + hDisplay + mDisplay + sDisplay;
    };
    uptime = process.uptime();
    timestampe = speed();
    latensie = speed() - timestampe;
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    let content = fs.readFileSync("./ᴍᴇᴇ6/Mee6.png");
    const media = await ʍɛɛℓιєηт.prepareMessage(
      ᴍᴇᴇ6.chatId,
      content,
      MessageType.image
    );
    const buttons = [
      {
        buttonId: `${ᴋᴇɪ}help1`,
        buttonText: { displayText: `${ᴋᴇɪ}help1` },
        type: 1,
      },
      {
        buttonId: `${ᴋᴇɪ}help2`,
        buttonText: { displayText: `${ᴋᴇɪ}help2` },
        type: 1,
      },
      {
        buttonId: `${ᴋᴇɪ}help3`,
        buttonText: { displayText: `${ᴋᴇɪ}help3` },
        type: 1,
      },
    ];
    const buttonMessage = {
      contentText: `
*Hey •@${personsending}*
シ︎💡𝐏𝐫𝐞𝐟𝐢𝐱: ${ᴋᴇɪ}
シ︎⚙️𝗩𝗲𝗿𝘀𝗶𝗼𝗻: ￫ ${vers.vers}
シ︎💻𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦: _${os.platform()}_
シ︎🛰️𝐏𝐢𝐧𝐠: _${latensie.toFixed(6)}s_
シ︎⚰️𝐔𝐩𝐓𝐢𝐦𝐞: _${runtime(process.uptime())}_
シ︎𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝐆𝐫𝐨𝐮𝐩🛸https://chat.whatsapp.com/FmMcEeSqZQw85qAkgUs3f5

*⬣ ${ᴋᴇɪ}help1* ➾  🛸𝙎𝙮𝙨𝙩𝙚𝙢
*⬣ ${ᴋᴇɪ}help2* ➾  🤩𝘼𝙣𝙞𝙢𝙚
*⬣ ${ᴋᴇɪ}help3* ➾  🎙️𝙈𝙪𝙨𝙞𝙘
*⬣ ${ᴋᴇɪ}help4* ➾  👑𝙂𝙧𝙤𝙪𝙥𝙨
*⬣ ${ᴋᴇɪ}help5* ➾  🧀𝙁𝙪𝙣𝙨
*⬣ ${ᴋᴇɪ}help6* ➾  🔞𝘼𝙙𝙪𝙡𝙩 𝙉𝙎𝙁𝙒 18+ (𝘼𝙙𝙢𝙞𝙣 𝙊𝙣𝙡𝙮)`,
      footerText: `_⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ_
*👓𝓜𝓮𝓮6™ △▽ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕-𝖀𝖘𝖊𝖗𝖇𝖔𝖙 *`,
      buttons: buttons,
      headerType: 4,
      imageMessage: media.message.imageMessage,
    };
    await ʍɛɛℓιєηт.sendMessage(
      ᴍᴇᴇ6.chatId,
      buttonMessage,
      MessageType.buttonsMessage,
      { contextInfo: { mentionedJid: [Sender] } }
    );
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
