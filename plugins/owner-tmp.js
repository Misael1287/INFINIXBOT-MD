
import { tmpdir } from 'os'
import path, { join } from 'path'
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {

conn.reply(m.chat, '🔹 El bot acelerado 0.001523623 milesegundos!', m)

const tmp = [tmpdir(), join(__dirname, '../tmp')]
  const filename = []
  tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
  return filename.map(file => {
    const stats = statSync(file)
    unlinkSync(file)
})
}
handler.help = ['ᴀᴄᴇʟᴇᴀʀᴀʀ']
handler.tags = ['main']
handler.command = /^(cleartmp|acelerar)$/i

handler.rowner = false

export default handler
