const mongoose = require('mongoose');

const expenseIncomeSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  frequency: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const ExpenseIncome = mongoose.model('ExpenseIncome', expenseIncomeSchema);

module.exports = ExpenseIncome;
