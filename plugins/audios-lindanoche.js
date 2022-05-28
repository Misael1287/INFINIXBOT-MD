
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/lindanoche.mp3'
conn.sendFile(m.chat, vn, 'lindanoche.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = ['noche', 'nohes']
handler.command = new RegExp
handler.help = ['ɴᴏᴄʜᴇ']
handler.tags = ['audios']
handler.fail = null
handler.exp = 100
export default handler
