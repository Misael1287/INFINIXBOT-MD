import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'ð¹ Êá´ê±á´á´É´á´á´ á´ á´É´á´ Éªá´á´É¢á´É´/á´ Éªá´á´á´'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`âââââ-ï½·ï¾ï¾ï¾ï½¾ï¾âââââ-
ð¼  *TamaÃ±o :* ${media.length} Byte(s) 
ð¼  *Vence  :* ${isTele ? '(Sin fecha de caducidad)' : '(Desconocido)'} 
ð¼  *URL    :* ${link}
âââââ-ï½·ï¾ï¾ï¾ï½¾ï¾âââââ-
  `)
}
handler.help = ['tourl']
handler.tags = ['herramientas']
handler.command = ['upload', 'tourl']

export default handler
