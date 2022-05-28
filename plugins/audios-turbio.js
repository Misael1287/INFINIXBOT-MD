
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/turbio.mp3'
conn.sendFile(m.chat, vn, 'turbio.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = ['ᴛᴜʀʙɪᴏ', 'ʀᴇᴛᴜʀʙɪᴏ']
handler.command = new RegExp
handler.help = ['ʀᴇᴛᴜʀʙɪᴏ']
handler.tags = ['audios']
handler.fail = null
handler.exp = 100
export default handler
