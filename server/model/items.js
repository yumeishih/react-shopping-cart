const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let itemListSchema = new Schema({
  itemID: { type: String, unique: true },
  itemImg: { type: String },
  itemName: { type: String },
  describe: { type: String },
  price: { type: Number }
});

module.exports = mongoose.model('itemList', itemListSchema,'itemList');