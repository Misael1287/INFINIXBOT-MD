

let handler = async (m, { conn }) => {

    let info1 = 'βπΌπΎππΈπ'


    let info
        = `
*π REGLAS DEL BOT*
- Ι΄α΄ α΄Ι΄α΄Κα΄ α΄ Ι’Κα΄α΄α΄κ± β
- α΄κ±α΄α΄ α΄Κα΄ΚΙͺΚΙͺα΄α΄ α΄ΚΙͺα΄ α΄α΄α΄ β
- α΄α΄α΄α΄κ± Κα΄α΄α΄α΄α΄α΄Ι΄ α΄κ±α΄Κ β

`
    conn.sendButton(m.chat, info1, info, author, [['MENU', `#menu`]], m)
}


handler.customPrefix = /reglas|normas/i
handler.command = new RegExp
handler.help = ['Κα΄Ι’Κα΄κ±']
handler.tags = ['main']
handler.fail = null
export default handler
