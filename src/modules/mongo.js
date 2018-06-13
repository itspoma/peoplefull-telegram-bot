const MongoClient = require('mongodb').MongoClient;

let instance;

const connect = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(process.env.MONGO_URL, (err, client) => {
      if (err) throw err;

      db = client.db(process.env.MONGO_DATABASE);
      resolve(db);
    })
  })
}

connect().then(db => instance = db)

module.exports = {
  getInstance: () => instance
};
