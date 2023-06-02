const mongoose = require('mongoose');

const creditCardExpenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  creditCardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CreditCard',
    required: true
  }
});

const CreditCardExpense = mongoose.model('CreditCardExpense', creditCardExpenseSchema);

module.exports = CreditCardExpense;
