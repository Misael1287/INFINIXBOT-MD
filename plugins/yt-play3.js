import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `🔹𝘗𝘢𝘳𝘢 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳 𝘶𝘯𝘢 𝘤𝘢𝘯𝘤𝘪𝘰́𝘯 𝘰 𝘷𝘪𝘥𝘦𝘰 𝘶𝘴𝘢 𝘤𝘰𝘮𝘰 𝘦𝘫𝘦𝘮𝘱𝘭𝘰: ${usedPrefix}${command} i'm happy faraon ☑`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '🔹Lo sentimos, Vídeo/Audio no encontrado❌, intente con otro nombre ☑'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
┌───「 𝐏𝐋𝐀𝐘 𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓 」
│
│⫹⫺ 📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
│⫹⫺ 📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* ${description}
│⫹⫺ 📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* ${publishedTime}
│⫹⫺ ⌚ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* ${durationH}
│⫹⫺ 👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* ${viewH}
└───────────────────────
`.trim(), author, thumbnail, `${url}`, '𝚄𝚁𝙻', null, null, [
['𝐀𝐔𝐃𝐈𝐎', `${usedPrefix}yta.2 ${url} yes`],
['𝐕𝐈𝐃𝐄𝐎', `${usedPrefix}ytv.2 ${url} yes`]
], m)
}catch(e){
m.reply('🔹 Error vuelve a intentarlo')
console.log(e)
}}
handler.command = /^lllmd|play3|playdoc?$/i
export default handler
