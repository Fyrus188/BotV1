/*
* "Jangan modal nama doang bro!!!"
* (Scriptnya maslent)
* jangan ubah semuanya kecuali nama bot instagram yt itu ajah yg lain jangan!!!
* hargai pembuat skrip woy!!!
*/
const XPTN = 'XONTOL BOT'; // Nama Bot Whatsapp
const instagram = 'https://instagram.com/IndraFajri64'; // Nama Instagramlu cok
const nomer = 'https://Wa.me/+6285226087964'; // Nomor whatsapplu cok
const aktif = '2 jam'; // Kapan bot lu aktif
const groupwa = 'https://chat.whatsapp.com/KvnrobWpHgXEKqYwzQMTTi'; // OFFICIAL GRUP LU 1
const youtube = 'https://youtu.be/affmdx7mskM'; // OFFICIAL GRUP LU 2
//
const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const imageToBase64 = require('image-to-base64');
const xp = require("./lib/xp.js");
const donate = require("./lib/donate.js");
const info = require("./lib/info.js");
const xp1 = require("./lib/xp1.js");
const xp2 = require("./lib/xp2.js");
const xp3 = require("./lib/xp3.js");
const xp4 = require("./lib/xp4.js");
const xp5 = require("./lib/xp5.js");
const readTextInImage = require('./lib/ocr')
//
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] BANGLENT Ready scan now!`);
});

conn.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated$`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @maslent`))
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @maslent`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);
   // Groups

if (text.includes(".buatgrup"))
   {
var nama = text.split(".buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("created group with id: " + group.gid)
conn.sendMessage(group.gid, "hello everyone", MessageType.extendedText) // say hello to everyone on the group

}

// FF XP-TN
if(text.includes(".cek")){
var num = text.replace(/.cek/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+'@s.whatsapp.net'

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`${gg} ${exists ? " exists " : " does not exist"} on WhatsApp`, MessageType.text)
}

//Chat XP-TN
else if (text == 'Ranklist){
conn.sendMessage(id, '*[»] RANK ONEBLOCK*

*VIP* : Harga 25k Via Pulsa Telkomsel | 15k Via Gopay Untuk Melihat Fitur Rank VIP . Silahkan Ketik = VIPob

*VIP+* : Harga 50k Via Pulsa Telkomsel | 40k Via Gopay Untuk Melihat Fitur Rank VIP+ . Silahkan Ketik = VIPLob+

*[»] RANK SKYGRID*

*VIP* : Harga 20k Via Pulsa Telkomsel | 15k Via Gopay Untuk Melihat Fitur Rank VIP . Silahkan Ketik = VIPsky

*VIP+* : Harga 40k Via Pulsa Telkomsel | 30k Via Gopay Untuk Melihat Fitur Rank VIP+ . Silahkan Ketik = VIPsky+

*MVP* : Harga 70k Via Pulsa Telkomsel | 55k Via Gopay Untuk Melihat Fitur Rank MVP . Silahkan Ketik = MVPsky

*MVP+* : Harga 150k Via Telkomsel | 130k Via Gopay Untuk Melihat Fitur MVP+ . Silahkan Ketik = MVPsky+

*MVP++* : Harga 200k Via Telkomsel | 180k Via Gopay Untuk Melihat Fitur MVP++ . Silahkan Ketik = MVPsky++

*[»] RANK RAFT SURVIVAL*

*VIP* : Harga 20k Via Pulsa Telkomsel | 15k Via Gopay Untuk Melihat Fitur Rank VIP . Silahkan Ketik = VIPraft

*VIP+* : Harga 40k Via Pulsa Telkomsel | 30k Via Gopay Untuk Melihat Fitur Rank VIP+ . Silahkan Ketik = VIPLraft+

*MVP* : Harga 70k Via Pulsa Telkomsel | 55k Via Gopay Untuk Melihat Fitur Rank MVP . Silahkan Ketik = MVPraft

*MVP+* : Harga 150k Via Telkomsel | 130k Via Gopay Untuk Melihat Fitur MVP+ . Silahkan Ketik = MVPraft+

*MVP++* : Harga 200k Via Telkomsel | 180k Via Gopay Untuk Melihat Fitur MVP++ . Silahkan Ketik = MVPLraft++' ,MessageType.text);
}
else if (text == 'Belirank'){
conn.sendMessage(id, 'Mau beli rank? chat owner http://Wa.me/6281351658537' ,MessageType.text);
}
else if (text == 'Rank'){
conn.sendMessage(id, '[> *Rank Server LebahNetwork* <]


*[»] RANK ACID ISLAND 1 & 2*

*VIP* : Harga 20k Via Pulsa Telkomsel | 15k Via Gopay Untuk Melihat Fitur Rank VIP . Silahkan Ketik = VIPai

*VIP+* : Harga 40k Via Pulsa Telkomsel | 30k Via Gopay Untuk Melihat Fitur Rank VIP+ . Silahkan Ketik = VIPLai+

*MVP* : Harga 70k Via Pulsa Telkomsel | 55k Via Gopay Untuk Melihat Fitur Rank MVP . Silahkan Ketik = MVPai

*MVP+* : Harga 150k Via Telkomsel | 130k Via Gopay Untuk Melihat Fitur MVP+ . Silahkan Ketik = MVPLai+

*MVP++* : Harga 200k Via Telkomsel | 180k Via Gopay Untuk Melihat Fitur MVP++ . Silahkan Ketik = MVPLai++

*[»] RANK SURVIVAL 1 & 2*

*VIP* : Harga 20k Via Pulsa Telkomsel | 15k Via Gopay Untuk Melihat Fitur Rank VIP . Silahkan Ketik = VIPs

*VIP+* : Harga 40k Via Pulsa Telkomsel | 30k Via Gopay Untuk Melihat Fitur Rank VIP+ . Silahkan Ketik = VIPLs+

*MVP* : Harga 70k Via Pulsa Telkomsel | 50k Via Gopay Untuk Melihat Fitur Rank MVP . Silahkan Ketik = MVPs

*MVP+* : Harga 150k Via Pulsa Telkomsel | 130k Via Gopay Untuk Melihat Fitur Rank MVP+ . Silahkan 
Ketik = MVPLs+

*MVP++* : Harga 200k Via Telkomsel | 180k Via Gopay Untuk Melihat Fitur MVP++ . Silahkan Ketik = MVPLs++

*[»] RANK SKYBLOCK*

*VIP* : Harga 20k Via Pulsa Telkomsel | 15k Via Gopay Untuk Melihat Fitur Rank VIP . Silahkan Ketik = VIPsb

*VIP+* : Harga 40k Via Pulsa Telkomsel | 30k Via Gopay Untuk Melihat Fitur Rank VIP+ . Silahkan Ketik = VIPLsb+

*MVP* : Harga 70k Via Pulsa Telkomsel | 50k Via Gopay Untuk Melihat Fitur Rank MVP . Silahkan Ketik = MVPsb

*MVP+* : Harga 150k Via Pulsa Telkomsel | 130k Via Gopay Untuk Melihat Fitur Rank MVP+ . Silahkan Ketik = MVPLsb+

*MVP++* : Harga 200k Via Pulsa Telkomsel | 180k Via Gopay Untuk Melihat Fitur Rank MVP++ . Silahkan Ketik = MVPLsb++' ,MessageType.text);
}
else if (text == 'VIPai'){
conn.sendMessage(id, '*[»] Fitur Rank VIP*

- Fly › Untuk Terbang
- Heal › Untuk Mengisi Bar Darah
- Feed › Untuk Mengisi Bar Makanan

*[»] Harga Rank VIP*

- 20k Via Pulsa Telkomsel | 15k Via Gopay

»« Mau Beli Rank Server? Ketik = BeliRank AcidIsland' ,MessageType.text);
}
else if (text == 'VIPLai+'){
conn.sendMessage(id, '*[»] Fitur Rank VIP+*

- Fly › Untuk Terbang
- Heal › Untuk Mengisi Bar Darah
- Feed › Untuk Mengisi Bar Makanan
- Pui › Untuk Mendapatkan Semua Particle

*[»] Harga Rank VIP+*

- 40k Via Pulsa Telkomsel | 30k Via Gopay

»« Mau Beli Rank Server? Ketik = BeliRank AcidIsland' ,MessageType.text);
}
else if (text == 'MVPai'){
conn.sendMessage(id, '*[»] Fitur Rank VIP+*

- Fly › Untuk Terbang
- Heal › Untuk Mengisi Bar Darah
- Feed › Untuk Mengisi Bar Makanan
- Pui › Untuk Mendapatkan Semua Particle

*[»] Harga Rank VIP+*

- 40k Via Pulsa Telkomsel | 30k Via Gopay

»« Mau Beli Rank Server? Ketik = BeliRank AcidIsland' ,MessageType.text);
}
else if (text == 'MVPLai+'){
conn.sendMessage(id, '*[»] Fitur Rank MVP+*

- Fly › Untuk Terbang
- Heal › Untuk Mengisi Bar Darah
- Feed › Untuk Mengisi Bar Makanan
- Pui › Untuk Mendapatkan Semua Particle
- Cape › Untuk Mendapatkan Semua Jubah
- Say › Untuk Memberi Pesan Khusus Kepada Player
- Repair › Memperbaiki Tools Yang Mau Rusak
- God › Memberikan Mode God Untuk Bertahan 
- Size › Untuk Membuat Size Menjadi Besar / Kecil

*[»] Harga Rank MVP+*

- 150k Via Pulsa Telkomsel | 130k Via Gopay

»« Mau Beli Rank Server? Ketik = BeliRank AcidIsland' ,MessageType.text);
}
else if (text == 'MVPLai++'){
conn.sendMessage(id, '*[»] Fitur Rank MVP++*

- Fly › Untuk Terbang
- Heal › Untuk Mengisi Bar Darah
- Feed › Untuk Mengisi Bar Makanan
- Pui › Untuk Mendapatkan Semua Particle
- Cape › Untuk Mendapatkan Semua Jubah
- Say › Untuk Memberi Pesan Khusus Kepada Player
- Repair › Memperbaiki Tools Yang Mau Rusak
- God › Memberikan Mode God Untuk Bertahan 
- Teleport › Untuk Teleport Ke Player Lain
- Vanish › Untuk Merubah Jadi Invisible
- Size › Untuk Membuat Size Menjadi Besar / Kecil
› Nick › Untuk Mengganti Nickname Player

*[»] Harga Rank MVP++*

- 200k Via Pulsa Telkomsel | 180k Via Gopay

»« Mau Beli Rank Server? Ketik = BeliRank AcidIsland' ,MessageType.text);
}
else if (text == 'VIPs'){
conn.sendMessage(id, '*[»] Fitur Rank VIP*

- Fly › Untuk Terbang
- Heal › Untuk Mengisi Bar Darah
- Feed › Untuk Mengisi Bar Makanan

*[»] Harga Rank VIP*

- 20k Via Pulsa Telkomsel | 15k Via Gopay

»« Mau Beli Rank Server? Ketik = BeliRank Survival' ,MessageType.text);
}
else if (text == 'Siapa'){
conn.sendMessage(id, 'Aku BOT nya Fyrus' ,MessageType.text);
}
else if (text == 'Chichi'){
conn.sendMessage(id, 'pacar owner ihh' ,MessageType.text);
}
else if (text == 'bangsat'){
conn.sendMessage(id, 'toxic terdeteksi' ,MessageType.text);
}
else if (text == 'Ngentod'){
conn.sendMessage(id, 'Pengin ngentod?' ,MessageType.text);
}
else if (text == 'Anjing'){
conn.sendMessage(id, 'Jangan toxic anjing' ,MessageType.text);
}
else if (text == 'Bacot'){
conn.sendMessage(id, 'lu bacot_-' ,MessageType.text);
}
else if (text == 'Test'){
conn.sendMessage(id, 'Test 1,2,3 ketik .help' ,MessageType.text);
}
else if (text == 'Hai'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == '.ttp'){
conn.sendMessage(id, ' *COMMAND PREMIUM CHAT WA https://wa.me/628165466368* ' ,MessageType.text);
}
else if (text == 'Woi'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Eoy'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Hi'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Gan'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Sis'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Bro'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Min'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Sayang'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == 'I love u'){
conn.sendMessage(id, 'love you too' ,MessageType.text);
}
else if (text == 'Mas'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Mba'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Bre'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == 'Cuy'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == '.frendsowner'){
conn.sendMessage(id, 'SUM Add Sum asik dia wa.me/+628557231695' ,MessageType.text);
}
else if (text == '.coowner'){
conn.sendMessage(id, 'PUTRA add Putra wa.me/+6289625176924' ,MessageType.text);
}
else if (text == '.groupbot'){
conn.sendMessage(id, 'group bot whatsapp https://chat.whatsapp.com/IKmRs4a36fIAyn7X16jpwL' ,MessageType.text);
}
else if (text == '.tools1'){
conn.sendMessage(id, ' *Menampilkan Fitur tools1!!!* ' ,MessageType.text);
}
else if (text == '.tools2'){
conn.sendMessage(id, ' *Menampilkan Fitur tools2!!!* ' ,MessageType.text);
}
else if (text == '.tools3'){
conn.sendMessage(id, ' *Menampilkan Fitur tools3!!!* ' ,MessageType.text);
}
else if (text == '.tools4'){
conn.sendMessage(id, ' *Menampilkan Fitur tools4!!!* ' ,MessageType.text);
}
else if (text == '.tools5'){
conn.sendMessage(id, ' *Menampilkan Fitur tools5!!!* ' ,MessageType.text);
}
else if (text == 'Euy'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == 'makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}


