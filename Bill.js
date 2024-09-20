const mongoose = require('mongoose');
const billSchema = new mongoose.Schema({
  products: Array,
  totalAmount: Number,
  cashierId: String,
  timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Bill', billSchema);
