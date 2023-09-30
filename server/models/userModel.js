const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Worry about authentication and hashing passwords later
// const SALT_WORK_FACTOR = 10;
// const bcrypt = require('bcryptjs');


//Want to nest my games schema inside of the user schema, so I need to create it first. I'll worry about other functionality later
// const gameSchema = new Schema({
//     gameName: {type: String, required: true}
// });

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email:    {type: String, required: true},
  // game: [gameSchema]
});

module.exports = mongoose.model('User', userSchema);
