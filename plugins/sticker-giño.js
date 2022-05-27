import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn}) => {
try {
if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
let res = await fetch('https://some-random-api.ml/animu/wink')
let json = await res.json()
let { link } = json
let stiker = await sticker(null, link, `+${m.sender.split('@')[0]} le hiso un giño a ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `+${user.split('@')[0]}`).join(', ')}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) { }}
handler.help = ['giño']
handler.tags = ['sticker menu']
handler.command = /^(giño|wink|giños|cerrarojo)$/i
export default handler
