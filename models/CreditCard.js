const mongoose = require('mongoose');

const creditCardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  limit: {
    type: Number,
    required: true
  },
  statementDate: {
    type: Number,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const CreditCard = mongoose.model('CreditCard', creditCardSchema);

module.exports = CreditCard;
