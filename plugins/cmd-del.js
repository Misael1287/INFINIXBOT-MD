let handler = async (m, { conn, usedPrefix, text, command }) => {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `🔹 ɪɴɢʀᴇꜱᴇ ᴇʟ ɴᴏᴍʙʀᴇ ᴅᴇʟ ᴄᴏᴍᴀᴍᴅᴏ`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw '🔹ɴᴏ ᴘᴜᴇᴅᴇꜱ ʙᴏʀʀᴀʀ ᴇꜱᴛᴇ ᴄᴏᴍᴀɴᴅᴏ'
    delete sticker[hash]
    m.reply(`🔹 ᴄᴏᴍᴀɴᴅᴏ ᴇʟɪᴍɪɴᴀᴅᴏ`)
}


handler.help = ['delcmd']
handler.tags = ['database']
handler.command = ['delcmd']

export default handler
