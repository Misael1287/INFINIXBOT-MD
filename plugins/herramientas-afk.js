let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
${conn.getName(m.sender)}πΉπΌππ€π§π π¨π ππ£ππͺππ£π©π§π πΌππ ${text ? ': ' + text : ''}
`)
}
handler.help = ['α΄κ°α΄ [α΄α΄α΄Ιͺα΄ α΄]']
handler.tags = ['herramientas']
handler.command = /^afk$/i

export default handler
