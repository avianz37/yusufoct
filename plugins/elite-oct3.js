import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, command }) => {
let oct = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    
let text = `╭─● *Owner*
┃● *Yusuf Expert*
┃➥ wa.me/6283873115706
┃➥ facebook.com/yusuf.oct
┃➥ instagram.com/yusuf.expert
╰─●
*Catatan*: _Jika ada yg error, gw males benerin_.`

let res = await fetch('https://api.waifu.pics/sfw/waifu')
let img = './banner.png'
let pdf = './Project Pemuda.pdf'
const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './oct.jpg')

const yusufMsg={
    document:{'url':pdf},
    mimetype:'application/pdf',
    fileName:'Klik ini!',
    fileLength:1000000000,
    pageCount:1,
    contextInfo:{
        forwardingScore:100,
        isForwarded:false,
        externalAdReply:{
            mediaUrl:sig,
            mediaType:2,
            previewType:'Yusuf',
            title:'Yusuf Expert',
            body:'Created By Yusuf',
            thumbnail:img,
            sourceUrl:'https://wa.me/6283873115706'}},
            caption:'*OWNER*',
            footer:text+'\n\n'+botdate+'\n\n'+wm,
            buttons:[
                {'buttonId':'.menu',
                'buttonText':{
                    'displayText':'Menu'},
                    'type':1},
                {'buttonId':'...',
                'buttonText':{
                    'displayText':'\n\n*Owner Ganteng Banget( ꈍᴗꈍ)*'},
                    'type':1}
                       ],
                headerType:'Yusuf'};
                
await conn.sendMessage(m.chat,yusufMsg, {'quoted':m,'mentionedJid':[m.sender]});
}

handler.help = ['oct3']
handler.tags = ['elite']
handler.command = ['oct3']
export default handler