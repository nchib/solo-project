const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//Want to nest my games schema inside of the user schema, so I need to create it first. I'll worry about other functionality later
const gameSchema = new Schema({
    game: {type: String, required: true}
});

module.exports = mongoose.model('Game', gameSchema);