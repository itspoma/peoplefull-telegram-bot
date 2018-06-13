module.exports = (bot, db) => {
  bot.on('/list_remove', (msg, propse) => {
    const id = msg.from.id;

    // Ask list name
    return bot.sendMessage(id, 'Type name of list?', {ask: 'list-remove-name'});
  });

  // Ask list name event
  bot.on('ask.list-remove-name', (msg) => {
    const id = msg.from.id;
    const name = msg.text;

    db.collection('lists').deleteOne({
      name,
    });

    // Ask user age
    return bot.sendMessage(id, `Removed a list "${name}"!`);
  });
};
