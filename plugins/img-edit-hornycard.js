let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/horny', {
    avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'hornycard.png', '๐๐๐๐๐ฃ๐๐๐ ๐ฅ๐๐ง๐ ๐๐ฃ๐๐๐ง ๐๐๐๐ฃ ๐๐ค๐ฉ ๐ฅต', m)
}

handler.help = ['สแดสษดสแดแดสแด']
handler.tags = ['img edit']

handler.command = /^(horny(card|license))$/i

export default handler