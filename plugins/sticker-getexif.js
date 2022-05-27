import { format } from 'util'
const { default: { Image } } = await import('node-webpmux')

let handler = async (m) => {
    if (!m.quoted) return m.reply('🔹¡Etiqueta el stiker!')
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new Image()
        await img.load(await m.quoted.download())
        m.reply(format(JSON.parse(img.exif.slice(22).toString())))
    }
}
handler.help = ['ᴇxᴀᴍɪɴᴀʀ']
handler.tags = ['sticker menu']

handler.command = ['getexif', ' ᴇxᴀᴍɪɴᴀʀ']

export default handler
