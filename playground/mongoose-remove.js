const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59c80ba76a061c313a3594fd'}).then((todo) => {

});

Todo.findByIdAndRemove('59c80ba76a061c313a3594fd').then((todo) => {
  console.log(todo);
});
