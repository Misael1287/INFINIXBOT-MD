import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Nivel *${user.level} (${user.exp - min}/${xp})*
🔹 Tu XP actual: *${max - user.exp}*  no es suficiente para subir de nivel❌, se mas activo e inteta otra vez‼
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Felicidades ${conn.getName(m.sender)} has subido de nivel 🔺`
        let str = `
╔═════════════════════════════  
║${teks} 
║• 🧬Niveles anteriores: ${before}
║• 🧬Nuevos niveles: ${user.level}
║• A que hora : ${new Date().toLocaleString('id-ID')}
║*_🔺Cuanto más interactus con el bot, mayor xp ganaras y subiras de nivel‼_*
╚═════════════════════════════
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}


handler.help = ['ʟᴇᴠᴇʟᴜᴘ <ꜱᴜʙᴇ ᴅᴇ ɴɪᴠᴇʟ>']
handler.tags = ['exp y limites']

handler.command = /^level(|up)$/i

export default handler
