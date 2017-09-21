// const MongoClient = require('mongodb').MongoClient;
// Below is the same code above but with ES6 syntax
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongoDB server.');
  }
  console.log('Connected To MongoDB Server.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: ObjectID('59c3cf289caffd04d29c85d4')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: ObjectID('59c025a2d26c151194768ded')
  }, {
    $set: {
      name: 'Ahmed'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
