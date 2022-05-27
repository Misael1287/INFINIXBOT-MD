let handler = async (m, { conn, text, usedPrefix, command }) => {
    db.data.sticker = db.data.sticker || {}
    if (!m.quoted) throw `🔹 ʀᴇꜱᴘᴏɴᴅᴇ ᴀ ᴜɴ ꜱᴛɪᴄᴋᴇʀ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ *${usedPrefix + command}*`
    if (!m.quoted.fileSha256) throw '🔹 Falta el hash SHA256'
    if (!text) throw `🔹 Falta el comando`
    let sticker = db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) throw '⚠️ ɴᴏ ᴛɪᴇɴᴇꜱ ᴘᴇʀᴍɪꜱᴏ ᴘᴀʀᴀ ᴄᴀᴍʙɪᴀʀ ᴇꜱᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴅᴇ ꜱᴛɪᴄᴋᴇʀ'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`🔹 ᴄᴏᴍᴀɴᴅᴏ ɢᴜᴀʀᴅᴀᴅᴏ`)
}


handler.help = ['cmd'].map(v => 'set' + v + ' <txt>')
handler.tags = ['database']
handler.command = ['setcmd']

export default handler
