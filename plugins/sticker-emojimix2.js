import MessageType from '@adiwajshing/baileys'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
import fs from "fs"

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})})

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `🔹 Ejemplo : .emojimix2 🙄`
let [emoji, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let stiker = await sticker(false, res.url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
}}

handler.help = ['ᴇᴍᴏᴊɪᴍɪx2 <ᴇᴍᴏᴊɪ>']
handler.tags = ['sticker']
handler.command = ['emojimix2'] 
handler.limit = false

export default handler
