import { spawn } from 'child_process'
import { format } from 'util'

let handler = async (m, { conn, usedPrefix, command }) => {
    if (!global.support.convert &&
        !global.support.magick &&
        !global.support.gm) return handler.disabled = true // Disable if doesnt support
    const notStickerMessage = `๐น๐ฅ๐ฒ๐๐ฝ๐ผ๐ป๐ฑ๐ฒ ๐ฎ๐น ๐๐๐ถ๐ฐ๐ธ๐ฒ๐ฟ ๐ฐ๐ผ๐ป ๐ฒ๐น ๐ฐ๐ผ๐บ๐ฎ๐ป๐ฑ๐ผ: *${usedPrefix + command}*`
    if (!m.quoted) throw notStickerMessage
    let q = m.quoted
    if (/sticker/.test(q.mediaType)) {
        let sticker = await q.download()
        if (!sticker) throw sticker
        let bufs = []
        const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []), 'convert', 'webp:-', 'png:-']
        let im = spawn(_spawnprocess, _spawnargs)
        im.on('error', e => m.reply(format(e)))
        im.stdout.on('data', chunk => bufs.push(chunk))
        im.stdin.write(sticker)
        im.stdin.end()
        im.on('exit', () => {
            conn.sendFile(m.chat, Buffer.concat(bufs), 'image.png', author, m)
        })
    } else throw notStickerMessage
}
handler.help = ['แดแดpng (สแด๊ฑแดแดษดแดแด)']
handler.tags = ['sticker menu']
handler.command = /^topng$/i

export default handler