import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].antojar && m.isGroup) throw '*‼Comandos +18 desactivados, ¿Deseas activarlos? si eres administrador escribe #enable antojar.*'
  var {age} = db.data.users[m.sender] 
   
   let pw = ["https://meme-api.herokuapp.com/gimme/pussy", "https://meme-api.herokuapp.com/gimme/LegalTeens"] 
 let nk = pw[Math.floor(Math.random() * pw.length)]
    let res = await fetch(nk)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '🔹 Error'
    conn.sendButton(m.chat, '🔹 Aquí tienes', igfg, json.url, [['▷▷ Siguiente', `${usedPrefix + command }`]], m)
}
handler.help = ['ᴘᴜꜱꜱʏ']
handler.tags = ['menu 18']
handler.command = ['pussy']
handler.limit = true
handler.register = false



export default handler
