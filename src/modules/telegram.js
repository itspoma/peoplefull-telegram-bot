const TeleBot = require('telebot');

const bot = new TeleBot({
  token: process.env.TELEGRAM_BOT_TOKEN,
  usePlugins: ['askUser'],
});

module.exports = bot;
