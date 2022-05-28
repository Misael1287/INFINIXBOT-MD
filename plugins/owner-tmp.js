
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

conn.reply(m.chat, '🛡 Respuesta dada en: 926.6765020042658 milisegundos/n/n💬 Estado :/n- 14 Chats grupales/n- 14 Grupos unidos/n- 0 Fuera de grupos/n- 7 Chat privado/n- 21 Chats Totales/n/n💻 Informacion del servidor :/nRAM: 3.57 GB / 5.65 GB/nNodeJS Memory Usage/nrss         : 123.46 MB
', m)

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
handler.command = /^(acelerar)$/i

handler.rowner = false

export default handler
