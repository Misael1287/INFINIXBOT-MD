

let handler = async (m, { conn }) => {

    let info1 = 'ℝ𝔼𝔾𝕃𝔸𝕊'


    let info
        = `
*📄 REGLAS DEL BOT*
- ɴᴏ ᴇɴᴛʀᴀ ᴀ ɢʀᴜᴘᴏꜱ ❎
- ᴇꜱᴛᴀ ᴘʀᴏʜɪʙɪᴅᴏ ᴘʀɪᴠᴀᴅᴏ ❎
- ᴛᴏᴅᴏꜱ ʟᴏᴘᴜᴇᴅᴇɴ ᴜꜱᴀʀ ✅

`
    conn.sendButton(m.chat, info1, info, author, [['MENU', `#menu`]], m)
}


handler.customPrefix = /reglas|normas/i
handler.command = new RegExp
handler.help = ['ʀᴇɢʟᴀꜱ']
handler.tags = ['main']
handler.fail = null
export default handler
