

import fetch from 'node-fetch'
     let handler  = async (m, { conn, usedPrefix, heum, json,command }) => {
if (!db.data.chats[m.chat].antojar && m.isGroup) throw '*‼Comandos +18 desactivados, ¿Deseas activarlos? si eres administrador escribe #enable antojar.*'        
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/nsfw/glasses?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButton(m.chat, '🔹ᴛᴏᴍᴀ ᴛᴜ ᴄᴏɴᴛᴇɴɪᴅᴏ ᴍᴀꜱᴛᴇʀ 🥵 ', 'Click en siguiente para ir a la siguiente imagen', json, [['SIGUIENTE ➡', `${usedPrefix}glasses`]], m)
}

handler.tags = ['menu 18']
handler.help = ['ɢʟᴀꜱꜱᴇꜱ']

handler.command = /^(glasses)$/i
handler.limit = true
export default handler
