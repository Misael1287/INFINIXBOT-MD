import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/estoytriste.mp3'
conn.sendFile(m.chat, vn, 'estoytriste.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = ['estoy triste', 'estoy mal']
handler.command = new RegExp
handler.help = ['ʀᴇᴛᴜʀʙɪᴏ']
handler.tags = ['audios']
handler.fail = null
handler.exp = 100
export default handler
