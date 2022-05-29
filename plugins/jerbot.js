

let handler = async (m, { conn }) => {

    let info1 = '🅐🅨🅤🅓🅐'


    let info
        = `
⁉ INFORMACION SOBRE SUBBOT 💡
    
Este bot no admite el jadibot o sub bots debido a que puede llegar a ser incontrolable.

puesdes hacer tu propio bot aqui: https://telegra.ph/BOT-05-28-4
`
    conn.sendButton(m.chat, info1, info, author, [['MENU', `#menu`]], m)
}


handler.customPrefix = /ayuda|terminos|infobot|informacion|dildo|botmorto/i
handler.command = new RegExp
handler.help = ['ᴀʏᴜᴅᴀ']
handler.tags = ['main']
handler.fail = null
export default handler
