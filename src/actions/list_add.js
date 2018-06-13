module.exports = (bot, db) => {
  bot.on('/list_add', (msg, propse) => {
    const id = msg.from.id;

    // Ask list name
    return bot.sendMessage(id, 'What is list name?', {ask: 'list-add-name'});
  });

  // Ask list name event
  bot.on('ask.list-add-name', (msg) => {
    const id = msg.from.id;
    const name = msg.text;

    db.collection('lists').insertOne({
      name,
      people: []
    });

    // Ask user age
    return bot.sendMessage(id, `Added a list "${name}"!`);
  });
};
