const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

//Define our model
const userSchema = new Schema({ //lowercase per trasformarlo in lowercase
    name: {type: String},
    locations: [String]
});

//Create the model class
const ModelClass = mongoose.model('user',userSchema);

//Export the model
module.exports = ModelClass;
