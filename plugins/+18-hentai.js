
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].antojar && m.isGroup) throw '*‼Comandos +18 desactivados, ¿Deseas activarlos? si eres administrador escribe #enable antojar.*'  
	let url = ecchi[Math.floor(Math.random() * ecchi.length)]

  await conn.sendButton(m.chat, '🔹ᴛᴏᴍᴀ ᴛᴜ ᴄᴏɴᴛᴇɴɪᴅᴏ ᴍᴀꜱᴛᴇʀ 🥵', 'Click en siguiente para ir a la siguiente imagen', url, [['SIGUIENTE ➡', `#hentai`]], m)}

handler.command = ['hentai']

handler.help = ['ʜᴇɴᴛᴀɪ']
handler.tags = ['menu 18']
 
handler.limit = 1
global.ecchi = [
	"https://preview.redd.it/efy32fvn8zv81.jpg?width=640&crop=smart&auto=webp&s=8200f495446861ae330114febc8af9fef31c4c7f",
	"https://preview.redd.it/hipk0fvn8zv81.jpg?width=640&crop=smart&auto=webp&s=67961bd619a3c2a0c84146e7fdf04c2e3e52fcec",
   "https://preview.redd.it/xevdcfvn8zv81.jpg?width=640&crop=smart&auto=webp&s=dc2a6a8273ccd84e73c5e741238b88d76a92c6c9",
   "https://preview.redd.it/ereybubf9nv81.jpg?width=640&crop=smart&auto=webp&s=fe2aff09badfa055954cc128c6cd2cc792c9aeed",
   "https://preview.redd.it/35eakhsf9nv81.jpg?width=640&crop=smart&auto=webp&s=b6cd7ddc9814d1ba9125162f68ea8e5f78e9b8c8",
   "https://preview.redd.it/4cwd9o2f9nv81.jpg?width=640&crop=smart&auto=webp&s=26ce70f30caa231fbe4b6db91b64342bf6dc7bdc",
   "https://i.redd.it/d4e3tl5g0mv81.png",
   "https://i.redd.it/tyklf7vczlv81.png",
   "https://preview.redd.it/z6qy90zhuhv81.jpg?width=640&crop=smart&auto=webp&s=0f7e501c4b5c34953445e40dc05212a95c080c4f",
   "https://preview.redd.it/72mkm4zhuhv81.jpg?width=640&crop=smart&auto=webp&s=fc41fd96249a24c96d9a59fbfd4ea59a350d78fc",
   "https://preview.redd.it/h4944rzhuhv81.jpg?width=640&crop=smart&auto=webp&s=b48b304e8265cb53d778dc4dc5a4f615b249a7ab",
   "https://external-preview.redd.it/_rO21DKU8BcLrLWaJWg7XCzRSEMs3KMu_uE5E3iH-iM.jpg?auto=webp&s=7aa5744dc05cbad2e1ef9bf401d5ca21b4647f27",
   "https://i.redd.it/bo708cyfu7v81.jpg",
   "https://i.redd.it/94oxmkna3wu81.jpg",
   "https://external-preview.redd.it/asT1sOmZMRg6oDFML6W1FpYCNumPp04YhZVd-CU8XEI.jpg?auto=webp&s=a076f282fcf614caa8c307bf5622db1d65686a5a",
   "https://external-preview.redd.it/Y4qe-1MThrVY6IbI_6DexBSvCE0TSGJmnjF6ERhz18A.jpg?auto=webp&s=93cc3aaac3888c9d705e899bfc3a1a0744d54cf4",
   "https://i.redd.it/pp9u88ic76y61.png",
   "https://i.redd.it/lb292cj8gbf71.jpg",
   "https://external-preview.redd.it/ftQ4mXjZflZtumRJ90s6gPi3phe4QsDwMFjYcdpMdBI.png?auto=webp&s=dc6f4ff5cb0a78e18fbac2e75f0863601b92a1b8",
   "https://i.redd.it/2r95zrluu7p81.jpg",
   "https://i.redd.it/8hyy0hd1y3w81.jpg",
   "https://i.redd.it/ha9ndhsy21w81.jpg",
   "https://i.redd.it/qzdqnb4w04w81.jpg",
   "https://external-preview.redd.it/tWIPTaAcyvQi5TCa4jcIZd32PSQifzDvR5dIuTtYU9U.jpg?auto=webp&s=46c97aeae0aa5e248d6564567dfbd5bce1da81a2",
   "https://external-preview.redd.it/D3AgUQ98o3iy-4hLxJhbq1MbbXzqPGrVW4bM6sC9nIE.jpg?auto=webp&s=6762375704d835050f3e33fc69e74a0cc86477b9",
   "https://external-preview.redd.it/OqKkUdSX7d0GmXT3PXUrxxdAhK6vBLhQ_BqikdFfqBE.jpg?auto=webp&s=3298fb40d362ce7258ec3398e3bbd7563fbf32a7",
   "https://i.redd.it/ng04f5nszcv81.jpg",
   "https://external-preview.redd.it/VO8Xy8z52ydcFCjhGmtpMzVhLox5mWe1HqtG1v7Namw.jpg?auto=webp&s=d0ccec8f9f4bd5a3689d80b8b6f86c8e4a2e1fd6",
   "https://preview.redd.it/4lxz394o6ss81.jpg?width=463&format=pjpg&auto=webp&s=3efc025c032b610ceffb7e579256a98bfd6f5acb",
   "https://i.redd.it/yl8nh34queq81.jpg",
   "https://i.redd.it/6ycjfwtx3dq81.jpg",
   "https://i.redd.it/r7bc35fdhhj81.jpg",
   "https://i.redd.it/n92iplbi2mv81.jpg",
   "https://preview.redd.it/u21od1swk7v81.jpg?width=640&crop=smart&auto=webp&s=580fe1734107eeb62df6603410f008bbb1ee6518",
   "https://external-preview.redd.it/GgraL8yfMqh-9dZdYBzxsMQM8uRuLe9_yzGhg-50PCA.jpg?auto=webp&s=cc5a155ff7e4c1e5a6ad7b98e36ccec7526fa4f9",
   "https://external-preview.redd.it/ANDK3Z1NaOYfIw0PmXbYy6gRCMDSTjaImjLAYjQmyXg.jpg?auto=webp&s=e141c048a497376752dfa9fbcdf54dcddb7063bb",
   "https://preview.redd.it/s2uz00hkw5r81.jpg?width=640&crop=smart&auto=webp&s=45121cad7c7142a47d40bd5d45dd8899171a0483",
   "https://i.redd.it/gyw9m6id0jq81.jpg",
   "https://i.redd.it/zbj1534c0jq81.jpg",
   "https://i.redd.it/7gh0ybot1dm81.jpg",
   "https://i.redd.it/f9dftg2qesl81.jpg",
   "https://preview.redd.it/cez83rpca8v81.jpg?width=640&crop=smart&auto=webp&s=ac75f099c8e6952f4cbddc9bc0ae183cb5f35d8d",
   "https://i.redd.it/2w16p2gi2qk81.png",
   "https://preview.redd.it/1t6s5dyk29j81.jpg?width=600&format=pjpg&auto=webp&s=2d4da1879996e3c09738e36e3b51fcd638fa3837",
   "https://external-preview.redd.it/G6IfoLno96r4T5woGbnhkhoLa6mPmOJTy7y9h2b6UMc.jpg?auto=webp&s=e6a0b7aacbae2f8349a82538decb5b399c59f12c",
   "https://preview.redd.it/vamiduisjfg81.jpg?width=640&crop=smart&auto=webp&s=8a24850eeabdfd0c274d9551ddd315b34241eb13",
   "https://i.redd.it/t6lmvryjqxd81.jpg",
   "https://i.redd.it/bvdkuu1kpk981.jpg",
   "https://i.redd.it/zicqrsulxp581.jpg",
   "https://i.redd.it/nqc4tad40i181.jpg",
   "https://i.redd.it/nqc4tad40i181.jpg",
   "https://i.redd.it/baxgiwx1qev81.jpg",
   "https://external-preview.redd.it/mFdz9NoPdgaitUWAedq_9rbsq0RliX10SzZg6A62SSs.jpg?auto=webp&s=f85e6111ea6b2b4cfe1a6e6f554e4529155f46cc",
   "https://i.redd.it/msdbyixk8ou81.jpg",
   "https://i.redd.it/4c5xyqtr7ys81.jpg",
   "https://external-preview.redd.it/u_X4VSEh8CD0ZNLdZm-Ue3vJSMuYvPnkS9s3FhrBZ0M.png?auto=webp&s=678d468fd46bddf45eb9dc241ec94232d2ea8dc7",
   "https://i.redd.it/a7j5y1ecvgs81.jpg",
   "https://i.redd.it/v1mqv9u89pv81.jpg",
   "https://i.redd.it/7v6j2hu5d4w81.jpg",
   "https://i.redd.it/2ek8ppfc93w81.jpg",
   "https://external-preview.redd.it/xaV-5lgnUfEeNTdF7DQS2GtCjyBWfAoNSN6SfE7SRqc.jpg?auto=webp&s=1242cb5495b09fd7668657334884de10d06fbe58",
   "https://i.redd.it/xmpt88au52w81.png",
   "https://i.redd.it/ltoim4dh03w81.jpg",
   "https://i.redd.it/ecjg4yv9i4w81.jpg",
   "https://i.redd.it/6bppnwra24w81.jpg",
   "https://external-preview.redd.it/lEnF_w_zrMQvdHQSoWo-_6N8Qgt24jdY4BifW-K2AS0.jpg?auto=webp&s=7d78f8b21fb0c60ba744703f313169b91846679c",
   "https://i.redd.it/z07r1gh863w81.jpg",
   "https://i.redd.it/9sbsa6qhb5w81.png",
   "https://i.redd.it/v7xmd1zgb0w81.jpg",
   "https://i.redd.it/9tx7j4lmh1w81.jpg",
   "https://i.redd.it/ppwr8ejho1w81.jpg",
   "https://i.redd.it/fafq2p8xe3w81.jpg",
   "https://i.redd.it/98wnsl5g22w81.jpg",
   "https://external-preview.redd.it/GYq1fQ76IvjgHp8CqNUZZMgxIPkHtijXhQCaZLltxeg.jpg?auto=webp&s=42b8482ae8714bb0f86946c3f99fb6bf44b11158",
   "https://external-preview.redd.it/7yfHDPluG8RHuU3pr4ZFImAnO66wAfPyyFj80hF8SYM.jpg?auto=webp&s=b241e7012474c503bc6b02e3e30b59b5f1aa5c93",
   "https://i.redd.it/6ih2svhrsuv81.jpg",
   "https://i.redd.it/m2bzdj7bpiv81.jpg",
   "https://i.redd.it/p1ije6b4ost41.jpg",
   "https://i.redd.it/13q95f5qocu81.jpg",
   "https://i.redd.it/vg0ehjb3ylg71.jpg",
   "https://preview.redd.it/srpkr2o1glt81.jpg?width=640&crop=smart&auto=webp&s=819aa1bd9962dbf36cca40317af8945b999a044e",
   "https://i.redd.it/b8frsdcro6t81.jpg",
   "https://i.redd.it/dh6btbc4kkt81.jpg",
   "https://i.redd.it/zvbn1ln0ncr81.jpg",
   "https://preview.redd.it/3ljem8nli3q81.jpg?width=640&crop=smart&auto=webp&s=b2fbaa7f8800dffd8dc521da9ad5fff05ae9abff",
   "https://external-preview.redd.it/zjv0mIQO8ldTgzONqrq5JXgqEIGWnwuhAWEYGSFBpow.png?auto=webp&s=73dbb328e58a3602ebc01c57a953d6cccec85949",
   "https://i.redd.it/7rolypikc4v81.jpg",
   "https://i.redd.it/m116okg9dnv81.jpg",
   "https://i.redd.it/yqrpup1a8lv81.png",
   "https://i.redd.it/wgtvclxakhv81.jpg",
   "https://i.redd.it/owdw6chivwu81.jpg"
]

export default handler
