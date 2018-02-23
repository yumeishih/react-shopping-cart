const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let cartItemSchema = new Schema({
  itemID: { type: String, unique: true },
  itemImg: { type: String },
  itemName: { type: String },
  describe: { type: String },
  price: { type: Number },
  qty: { type: Number },
});

module.exports = mongoose.model('cartItem', cartItemSchema, 'cartItem');