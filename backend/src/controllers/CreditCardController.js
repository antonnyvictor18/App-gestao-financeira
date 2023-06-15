// Importe os modelos relevantes
const CreditCard = require('../models/CreditCard');
const User = require('../models/User');

// Controlador para lidar com as ações relacionadas aos cartões de crédito
const CreditCardController = {
  // Cria um novo cartão de crédito
  async createCreditCard(req, res) {
    try {
      const { user_id, card_number, limit, due_date } = req.body;

      // Verifique se o usuário existe
      const user = await User.findById(user_id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Crie um novo cartão de crédito associado ao usuário
      const creditCard = new CreditCard({ user_id, card_number, limit, due_date });
      await creditCard.save();

      return res.status(201).json(creditCard);
    } catch (error) {
      console.error('Error in CreditCardController.createCreditCard:', error);
      return res.status(500).json({ error: 'Failed to create credit card' });
    }
  },

  // Obtém todos os cartões de crédito de um usuário
  async getAllCreditCards(req, res) {
    try {
      const { user_id } = req.params;

      // Verifique se o usuário existe
      const user = await User.findById(user_id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Busque todos os cartões de crédito do usuário
      const creditCards = await CreditCard.find({ user_id });

      return res.json(creditCards);
    } catch (error) {
      console.error('Error in CreditCardController.getAllCreditCards:', error);
      return res.status(500).json({ error: 'Failed to get credit cards' });
    }
  }
};

module.exports = CreditCardController;
