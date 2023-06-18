const mongoose = require('mongoose');

const expenseIncomeSchema = new mongoose.Schema({
  data: {
    type: Date,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const ExpenseIncome = mongoose.model('ExpenseIncome', expenseIncomeSchema);

module.exports = ExpenseIncome;
