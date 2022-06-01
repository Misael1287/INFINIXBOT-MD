let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0] || isNaN(args[0])) throw `Introduzca un número que represente el número de días !\n*Ejemplo : ${usedPrefix + command} 30*`

    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var jumlahHari = 86400000 * args[0]
    var now = new Date() * 1
    if (now < global.db.data.chats[who].expired) global.db.data.chats[who].expired += jumlahHari
    else global.db.data.chats[who].expired = now + jumlahHari
    conn.reply(m.chat, `Se establecio correctamente un día de caducidad para este grupo durante ${args[0]} hari.\n\nCuenta regresiva : ${msToDate(global.db.data.chats[who].expired - now)}`, m)
}
handler.help = ['expired <numero>']
handler.tags = ['owner menia']
handler.command = /^(expired|addsewa)$/i
handler.owner = true
module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " dias " + hours + " horas " + minutes + " minutos";
    // +minutes+":"+sec;
}
