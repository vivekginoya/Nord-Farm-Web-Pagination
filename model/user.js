const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    productname: String,
    image: String,
    from: String,
    nutrients: String,
    quantity: String,
    price: String,
    organic: String,
    description: String
});

let USER = mongoose.model('data' , userModel)

module.exports = USER