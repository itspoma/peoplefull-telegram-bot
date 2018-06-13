require('dotenv').config()

const bot = require('./modules/telegram');

require('./actions/start')(bot);
require('./actions/me')(bot);
require('./actions/about')(bot);
require('./actions/lists')(bot);
require('./actions/list_add')(bot);
require('./actions/list_remove')(bot);
require('./actions/person_add')(bot);


  // bot.on(/^\/person_add (.+)\s(.+)$/, (msg, props) => {
  //   const listName = props.match[1];
  //   const personName = props.match[1];

  //   console.log('msg', msg);
  //   return msg.reply.text('list!')
  // });

bot.start();
