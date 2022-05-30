import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw 'Que es lo que buscas ?'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
📌 *${v.title}* (${v.url})
⌚ Duration: ${v.durationH}
⏲️ Uploaded ${v.publishedTime}
👁️ ${v.view} views
      `.trim()
      case 'channel': return `
📌 *${v.channelName}* (${v.url})
🧑‍🤝‍🧑 _${v.subscriberH} (${v.subscriber}) Suscriptores
🎥 ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n========================\n\n')
  m.reply(teks)
}
handler.help = ['ʙᴜꜱᴄᴀʀʏᴛ']
handler.tags = ['descargas', 'herramientas']
handler.command = /buscaryt|ytsearch/i
handler.limit = false
export default handler
