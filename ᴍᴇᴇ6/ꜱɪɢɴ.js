// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
const fs = require(`fs`);
const { Sequelize } = require(`sequelize`);
if (fs.existsSync(`ᴍᴇᴇ6.env`)) {
  require(`dotenv`).config({
    path: `./ᴍᴇᴇ6.env`,
  });
} else {
  require(`dotenv`);
}
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
const env = {
  Mee6: process.env.Mee6 === undefined ? `` : process.env.Mee6,
  HEROKU_API:
    process.env.HEROKU_API === undefined ? "Null" : process.env.HEROKU_API,
  HEROKU_BOT_NAME:
    process.env.HEROKU_BOT_NAME === undefined
      ? "Null"
      : process.env.HEROKU_BOT_NAME,
  IMDB: `5e36f0db`,
  Mee6IX: `^[x]`,
  CCD: process.env.CCD === undefined ? `91` : process.env.CCD,
  OCR: `9ffb44def388957`,
  WAPI: `6729ac2b2e2bb5c686ff427a2f06df92`,
  DATABASE_URL: (process.env.DATABASE_URL =
    process.env.DATABASE_URL === undefined
      ? `./ᴍᴇᴇ6.db`
      : process.env.DATABASE_URL),
  POSTQL:
    process.env.DATABASE_URL === `./ᴍᴇᴇ6.db`
      ? new Sequelize({
          dialect: `sqlite`,
          storage: process.env.DATABASE_URL,
        })
      : new Sequelize(process.env.DATABASE_URL, {
          dialect: `postgres`,
          protocol: `postgres`,
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
        }),
  ERROR: "https://i.postimg.cc/q7GB8m6s/Error0.png",
  MEE: "https://i.postimg.cc/RFCw6K0Z/Mee6.png",
  INVL: "https://i.postimg.cc/v8p25RV9/Mee6-Invalid.png",
  ARC: "https://i.postimg.cc/Nf3D2RZx/Mee6-Args.png",
  UPT: "https://i.postimg.cc/FH22ny07/Meeseeks-Box.png",
  PRIVACY: process.env.PRIVACY === undefined ? `public` : process.env.PRIVACY,
  SUDO: `918250889325`,
};
module.exports = env;
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
