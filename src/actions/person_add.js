// /about
module.exports = (bot, db) => {
  let newPerson = {};

  bot.on('/person_add', (msg) => {
    const id = msg.from.id;

    db.collection('lists').find({}).toArray((err, docs) => {
      const lists = docs;

      return bot.sendMessage(id, 'To which list new person should be added?', {
        ask: 'person-add-list',
        replyMarkup: bot.keyboard([
          lists.map(list => list.name)
        ], {resize: true, once: false})
      });
    });
  });

  // Ask person add list name event
  bot.on('ask.person-add-list', (msg) => {
    const id = msg.from.id;
    const name = msg.text;

    newPerson.list = name;

    // Ask user age
    return bot.sendMessage(id, `What is name of person?`, {
      ask: 'person-add-name',
    });
  });

  // Ask person add name event
  bot.on('ask.person-add-name', (msg) => {
    const id = msg.from.id;
    const name = msg.text;

    newPerson.name = name;

    // db.collection('lists').findOne({
    //   name: newPerson.list
    // })

    // Ask user age
    return bot.sendMessage(id, `Person ${JSON.stringify(newPerson)}`);
  });
}
