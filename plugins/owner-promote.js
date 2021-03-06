import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    let promoteUser = []
    for (let user of users)
        if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
            const res = await conn.groupParticipantsUpdate(m.chat, [user], 'promote')
            await delay(1 * 1000)
        }
    m.reply('๐น๐ฃ๐ฟ๐ผ๐บ๐ผ๐๐ถ๐ฑ๐ผ ๐ฎ ๐ฎ๐ฑ๐บ๐ถ๐ป๐ถ๐๐๐ฟ๐ฎ๐ฑ๐ผ๐ฟ ๐ฐ๐ผ๐ป ๐ฒ๐๐ถ๐๐ผ โ')

}
handler.help = ['แดสแดแดแดver @usuario']
handler.tags = ['grupos', 'owner menu']
handler.command = /^(promover)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))