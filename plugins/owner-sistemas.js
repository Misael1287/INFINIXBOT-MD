
let handler = async (m, { conn }) => {

let text = `๐ท ๐๐๐จ๐ฉ๐ ๐๐ ๐จ๐๐จ๐ฉ๐๐ข๐๐จ ๐ ๐๐๐๐๐ก๐๐ฉ๐๐ง ๐ค ๐๐๐จ๐๐๐๐๐ก๐๐ฉ๐๐ง ๐๐๐ก ๐๐ค๐ฉ ๐ท`


const sections = [
{
 title: `-โฆ๐ฆ๐๐ฆ๐ง๐๐ ๐๐ฆ ๐๐๐ ๐๐ข๐งโฆ-`,
 rows: [
{title: "โฆ๐ฆ.๐ฅ๐๐ฆ๐ง๐ฅ๐๐๐ง ๐๐๐ง๐๐ฉ๐๐๐ขโฆ", rowId: '.enable restrict', description:'Pulsa aqui para *ACTIVAR* el sistema RESTRICT' },
{title: "โฆ๐ฆ.๐ฅ๐๐ฆ๐ง๐ฅ๐๐๐ง ๐๐๐ฆ๐๐๐ง๐๐ฉ๐๐๐ขโโฆ", rowId: '.disable restrict', description:'Pulsa aqui Para *DESACTIVAR* el sistema RESTRICT' },   
{title: "โฆ๐๐ก๐ง๐๐๐๐ก๐ ๐๐๐ง๐๐ฉ๐๐๐ขโโฆ", rowId: '.enable antilink', description:'Pulsa aqui para *ACTIVAR* el sistema ANTILINK' },
{title: "โฆ๐๐ก๐ง๐๐๐๐ก๐ ๐๐๐ฆ๐๐๐ง๐๐ฉ๐๐๐ขโโฆ", rowId: '.disable antilink', description:'Pulsa aqui Para *DESACTIVAR* el sistema ANTILINK' },
{title: "โฆ๐๐ก๐ง๐๐ฆ๐ฃ๐๐  ๐๐๐ง๐๐ฉ๐๐๐ขโโฆ", rowId: '.enable antispam', description:'Pulsa aqui para *ACTIVAR* el sistema ANTISPAM' },
{title: "โฆ๐๐ก๐ง๐๐ฆ๐ฃ๐๐  ๐๐๐ฆ๐๐๐ง๐๐ฉ๐๐๐ขโโฆ", rowId: '.disable antispam', description:'Pulsa aqui para *DESACTIVAR* el sistema ANTISPAM' },
{title: "โฆ๐ฆ.๐๐ก๐ง๐ข๐๐๐ฅ ๐๐๐ง๐๐ฉ๐๐๐ขโโฆ", rowId: '.enable antojar', description:'Pulsa aqui para *ACTIVAR* el sistema ANTOJAR' },
{title: "โฆ๐ฆ.๐๐ก๐ง๐ข๐๐๐ฅ ๐๐๐ฆ๐๐๐ง๐๐ฉ๐๐๐ขโโฆ", rowId: '.disable antojar', description:'Pulsa aqui para *DESACTIVAR* el sistema ANTOJAR' },
{title: "โฆ๐ฆ.๐ฃ๐จ๐๐๐๐๐ข ๐๐๐ง๐๐ฉ๐๐๐ขโโฆ", rowId: '.enable public', description:'Pulsa aqui para *ACTIVAR* el sistema publico.' },
{title: "โฆ๐ฆ.๐ฃ๐จ๐๐๐๐๐ข ๐๐๐ฆ๐๐๐ง๐๐ฉ๐๐๐ขโโฆ", rowId: '.disable public', description:'Pulsa aqui para *DESACTIVAR* el sistema publico'},
{title: "โฆ๐ฆ๐ข๐๐ข ๐.๐ฃ๐ฅ๐๐ฉ๐๐๐ข ๐๐๐ง๐๐ฉ๐๐๐ขโโฆ", rowId: '.enable pconly', description:'Pulsa aqui para *ACTIVAR* el sistema de SOLO CHAT PRIVADO' },
{title: "โฆ๐ฆ๐ข๐๐ข ๐.๐ฃ๐ฅ๐๐ฉ๐๐๐ข ๐๐๐ฆ๐๐๐ง๐๐ฉ๐๐๐ขโโฆ", rowId: '.disable pconly', description:'Pulsa aqui para *DESACTIVAR* el sistema SOLO CHAT PRIVADO' }, 
{title: "โฆ๐ฆ๐ข๐๐ข ๐.๐๐ฅ๐จ๐ฃ๐๐๐๐ฆ ๐๐๐ง๐๐ฉ๐๐๐ขโโฆ", rowId: '.enable gconly', description:'Pulsa aqui para *ACTIVAR* el sistema SOLO CHATS GRUPALES.'
},
{title: "โฆ๐ฆ๐ข๐๐ข ๐.๐๐ฅ๐จ๐ฃ๐๐๐๐ฆ ๐๐๐ฆ๐๐๐ง๐๐ฉ๐๐๐ขโโฆ", rowId: '.disable gconly', description:'Pulsa aqui para *DESACTIVAR* el sistema SOLO CHATS GRUPALES.'
},
{title: "โฆ๐๐๐๐ก๐ฉ๐๐ก๐๐๐ ๐๐๐ง๐๐ฉ๐๐๐โโฆ", rowId: '.enable welcome', description:'Pulsa aqui para *ACTIVAR* el sistema de bienvenida automatico' }, 
{title: "โฆ๐๐๐๐ก๐ฉ๐๐ก๐๐๐ ๐๐๐ฆ๐๐๐ง๐๐ฉ๐๐๐โโฆ", rowId: '.disable welcome', description:'Pulsa aqui para *DESHABILITAR* el sistema de bievenida automatico.' },
{title: "โฆ๐๐จ๐ง๐ข๐ฅ๐๐๐ ๐๐๐ง๐๐ฉ๐๐๐ขโโฆ", rowId: '.enable autoread', description:'Pulsa aqui para *ACTIVAR* el sistema de leida de mensajes automatico' },  
{title: "โฆ๐๐จ๐ง๐ข๐ฅ๐๐๐ ๐๐๐ฆ๐๐๐ง๐๐ฉ๐๐๐ขโโฆ", rowId: '.disable autoread', description:'Pulsa aqui para *DESACTIVAR* el sistema de leida de mensajes automatico' }  
]}] 

const listMessage = {
    text: text,
    footer: author,
    title: '-โฆ๐ฆ๐๐ฆ๐ง๐๐ ๐๐ฆ ๐๐๐ ๐๐ข๐งโฆ-',
    buttonText: "๐น๐ฃ๐จ๐๐ฆ๐ ๐๐ค๐จ๐โผ",
    sections
  }

await conn.sendMessage(m.chat, listMessage, author, m)
 




}



handler.help = ['๊ฑษช๊ฑแดแดแดแด๊ฑ']
handler.tags = ['owner menu'] 
handler.command = ['sistemas'] 

export default handler


// lista simple a la mano de SISTEMAS del bot, by odin locote