module.exports = (bot) => {
  bot.on('/start', (msg, propse) => {
    const replyMarkup = bot.keyboard([
      ['/lists', '/about']
    ], {resize: true, once: false});

    return bot.sendMessage(msg.chat.id,
      '👱 Use commands: /lists and /about', {replyMarkup}
    );
  });
}
