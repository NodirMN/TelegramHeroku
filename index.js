const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN

const bot = new TelegramBot(token, {
    polling: true
});

let resultsData = [{
        type: 'article',
        id: 1,
        title: "Lorem ipsum dolor ",
        description: " neque dolore perferendis eius natus non, nemo rerum.",
        thumb_url: "https://i.pinimg.com/564x/40/c5/ab/40c5ab58803941150bc40e146873a198.jpg",
        input_message_content: {
            message_text: ". Debitis quam aut minus repudiandae soluta maiores quas eligendi fugiat et sit cupiditate numquam, neque dolore perferendis eius natus non, nemo rerum."
        }
    },
    {
        type: 'article',
        id: 2,
        title: "Lorem ipsum dolor ",
        description: " adipisicing elit. Debitis quam aut minus repudiandae soluta maiores quas eligendi fugiat et sit cupiditate numquam, neque dolore perferendis eius natus non, nemo rerum.",
        thumb_url: "https://i.pinimg.com/236x/79/e0/b6/79e0b6a03217628bfa38a9dba189d7b5.jpg",
        input_message_content: {
            message_text: "consectetur adipisicing elit. Debitis quam aut minus repudiandae soluta maiores quas eligendi fugiat et sit cupiditate numquam, neque dolore perferendis eius natus non, nemo rerum."
        }
    },
    {
        type: 'article',
        id: 3,
        title: "Lorem ipsum dolor ",
        description: " sit amet consectetur elit. Debitis quam aut minus repudiandae soluta maiores quas eligendi fugiat et sit cupiditate numquam, neque dolore perferendis eius natus non, nemo rerum.",
        thumb_url: "https://i.pinimg.com/564x/ca/94/e8/ca94e86597adb583fc6bd52bc93f9ee6.jpg",
        input_message_content: {
            message_text: " ipsum dolor sit amet consectetur elit. Debitis quam aut minus repudiandae soluta maiores quas eligendi fugiat et sit cupiditate numquam, neque dolore perferendis eius natus non, nemo rerum."
        }
    },

]
bot.on('inline_query', query => {
    let results = resultsData.filter(r => {
        return r.title.indexOf(query.query) !== -1 || r.description.indexOf(query.query) !== -1
    })
    bot.answerInlineQuery(query.id, results, {
        cache_time: 0,
    })
})

////////////////////////////////////////////////////
let inline_keyboard = [
    [{
            text: 'Salom',
            callback_data: 'salom'
        },
        {
            text: 'Sotaman',
            callback_data: 'sotaman'
        },
    ],
    [{
            text: 'Hayir',
            callback_data: 'hayir'
        },
        {
            text: 'Olaman',
            callback_data: 'olaman'
        },
    ],
]

bot.on('callback_query', query =>{
        switch (key) {
            case salom:
                
                break;
        
            default:
                break;
        }
})

bot.onText(/\/start/, (msg, [source, match]) => {
    bot.sendMessage(msg.chat.id, 'Buyruq tanlang!', {
        reply_markup: {
            inline_keyboard
        }
    })
})

/////////////////////////////////////////
const fs = require('fs')
const path = require('path')

bot.onText(/\/audio/,msg =>{
    // bot.sendAudio(msg.chat.id, './files/50_cent_-_windows_shopper_(z2.fm).mp3')
    bot.sendMessage(msg.chat.id,'Fayil yuklanyapti...')
        fs.readFile(path.join(__dirname, './files',"audio.mp3"), (err, data) => {
            bot.sendAudio(msg.chat.id,data,{
                caption: '50-sent'
            })
        })
})

//////////////////////////////////////////

bot.onText(/\/video/, msg => {
    bot.sendMessage(msg.chat.id, 'Fayil yuklanyapti...')
    fs.readFile(path.join(__dirname, 'files', "YHjl.mp4"), (err, data) => {
        bot.sendVideo(msg.chat.id, data)
    })
})

////////////////////////////
bot.onText(/\/pict/, msg => {
    bot.sendMessage(msg.chat.id, 'Fayil yuklanyapti...')
    fs.readFile(path.join(__dirname, 'files', "rasim.jpg"), (err, data) => {
        bot.sendPhoto(msg.chat.id, data)
    })
})


/////////////////////////////////
bot.onText(/\/doc/, msg => {
    bot.sendMessage(msg.chat.id, 'Fayil yuklanyapti...')
    fs.readFile(path.join(__dirname, 'files', "Nodir Marasulov.pdf"), (err, data) => {
        bot.sendDocument(msg.chat.id, data)
    })
})

////////////////////
bot.onText(/\/gif/, msg => {
    bot.sendMessage(msg.chat.id, 'Fayil yuklanyapti...')
    fs.readFile(path.join(__dirname, 'files', "raining-money-40.gif"), (err, data) => {
        bot.sendAnimation(msg.chat.id, data)
    })
})

/////////////////////////////
bot.onText(/\/int/, msg => {
        bot.sendVideo(msg.chat.id, 'https://okay.uz/uploads/media3/house-of-the-dragonserial2022trailer__convd39850.mp4')
    })

//////////////////////////////
bot.onText(/\/loc/, msg => {
        bot.sendLocation(msg.chat.id, 41.3695,69.3011)
    })
