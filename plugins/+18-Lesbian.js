

import axios from "axios"
let handler = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].antojar && m.isGroup) throw '*‼Comandos +18 desactivados, ¿Deseas activarlos? si eres administrador escribe #enable antojar.*'    
let res = await axios("https://meme-api.herokuapp.com/gimme/lesbians")
let json = res.data
let url = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButton(m.chat, '🔹ᴛᴏᴍᴀ ᴛᴜ ᴄᴏɴᴛᴇɴɪᴅᴏ ᴍᴀꜱᴛᴇʀ 🥵 ', 'Click en siguiente para ir a la siguiente imagen', json.url, [['SIGUIENTE ➡', `${usedPrefix}lesbian`]], m)}


handler.help = ['ʟᴇꜱʙɪᴀɴ']
handler.tags = ['menu 18']
handler.command = /^(lesbian)$/i
handler.limit   = 1
export default handler
