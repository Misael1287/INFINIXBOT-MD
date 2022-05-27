import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `🔹𝘗𝘢𝘳𝘢 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳 𝘶𝘯𝘢 𝘤𝘢𝘯𝘤𝘪𝘰́𝘯 𝘰 𝘷𝘪𝘥𝘦𝘰 𝘶𝘴𝘢 𝘤𝘰𝘮𝘰 𝘦𝘫𝘦𝘮𝘱𝘭𝘰: .play i'm happy faraon ☑`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '🔹Lo sentimos, Vídeo/Audio no encontrado❌, intente con otro nombre ☑'
  try {
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
┌───「 *REPRODUCTOR* 」
│⫹⫺  *Titulo:*
│ ${title}
│⫹⫺  *Url:* 
│ ${url}
│⫹⫺  *Descripción:* 
│ ${description}
│⫹⫺  *Publicado en:* 
│ ${publishedTime}
│⫹⫺  *Duración:* 
│ ${durationH}
│⫹⫺  *Vistas:*
│ ${viewH}
└──────────────
  `.trim(), wm, thumbnail, '', '', null, null, [
    ['Audio 🎧', `${usedPrefix}yta ${url} yes`],
    ['Video 🎥', `${usedPrefix}ytv ${url} yes`],
    ['Buscador de Youtube🔎', `${usedPrefix}buscaryt ${url}`]
  ], m)
    let info = `Video y musica en documento`.trim()  
await conn.sendHydrated(m.chat, info, wm, thumbnail, 'https://www.youtube.com', 'YOUTUBE', null, null, [
['Audio 🎧', `${usedPrefix}yta.2 ${url} yes`],
['𝘽Video 🎥', `.ytv.2 ${url} yes`]
], m,)
    
}catch(e){
m.reply('🔹Lo sentimos, hubo un error intente nuevamente')
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
