import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `๐น๐๐ข๐ณ๐ข ๐ฅ๐ฆ๐ด๐ค๐ข๐ณ๐จ๐ข๐ณ ๐ถ๐ฏ๐ข ๐ค๐ข๐ฏ๐ค๐ช๐ฐฬ๐ฏ ๐ฐ ๐ท๐ช๐ฅ๐ฆ๐ฐ ๐ถ๐ด๐ข ๐ค๐ฐ๐ฎ๐ฐ ๐ฆ๐ซ๐ฆ๐ฎ๐ฑ๐ญ๐ฐ: ${usedPrefix}${command} i'm happy faraon โ`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '๐นLo sentimos, Vรญdeo/Audio no encontradoโ, intente con otro nombre โ'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
โโโโใ ๐๐๐๐ ๐๐๐๐๐๐๐๐ ใ
โ
โโซนโซบ ๐ *๐๐ธ๐๐๐ป๐พ:* ${title}
โโซนโซบ ๐ *๐ณ๐ด๐๐ฒ๐๐ธ๐ฟ๐ฒ๐ธ๐พ๐ฝ:* ${description}
โโซนโซบ ๐ *๐ฟ๐๐ฑ๐ป๐ธ๐ฒ๐ฐ๐ณ๐พ:* ${publishedTime}
โโซนโซบ โ *๐ณ๐๐๐ฐ๐ฒ๐ธ๐พ๐ฝ:* ${durationH}
โโซนโซบ ๐ *๐๐ธ๐๐๐ฐ๐:* ${viewH}
โโโโโโโโโโโโโโโโโโโโโโโโ
`.trim(), author, thumbnail, `${url}`, '๐๐๐ป', null, null, [
['Audio ๐ง', `${usedPrefix}yta.2 ${url} yes`],
['Video ๐ฅ', `${usedPrefix}ytv.2 ${url} yes`]
], m)
}catch(e){
m.reply('๐น Error vuelve a intentarlo')
console.log(e)
}}
handler.command = /^lllmd|play3|playdoc?$/i
export default handler
