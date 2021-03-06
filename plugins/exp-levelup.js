import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Nivel *${user.level} (${user.exp - min}/${xp})*
πΉ Tu XP actual: *${max - user.exp}*  no es suficiente para subir de nivelβ, se mas activo e inteta otra vezβΌ
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Felicidades ${conn.getName(m.sender)} has subido de nivel πΊ`
        let str = `
ββββββββββββββββββββββββββββββ  
β${teks} 
ββ’ π§¬Niveles anteriores: ${before}
ββ’ π§¬Nuevos niveles: ${user.level}
ββ’ A que hora : ${new Date().toLocaleString('id-ID')}
β*_πΊCuanto mΓ‘s interactus con el bot, mayor xp ganaras y subiras de nivelβΌ_*
ββββββββββββββββββββββββββββββ
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}


handler.help = ['Κα΄α΄ α΄Κα΄α΄ <κ±α΄Κα΄ α΄α΄ Ι΄Ιͺα΄ α΄Κ>']
handler.tags = ['exp y limites']

handler.command = /^level(|up)$/i

export default handler
