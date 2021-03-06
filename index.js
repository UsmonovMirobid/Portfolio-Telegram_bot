const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '1167114496:AAGe805-dZlxpzfQFgxCBmEdw37vs9c4LgU';

const bot = new TelegramBot(TOKEN, {
	polling: true,
});

bot.onText(/\/start/, (msg) => {
	const chatId = msg.chat.id;
	bot.sendMessage(
		chatId,
		`Salom ${msg.from.first_name}, botga hush kelibsiz`,
		{
			reply_markup: JSON.stringify({
				keyboard: [
					[
						{
							text: 'Men haqimda ๐ค',
						},
						{
							text: 'Mening Portfolioyim ๐',
						},
					],
					[
						{
							text: 'Mening rezymeyim ๐งพ',
						},
					],
				],
				resize_keyboard: true,
			}),
		},
	);
});
bot.onText(/\/menu/, (msg) => {
	const chatId = msg.chat.id;
	bot.sendMessage(chatId, `Bosh menu ๐๏ธ`, {
		reply_markup: JSON.stringify({
			keyboard: [
				[
					{
						text: 'Men haqimda ๐ค',
					},
					{
						text: 'Mening Portfolioyim ๐ผ',
					},
				],
				[
					{
						text: 'Mening rezymeyim ๐งพ',
					},
				],
			],
			resize_keyboard: true,
		}),
	});
});

bot.on('message', (msg) => {
	if (msg.text == 'Men haqimda ๐ค') {
		bot.sendMessage(
			msg.chat.id,
			'Salom. Mening ismim Mirobid. Yoshim 15 da. Men Toshkent viloyati Toshkent tumanida istiqomat qilaman. Men hozirda 224-maktab o`quvchisi hamda Najot Ta`lim da Web dasturlashning FullStack yo`nalishida tahsil olib kelmoqdaman. Yana qo`shimcha savollaringiz bo`lsa menga murojaat qiling: @MirobidUsmonov',
			{
				reply_markup: JSON.stringify({
					keyboard: [
						[
							{
								text: 'Ortga โฌ',
							},
						],
					],
					resize_keyboard: true,
				}),
			},
		);
	}
	
    if (msg.text == 'Ortga โฌ') {
		bot.sendMessage(msg.chat.id, `Bosh menu ๐๏ธ`, {
			reply_markup: JSON.stringify({
				keyboard: [
					[
						{
							text: 'Men haqimda ๐ค'
						},
						{
							text: 'Mening Portfolioyim ๐ผ'
						}
					],
					[
						{
							text: 'Mening rezymeyim ๐งพ'
						}
					]
				],
				resize_keyboard: true
			})
		})
	}
    
    if(msg.text == 'Mening Portfolioyim ๐ผ') {
        bot.sendMessage(msg.chat.id, `Portfolio`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Frontend ๐ฅฑ'
                        },
                        {
                            text: 'Beckend ๐คฏ'
                        }
                    ],
                    [
                        {
                            text: 'Ortga โฌ'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    if(msg.text == 'Frontend ๐ฅฑ' || msg.text == 'Ortga โฌ๏ธ') {
        bot.sendMessage(msg.chat.id, `Frontend`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Scoot ๐ต'
                        },
						{
							text: 'Pokemon'
						},
						{
							text: 'Movies ๐ฅ'
						}
                    ],
                    [
                        {
                            text: 'Ortga โฌ'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    if(msg.text == 'Scoot ๐ต') {
        bot.sendPhoto(msg.chat.id, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Scoot_logo.svg/1200px-Scoot_logo.svg.png', {
			caption: "https://2-imtihonn.netlify.app",
			reply_markup: JSON.stringify({
				keyboard: [
					[
						{
							text: "Ortga โฌ๏ธ"
						}
					]
				],
				resize_keyboard: true
			})
		})
    }
    if(msg.text == 'Pokemon') {
        bot.sendPhoto(msg.chat.id, 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png', {
			caption: "https://lucid-leavitt-82b7a9.netlify.app/",
			reply_markup: JSON.stringify({
				keyboard: [
					[
						{
							text: "Ortga โฌ๏ธ"
						}
					]
				],
				resize_keyboard: true
			})
		})
    }
    if(msg.text == 'Movies ๐ฅ') {
        bot.sendPhoto(msg.chat.id, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-movies-index-1628968089.jpg', {
			caption: "https://movies-searched.netlify.app/",
			reply_markup: JSON.stringify({
				keyboard: [
					[
						{
							text: "Ortga โฌ๏ธ"
						}
					]
				],
				resize_keyboard: true	
			})
		})
    }

});