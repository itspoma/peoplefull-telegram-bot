const lists = require('../models/lists')

module.exports = (bot) => {
  bot.on('/me', (msg) => {
    const id = msg.chat.id;

    let text = '👱 You have:\n2 lists:\n- asd\n- alkjsd';

    return bot.sendMessage(id, text, {
      replyMarkup: bot.keyboard([
        ['/lists', '/lists_add', '/today', '/me']
      ], {resize: true, once: true})
    });
  });
}
