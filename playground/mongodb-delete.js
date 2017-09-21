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

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Ahmed'}).then((result) => {
  //   console.log(result);
  // });
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: ObjectID('59c1563f34dec31a8479b14b')}).then((result) => {
    console.log(result);
  });
  // db.close();
});
