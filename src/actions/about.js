module.exports = (bot) => {
  bot.on('/about', (msg) => {
    const id = msg.chat.id;

    let text = '👱 This bot is powered by TeleBot library ' +
        'https://github.com/kosmodrey/telebot Go check the source code!';

    return bot.sendMessage(id, text, {
      replyMarkup: bot.keyboard([
        ['/lists', '/today', '/me']
      ], {resize: true, once: true})
    });
  });
}
