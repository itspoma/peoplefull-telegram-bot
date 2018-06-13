const mongo = require('../modules/mongo');

const getAll = () => {
  const db = mongo.getInstance()

  return new Promise((resolve, reject) => {
    db.collection('lists').find({}).toArray((err, docs) => {
      if (err) return reject(err);

      const lists = docs;

      resolve(lists)
    })
  })
}

module.exports = {
  getAll,
}
