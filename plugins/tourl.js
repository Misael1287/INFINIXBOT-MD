import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '🔹 ʀᴇꜱᴘᴏɴᴅᴇ ᴀ ᴜɴᴀ ɪᴍᴀɢᴇɴ/ᴠɪᴅᴇᴏ'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`—————-ｷﾘﾄﾘｾﾝ—————-
🔼  *Tamaño :* ${media.length} Byte(s) 
🔼  *Vence  :* ${isTele ? '(Sin fecha de caducidad)' : '(Desconocido)'} 
🔼  *URL    :* ${link}
—————-ｷﾘﾄﾘｾﾝ—————-
  `)
}
handler.help = ['tourl']
handler.tags = ['herramientas']
handler.command = ['upload', 'tourl']

export default handler
