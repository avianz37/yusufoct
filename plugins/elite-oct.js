import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let oct = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    
let text = `╭─● *Instagram*
┃● *Yusuf Oct*
┃➥ instagram.com/yusuf.oct
╰─●`

let inputPath = './oct.jpg'
const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './oct.png')
await conn.sendHydrated(m.chat, text, botdate + '\n\n' + wm, inputPath, global.sig, 'Instagram', null, null, [['Follow', '.oct']], m, {
contextInfo: { externalAdReply :{
                        description: stickauth,
                        title: author,
                        body: 'Jangan lupa Follow',
                        thumbnail: fs.readFileSync("./oct.jpg"),
                        sourceUrl: sig }}}) }

let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenub2
let m4 = global.dmenuf

handler.help = ['oct']
handler.tags = ['elite']
handler.command = ['oct']
export default handler
