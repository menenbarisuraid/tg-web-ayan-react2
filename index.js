const TelegramBot = require('node-telegram-bot-api');
const token = '6563836142:AAHgZXcYCfd0mf2ZuYoVKwqJxXbW_8Vx_Mw';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет! Я ваш Telegram бот.');
});

bot.onText(/\/webapp/, (msg) => {
  const chatId = msg.chat.id;
  const webAppUrl = 'https://66a1f89b05f758bc1a6d5da5--resonant-kataifi-7588e9.netlify.app/';
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Открыть веб-приложение',
            web_app: { url: webAppUrl }
          }
        ]
      ]
    }
  };
  bot.sendMessage(chatId, 'Вот ссылка на ваше веб-приложение:', options);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText.toLowerCase() === 'привет') {
    bot.sendMessage(chatId, 'Привет! Как я могу помочь?');
  } else {
    bot.sendMessage(chatId, 'Вы написали: ' + messageText);
  }
});
