let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes !*`, m)
        global.db.data.users[m.sender].money = 1000000000000
        global.db.data.users[m.sender].limit = 100
        global.db.data.users[m.sender].level = 1000000000000
        
}
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^(cheat)$/i
handler.owner = false
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler
