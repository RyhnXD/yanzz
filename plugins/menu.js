let levelling = require('../lib/levelling')

let { MessageType } = require('@adiwajshing/baileys')

let fs = require('fs')

let path = require('path')

let fetch = require('node-fetch')

let moment = require('moment-timezone')

let os = require('os')

let { performance } = require('perf_hooks')

let neww = Math.round(performance.now())

let old = Math.round(performance.now())

const chats = conn.chats.all()

const groups = chats.filter(v => v.jid.endsWith('g.us'))

 

const defaultMenu = {

  before: `

〓〓〓〓〓 *U S E R S* 〓〓〓〓
➺ *Name:* %name
➺ *Tags:* %tag
➺ *Premium:* %prems
➺ *Age:* %age
➺ *Limit:* %limit
➺ *Money:* %money
➺ *Role:* %role
➺ *Level:* %level [%xp4levelup]
➺ *Xp:* %exp / %maxexp
➺ *Total Xp:* %totalexp

〓〓〓〓  *T O D A Y* 〓〓〓〓
➺ ${ucapan()}
➺ *Tanggal:* %week %weton, %date
➺ *Tanggal Islam:* %dateIslamic
➺ *Waktu:* %time

〓〓〓〓 *I N F O* 〓〓〓〓
➺ *Nama Bot:* %me
➺ *Mode:* %mode
➺ *Prefix:* [ %_p ]
➺ *Platform:* %platform
➺ *Merk Hp:* %merk
➺ *Database:* %rtotalreg dari %totalreg

〓〓〓〓〓 *O F F I C I A L* 〓〓〓〓
%waofc

〓〓〓〓〓 *O W N E R* 〓〓〓〓
%ow

〓〓〓〓〓 *INFO CMD* 〓〓〓〓

▸ *🄿* = Premium
▸ *🄻* = Limit

*⬣╌──┈⬣〔 COMMAND 〕⬣┈──╌⬣*
                                       
`.trimStart(),

  header: '┏─〔 *%category* 〕─⬣',
  body: '│⬡ %cmd %islimit %isPremium',
  footer: '┗──────────⬣',

  after: `*NOTE*
*JANGAN SPAM BOT*
*JANGAN VC/CALL BOT*
*DEMI KENYAMANAN BERSAMA*
      
© 2022 BY YANZZ 
`,

}

let handler = async (m, { conn, usedPrefix: _p, args, command }) => {

	

	//TAGS

	let tag = `@${m.sender.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

    let waofc = `@${'0'.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let ow = `@${'6288287810316'.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let nurt = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let mds = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let mds2 = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let admn = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

  let par = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let par2 = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let par3 = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let par4 = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let tq = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let par6 = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 

	let bzz = './audio/ara-nabila.mp3'

	let platform = os.platform()

	let merk = conn.user.phone.device_manufacturer

	let mode = global.opts['self'] ? 'Private' : 'Publik'

	let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]

    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]



    let _uptime = process.uptime() * 1000

    let uptime = clockString(_uptime)

  let tags

  let teks = `${args[0]}`.toLowerCase()

  let arrayMenu = ['all', 'game', 'edukasi', 'news', 'nsfw', 'xp', 'stiker', 'image', 'anime', 'kerangajaib', 'quotes', 'admin', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'sound', 'vn', 'jadibot', 'info', 'vote', 'tanpakategori', 'owner', 'gift', 'thnks']

  if (!arrayMenu.includes(teks)) teks = '404'

  if (teks == 'all') tags = {

    'main': 'Utama',

    'game': 'Game',

    'rpg': 'Epic Rpg',

    'xp': 'Exp & Limit',

    'fun': 'Fun',

    'jodoh': 'Jodoh',

    'gift': 'gift',

    'anime': 'Anime',

    'hentai': `NSFW`,

    'premium': 'Premium',

    'anonymous': 'Anonymous Chat',

    'kerang': 'Kerang Ajaib',

    'quotes': 'Quotes',

    'absen': 'Absen',

    'voting': 'vote',

    'admin': `Admin`,

    'group': 'Grup',

    'news': 'News',

    'internet': 'Internet',

    'edukasi': 'Edukasi',

    'quran': 'Islam',

    'image': 'Random Image',

    'sticker': 'Stiker',

    'nulis': 'MagerNulis & Logo',

    'audio': 'Pengubah Suara',
    
    'sound': 'Sound Music',
    
    'vn': 'Vn Imuet',
    
    'downloader': 'Downloader',

    'tools': 'Tools',

    'database': 'Database',

    'jadibot': 'Jadi Bot',

    'info': 'Info',

    '': 'Tanpa Kategori',

    'thnks': 'THANKS TO',

  }

  if (teks == 'game') tags = {

    'game': 'Game'

  }

  if (teks == 'xp') tags = {

    'xp': 'Exp & Limit'

  }

  if (teks == 'news') tags = {

    'news': 'News'

  }

  if (teks == 'edukasi') tags = {

    'edukasi': 'Edukasi'

  }

  if (teks == 'nsfw') tags = {

    'hentai': 'NSFW',

    'nsfw': 'HENTAI',

  }

  if (teks == 'stiker') tags = {

    'sticker': 'Stiker'

  }

  if (teks == 'rpg') tags = {

    'rpg': 'Epic Rpg'

  }

  if (teks == 'kerangajaib') tags = {

    'kerang': 'Kerang Ajaib'

  }

  if (teks == 'quotes') tags = {

    'quotes': 'Quotes'

  }

  if (teks == 'admin') tags = {

    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`

  }

  if (teks == 'grup') tags = {

    'group': 'Grup'

  }

  if (teks == 'premium') tags = {

    'premium': 'Premium'

  }

  if (teks == 'internet') tags = {

    'internet': 'Internet'

  }

  if (teks == 'image') tags = {

    'image': 'Random Image'

  }

  if (teks == 'anonymous') tags = {

    'anonymous': 'Anonymous Chat'

  }

  if (teks == 'nulis') tags = {

    'nulis': 'MagerNulis & Logo'

  }

  if (teks == 'downloader') tags = {

    'downloader': 'Downloader'

  }

  if (teks == 'tools') tags = {

    'tools': 'Tools'

  }

  if (teks == 'fun') tags = {

    'fun': 'Fun',

    'jodoh': 'Jodoh'

  }

  if (teks == 'jodoh') tags = {

    'jodoh': 'Jodoh'

  }

  if (teks == 'database') tags = {

    'database': 'Database'

  }

  if (teks == 'vote') tags = {

    'vote': 'Voting',

    'absen': 'Absen'

  }

    if (teks == 'anime') tags = {

    'anime': 'Anime'

  }

  if (teks == 'quran') tags = {

    'quran': 'Islam'

  }

  if (teks == 'gift') tags = {

    'gift': 'Gift'

  }

  if (teks == 'audio') tags = {

    'audio': 'Pengubah Suara'

  }
  
    if (teks == 'sound') tags = {
    'sound': 'Sound Music'

  }
  
  if (teks == 'vn') tags = {
    'vn': 'Vn Imuet'

  }
  if (teks == 'jadibot') tags = {

    'jadibot': 'Jadi Bot'

  }

  if (teks == 'info') tags = {

    'info': 'Info'

  }

  if (teks == 'tanpakategori') tags = {

    '': 'Tanpa Kategori'

  }

  if (teks == 'thnks') tags = {

    'thnks': 'THANKS TO'

  }

  if (teks == 'owner') tags = {

    'owner': 'Owner',

    'host': 'Host',

    'advanced': 'Advanced'

  }







  try {

    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))

    let { money, age, exp, limit, level, role, registered } = global.db.data.users[m.sender]

    let premium = global.db.data.users[m.sender].premium

    let prems = `${premium ? 'Yes': 'No'}`

    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)

    let wm = global.botwm

    let datebot = global.botdate

    let logo = global.logo

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    let bioo = (await conn.getStatus(who).catch(console.error) || {}).status || ''



//HITUNG MUNDUR

    const hariRaya = new Date('January 1, 2023 23:59:59')

    const sekarang = new Date().getTime()

    const Selisih = hariRaya - sekarang

    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));

    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))

    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)

    const hariRayaramadan = new Date('Maret 22, 2023 23:59:59')

    const sekarangg = new Date().getTime()

    const lebih = hariRayaramadan - sekarangg

    const harii = Math.floor( lebih / (1000 * 60 * 60 * 24));

    const jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

    const menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60))

    const detikk = Math.floor( lebih % (1000 * 60) / 1000)

const ultah = new Date('February 29, 2024 23:59:59')

    const sekarat = new Date().getTime() 

    const Kurang = ultah - sekarat

    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));

    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))

    const detek = Math.floor( Kurang % (1000 * 60) / 1000)

    

    let nama = await conn.getName(m.sender)

    let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}





  let logo2 = fs.readFileSync('./src/mike.png')

  kanna = fs.readFileSync('./src/mike.png')

  kannaImg = (await conn.prepareMessage('0@s.whatsapp.net', kanna, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage

  sumberImg = await (await fetch(fla + teks + ' menu')).buffer()

  image = (await conn.prepareMessage('0@s.whatsapp.net', logo2, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage

  //FAKE TROLI

    const ftrol = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: `Hai Kak ${name}!`, 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }

    const ftroli = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: `Hai Kak ${name}!`, 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + teks)).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }



    let { min, xp, max } = levelling.xpRange(level, global.multiplier)

    let d = new Date(new Date + 3600000)

    let locale = 'id'

    // d.getTimeZoneOffset()

    // Offset -420 is 18.00

    // Offset    0 is  0.00

    // Offset  420 is  7.00

    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]

    let week = d.toLocaleDateString(locale, { weekday: 'long' })

    let date = d.toLocaleDateString(locale, {

      day: 'numeric',

      month: 'long',

      year: 'numeric'

    })

    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {

      day: 'numeric',

      month: 'long',

      year: 'numeric'

    }).format(d)

    let time = d.toLocaleTimeString(locale, {

      hour: 'numeric',

      minute: 'numeric',

      second: 'numeric'

    })

    let _uptime = process.uptime() * 1000

    let _muptime

    if (process.send) {

      process.send('uptime')

      _muptime = await new Promise(resolve => {

        process.once('message', resolve)

        setTimeout(resolve, 1000)

      }) * 1000

    }

    let muptime = clockString(_muptime)

    let uptime = clockString(_uptime)

    let neww = Math.round(performance.now())

    let old = Math.round(performance.now())

    let totalreg = Object.keys(global.db.data.users).length

    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {

      return {

        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],

        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],

        prefix: 'customPrefix' in plugin,

        limit: plugin.limit,

        premium: plugin.premium,

        enabled: !plugin.disabled,

      }

    })

      

    let txtmenu = `┏──────❬ *USER* ❭───────⬣
│➺ *Name:* ${name}
│➺ *Tag:* ${tag}
│➺ *Bio:* ${bioo ? bioo : ''}
│➺ *Status:* ${premium ? 'Premium' : 'Free'} User
│➺ *Limit:* ${global.db.data.users[m.sender].limit}
┠──────❬  *I N F O* ❭──────⬣
│➺ *Runtime:* ${uptime}
│➺ *Baterai:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
│➺ *Prefix :* [ ${_p} ]
│➺ *Total User:* ${Object.keys(global.db.data.users).length}
│➺ *Jadibot:* ${totaljadibot.length}
│➺ *Blocked:* ${conn.blocklist.length}
│➺ *Chat Banned:* ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}
│➺ *User Banned:* ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
┠──────❬ *TAHUN BARU*  ❭────────⬣
│➺ ${jhari} Hari ${jjam} Jam ${mmmenit} Menit ${ddetik} Detik
│
┠──────❬ *RAMADHAN* ❭──────⬣
│➺ ${harii} Hari ${jamm} Jam ${menitt} Menit ${detikk} Detik
│
┠──────❬ *ULTAH OWNER* ❭───────⬣
│➺ ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik
┴
✧
┬ 📌 *Note* :
│Beri Jeda Yah Kak
┗──────────────┈─⬣
   ▌│█║▌║▌║║▌║▌║█│▌

     ❏ ${week} ${date}`

    if (teks == '404') {

      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {

        "listMessage": {

          "title": `✧────··[ Dasboard ]··────✧`.trim(),

          "description": `${ucapan()}, ${name} !`.trim(),

          "footerText": txtmenu,

          "buttonText": "Click Here",

          "listType": "SINGLE_SELECT",

          "sections": [

                            {

                                "rows": [{

                                         "title": "📊 ∫  » Status ",

                                         "description": "Status Bot",

                                         "rowId": ".mystat"

                                    }, {

                                         "title": "⚡ ∫  » speed",

                                         "description": "Menampilkann Kecepatan Respon Bot",

                                         "rowId": ".ping"

                                    }, {

                                         "title": "🗒️ ∫  » Info",

                                         "description": "Menampilkan Info Bot",

                                         "rowId": ".info"

                                    }, {

                                         "title": "🎐 ∫  » Creator",

                                         "description": "Kontak Creator Ku",

                                         "rowId": ".nowner"

                                    }, {

                                         "title": "❗ ∫  » Rules",

                                         "description": "Patuhi Rules Untuk Kenyamanan Bersama",

                                         "rowId": ".rules"

                                    }, {

                                         "title": "🪙 ∫  » Leaderboard",

                                         "description": "Cek Posisi Mu",

                                         "rowId": ".lb"

                       }, {

                                         "title": "💌 ∫  » Group Bot",

                                         "description": "Join Ke Grup Official Bot",

                                         "rowId": ".gcbot"

                       }],

                    "title": "▮𝗦𝘁𝗮𝘁𝘂𝘀 」"

                }, {

                  "rows": [{

                  "title": "💬› Semua Perintah",

                  "description": "Memberikan Semua Fitur Bot",

                  "rowId": ".? all"

                       }],

                    "title": "▮Menu All 」"

                }, {

                  "rows": [{

                  "title": "🎮› Game",

                  "description": "Gamenya seru seru kak...",

                  "rowId": ".? game"

                }, {

                  "title": "🌱› Rpg",

                  "description": "Game Epic Rpg ! ",

                  "rowId": ".? rpg"

                }, {

                  "title": "📈› Exp & Limit",

                  "description": "Ayo tingkatkan level mu..!",

                  "rowId": ".? xp"

                }, {

                  "title": "🧩› Fun",

                  "description": "Sangat Family Friendly...",

                  "rowId": ".? fun"

                }, {

                  "title": "🎁› Gift",

                  "description": "Surprise!",

                  "rowId": ".? gift"

                }, {

                  "title": "🔞› Nsfw",

                  "description": "Adick adick jangan liat ya...",

                  "rowId": ".? nsfw"

                }, {

                  "title": "⛩️› Anime",

                  "description": "Bang? Anjir wibu...",

                  "rowId": ".? anime"

                }, {

                  "title": "📰› News",

                  "description": "Berita Doang kok kak...",

                  "rowId": ".? News"

                },  {

                  "title": "☪️› Islamic",

                  "description": "Tobat Yuk Kak...",

                  "rowId": ".? quran"

                }, {

                  "title": "📚› Edukasi",

                  "description": "Belajar kak biar pinter",

                  "rowId": ".? edukasi"

                }, {

                  "title": "🖼️› Image",

                  "description": "Radom Image & something...",

                  "rowId": ".? image"

                },  {

                  "title": "🎫› Sticker",

                  "description": "Membuat sticker yang unik!",

                  "rowId": ".? stiker"

                }, {

                  "title": "🐚› Kerang",

                  "description": "Menurut Kerang ajaib...!",

                  "rowId": ".? kerangajaib"

                }, {

                  "title": "📑› Quotes",

                  "description": "Random Teks...",

                  "rowId": ".? quotes"

                }, {

                  "title": "🏛️› Group Settings",

                  "description": "Admin Group Only!",

                  "rowId": ".? admin"

                }, {

                  "title": "👥› Group ",

                  "description": "Group Only!",

                  "rowId": ".? grup"

                }, {

                  "title": "🌟› Premium",

                  "description": "Premium Users Only!",

                  "rowId": ".? premium"

                }, {

                  "title": "💻› Internet",

                  "description": "Cari Sesuatu yang menarik!",

                  "rowId": ".? internet"

                }, {

                  "title": "🎭› Anonymous",

                  "description": "Berbicara dengan orang tidak dikenal...",

                  "rowId": ".? anonymous"

                }, {

                  "title": "🖊️› Editz Menu",

                  "description": "Menulis dan Membuat Logo, dll...",

                  "rowId": ".? nulis"

                }, {

                  "title": "📥› Downloader",

                  "description": "Download Sesuatu diBot!",

                  "rowId": ".? downloader"

                }, {

                  "title": "🧰› Tools",

                  "description": "Mungkin ini bisa membantu mu...",

                  "rowId": ".? tools"

                }, {

                  "title": "📂› Database",

                  "description": "Menyimpan sesuatu DiBot",

                  "rowId": ".? database"

                }, {

                  "title": "🗳️› Vote & Absen",

                  "description": "Group Only!",

                  "rowId": ".? vote"

                }, {

                  "title": "🎙️› Voice",

                  "description": "Voice Changer...",

                  "rowId": ".? audio"

                }, {

                  "title": "🌐› Multi-Session",

                  "description": "Salah Satunya Jadibot Sementara",

                  "rowId": ".? jadibot"

                }, {

                  "title": "ℹ️› Info",

                  "description": "Fitur fitur info...",

                  "rowId": ".? info"

                }, {

                  "title": "🎧› Vn Imut",

                  "description": "Mendengarkan Vn Yang Sangat Imuet",

                  "rowId": ".? vn"

                }, {

                  "title": "🎵› Sound Music",

                  "description": "Dengar Music Singkat",

                  "rowId": ".? sound"

                }, {

                  "title": "❓› No Category",

                  "description": "Fitur yang terlupakan...",

                  "rowId": ".? tanpakategori"

                }, {

                  "title": "👩🏻‍💻› Owner",

                  "description": "Hanya Untuk Owner",

                  "rowId": ".? owner"

                }],

                                "title": "▮𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆 」"

                                }, {

                                "rows": [{

                                "title": "📝 ∫  » Info Updated",

                                "description": "Tentang Update Terakhir ",

                                "rowId": ".note"

                 }],

                                "title": "▮Info Update 」"

                                }, {

                                "rows": [{
                               
                                "title": "🗳️ ∫  » Donasi",

                                "description": "Donasi kak, jangan enak pakenya doang",

                                "rowId": ".donasi"

                                }, {

                                "title": "🔖 ∫  » Sewa",

                                "description": "Menampilkan List harga sewabot",

                                "rowId": ".sewa"

                                }, {

                                "title": "🥀 ∫  » Kata Penutup",

                                "description": "Terimakasih untuk user yang telah menggunakan bot, jika ada kesalahan atau permintaan bisa chat ke nomor owner\n ❗Note: chat P/main² tidak akan di respon(user bisa terkena banned/block)",

                                "rowId": ".owner"

                                }, {

                                "title": "🎗️ ∫  » Premium",

                                "description": "Menampilkan List Harga premium",

                                "rowId": ".premium"

                                }, {

                                "title": "🔬 ∫  » Script",

                                "description": "Script Yang Di Pakai Ynz Bot",

                                "rowId": ".sc"

                                }, {

                                "title": "🎖️ ∫  » Thanks To",

                                "description": "Terima kasih banyak untuk user yang telah berpartisipasi dalam Bot",

                                "rowId": ".? thnks"

                                }],

                                "title": "▮𝗜𝗻𝗳𝗼 」"

                            }

                        ], "contextInfo": 

                         { "stanzaId": m.key.id,

                        "participant": m.sender,

                        "quotedMessage": m.message

                        }

                    }

                 }, {quoted: ftrol, contextInfo: { mentionedJid: conn.parseMention(txtmenu) }}), { waitForAck: true })

  

    }

        

    /*const fload = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 9999,

    status: 1,

    surface : 1,

    message: '[ ! ] Memuat Menu ' + teks + '...\n ```[ ! ] Tunggu Sebentar```', 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Loading')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }

    conn.reply(m.chat, '```[ ! ] wait...```', fload)*/

    // gunakan ini jika kamu menggunakan whatsapp bisnis

    //   throw `

    // ┌〔 DAFTAR MENU 〕

    // ├ ${_p + command} all

    // ├ ${_p + command} game

    // ├ ${_p + command} xp

    // ├ ${_p + command} stiker

    // ├ ${_p + command} kerang

    // ├ ${_p + command} quotes

    // ├ ${_p + command} admin

    // ├ ${_p + command} group

    // ├ ${_p + command} premium

    // ├ ${_p + command} internet

    // ├ ${_p + command} anonymous

    // ├ ${_p + command} nulis

    // ├ ${_p + command} downloader

    // ├ ${_p + command} tools

    // ├ ${_p + command} fun

    // ├ ${_p + command} database

    // ├ ${_p + command} vote

    // ├ ${_p + command} quran

    // ├ ${_p + command} audio

    // ├ ${_p + command} jadibot

    // ├ ${_p + command} info

    // ├ ${_p + command} tanpa kategori

    // ├ ${_p + command} owner

    // └────  

    //     `.trim()

    let groups = {}

    for (let tag in tags) {

      groups[tag] = []

      for (let plugin of help)

        if (plugin.tags && plugin.tags.includes(tag))

          if (plugin.help) groups[tag].push(plugin)

      // for (let tag of plugin.tags)

      //   if (!(tag in tags)) tags[tag] = tag

    }

    conn.menu = conn.menu ? conn.menu : {}

    let before = conn.menu.before || defaultMenu.before

    let header = conn.menu.header || defaultMenu.header

    let body = conn.menu.body || defaultMenu.body

    let footer = conn.menu.footer || defaultMenu.footer

    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after

    let _text = [

      before,

      ...Object.keys(tags).map(tag => {

        return header.replace(/%category/g, tags[tag]) + '\n' + [

          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {

            return menu.help.map(help => {

              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)

                .replace(/%islimit/g, menu.limit ? '🄻' : '')

                .replace(/%isPremium/g, menu.premium ? '🄿' : '')

                .trim()

            }).join('\n')

          }),

          footer

        ].join('\n')

      }),

      after

    ].join('\n')

    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''

    let replace = {

      '%': '%',

      p: uptime, muptime,

      me: conn.user.name,

      npmname: package.name,

      npmdesc: package.description,

      version: package.version,

      exp: exp - min,

      maxexp: xp,

      totalexp: exp,

      

      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,

      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',

      mds2, par6, tag, waofc, ow, mds, admn, nurt, par, par2, par3, par4, tq, jhari, jjam, mmmenit, ddetik, harii, jamm, menitt, detikk, ohari, ojam, onet, detek, mode, merk, platform, _p, money, age, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, neww, old,

      readmore: readMore

    }

    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])



    //MENU 3BUTTON PDF

    await conn.sendMessage(m.chat, { "contentText": '──── [ *DASHBOARD* ] ────', "footerText": text,

"buttons": [

{buttonId: '.owner', buttonText: {displayText: 'OWNER'}, type: 1},

{buttonId: '.donasi', buttonText: {displayText: 'DONASI'}, type: 1},

{buttonId: '.rules', buttonText: {displayText: 'RULES'}, type: 1}

],

"headerType": "DOCUMENT", "documentMessage": {

            "url": "https://mmg.whatsapp.net/d/f/AsO5KpESy9E0WI72xEVp65rx505bQxvuIma79L8Ue076.enc",

            "mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

            "title": "ness.docx",

            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",

            "fileLength": "99999999999999",

            "pageCount": 100,

            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",

            "fileName": 'Yanzz вσт',

            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",

            "directPath": "/v/t62.7118-24/35150115_287008086621545_8250021012380583765_n.enc?ccb=11-4&oh=6f0f730e5224c054969c276a6276a920&oe=61A21F46",

            "mediaKeyTimestamp": "1634472176",

            "jpegThumbnail": await (await fetch('https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg')).buffer(),

  }}, 'buttonsMessage', { quoted: ftroli, contextInfo: { mentionedJid: conn.parseMention(text), forwardingScore: 999, isForwarded: true, externalAdReply: { title: global.wm, body: `${pickRandom(['udah makan belum kak?', 'udh mandi belum kak?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'jangan spam ya kak!', 'Jangan lupa donasi yak kak! >.<', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< 💗✨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, description: `${pickRandom(['udah makan belum kak?', 'udh mandi belum kak?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'jangan spam ya kak!', 'Jangan lupa donasi yak kak! >.<', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< 💗✨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, mediaType: 2, thumbnail: await (await fetch(`${logos()}`)).buffer(), mediaUrl: `https://youtu.be/N60DXUDEhIE`}}})

  

//MENU 3BUTTON LOCATION

    //await conn.send3ButtonLoc(m.chat, logo, 'ʚ-`───────[ *DASHBOARD* ]───────´-ɞ' , text.trim(), 'Owner', '.nowner', 'Donasi', '.donasi', 'Rules', '.rules', m)

    

  //MENU SELECTION

    /*await conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {

        "listMessage": {

          "title": `✧────────···[ Dashboard ]···─────────✧`.trim(),

          "description": `🎮 Ƙαɴɴα вσт `.trim(),

          "footerText": 

text,

          "buttonText": "Click Here!",

          "listType": "SINGLE_SELECT",

          "sections": [

                            {

                                "rows": [{

                                         "title": `🔋 ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}`,

                                         "rowId": "...."

                                    }, {

                                         "title": `⚡${neww - old}`,

                                         "rowId": ".ping"

                                    }, {

                                         "title": `⏰ ${uptime}`,

                                         "rowId": ".runtime"

                       }],

                    "title": "───────────────[ Stats ]───────────────"

                }, {

                	            "rows": [{

                                "title": "Donasi",

                                "rowId": ".donasi"

                                }, {

                                "title": "Sewa",

                                "rowId": ".sewa"

                                }, {

                                "title": "Premium",

                                "rowId": ".premium"

                                }, {

                                "title": "Script",

                                "rowId": ".sc"

                                }, {

                                "title": "Owner",

                                "rowId": ".owner"

                                }],

                                "title": "────────────────[ Info ]────────────────"

                  }

                        ], "contextInfo": 

                         { "stanzaId": m.key.id,

                        "participant": m.sender,

                        "quotedMessage": m.message

                        }

                      }

                     }, {}), {waitForAck: true})*/

                     

                     //MENU CATEGORY

  /*res = await conn.prepareMessageFromContent(m.chat, {

    "productMessage": {

      "product": {

        "productImage": image,

        "productId": "4938174216214248",

        "title": '✧───────···[ Menu ]···────────✧',

        "description": `\n${wm}\n` + text,

        "retailerId": `${week}, ${date}  |  ʙʏ ʟᴇᴛᴛᴀ-sᴀᴍᴀ ‷♪`,

        "url": '\n',

        "descriptionCount": "999999999",

        "productImageCount": "1",

      },

      "businessOwnerJid": "0@s.whatsapp.net",

      "contextInfo": {

        "forwardingScore": 9999,

        "isForwarded": true

      }

    }

  },

    { quoted: fkon })

  conn.relayWAMessage(res)*/



//MENU FAKEYOUTUBE

    /*conn.send3ButtonImg(m.chat, await (await fetch(fla + teks)).buffer(), 'ʚ-`───────[ *DASHBOARD* ]───────´-ɞ' , text.trim(), 'Owner', '.nowner', 'Donasi', '.donasi', 'Rules', '.rules', ftrol, {

    quoted: m,

    contextInfo: {

        externalAdReply: {

            title: global.wm,

            body: `${pickRandom(['Tetap Semangat Puasa Nya ❤️', 'Udah Mandi Belum Kak? 😌', 'Semangat Ya Kak! 😆', 'Jangan Begadang Mulu Ya! 😅', 'Jangan Spam Ya Kak! 😉', 'Jangan Lupa Donasi Yak Kak! 😖', 'Jaga Kesehatan Yaw Kak! 🥰', 'Kalo Bosan Sama Haori Aja Kak 😘!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< 💗✨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`,

            description: `${pickRandom(['Tetap Semangat Puasa Nya ❤️', 'Udah Mandi Belum Kak? 😌', 'Semangat Ya Kak! 😆', 'Jangan Begadang Mulu Ya! 😅', 'Jangan Spam Ya Kak! 😉', 'Jangan Lupa Donasi Yak Kak! 😖'', 'Jaga Kesehatan Yaw Kak! 🥰', 'Kalo Bosan Sama Haori Aja Kak 😘!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< 💗✨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`,

            mediaType: 2,

          thumbnail: logo,

         mediaUrl: `https://youtu.be/OiTiqN9h4Xo`

        }

     }

    })*/



  /*conn.sendFile(m.chat, bzz, 'wibu.m4a', null, m, true, {

type: 'audioMessage', // paksa tanpa convert di ffmpeg

ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v

})*/

  } catch (e) {

    conn.reply(m.chat, 'Maaf, menu sedang error', m)

    throw e

  }

}

handler.help = ['menu', '?', 'help']

handler.tags = ['main']

handler.command = /^(menu|\?|help)$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.register = false



handler.admin = false

handler.botAdmin = false



handler.fail = null

handler.exp = 3



module.exports = handler



function pickRandom(list) {

  return list[Math.floor(Math.random() * list.length)]

}



const more = String.fromCharCode(8206)

const readMore = more.repeat(4001)



function logos() {

  const lgs = moment.tz('Asia/Jakarta').format('HH')

  res = "Selamat dinihari"

  if (lgs >= 4) {

    imp = 'https://telegra.ph/file/abff7903bd674a8f9d307.jpg'

  }

  if (lgs > 10) {

    imp = 'https://telegra.ph/file/ba940019735e224132f74.jpg'

  }

  if (lgs >= 15) {

    imp = 'https://telegra.ph/file/a332bbac803e3c631bb07.jpg'

  }

  if (lgs >= 18) {

    imp = 'https://telegra.ph/file/a5c91ab6c58c7be066654.jpg'

  }

  return imp

}

function logopdf() {

  const lgs = moment.tz('Asia/Jakarta').format('HH')

  res = "Selamat dinihari"

  if (lgs >= 4) {

    imp = 'https://telegra.ph/file/7bd906ce2693a57e6c8f2.jpg'

  }

  if (lgs > 10) {

    imp = 'https://telegra.ph/file/7bd906ce2693a57e6c8f2.jpg'

  }

  if (lgs >= 15) {

    imp = 'https://telegra.ph/file/7bd906ce2693a57e6c8f2.jpg'

  }

  if (lgs >= 18) {

    imp = 'https://telegra.ph/file/7bd906ce2693a57e6c8f2.jpg'

  }

  return imp

}



function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')

}

function ucapan() {

  const time = moment.tz('Asia/Jakarta').format('HH')

  res = "Selamat dinihari"

  if (time >= 4) {

    res = "Selamat pagi Kak 🌄"

  }

  if (time > 10) {

    res = "Selamat siang Kak☀️"

  }

  if (time >= 15) {

    res = "Selamat sore Kak 🌇"

  }

  if (time >= 18) {

    res = "Selamat malam Kak 🌃"

  }

  return res

}