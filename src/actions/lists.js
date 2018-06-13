const lists = require('../models/lists')

// /about
module.exports = (bot) => {
  bot.on('/lists', (msg) => {
    const chatId = msg.chat.id;

    lists.getAll().then(lists => {
      const text = JSON.stringify(lists);

      return bot.sendMessage(chatId, text, {
        replyMarkup: bot.keyboard([
          ['/list_add', '/list_remove', '/person_add']
        ], {resize: true, once: true})
      });
    })
  });
}
