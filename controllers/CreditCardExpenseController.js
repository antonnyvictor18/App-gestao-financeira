const CreditCard = require('../models/CreditCard');

const CreditCardController = {
  async createCreditCard(req, res) {
    try {
      const { userId } = req.user; // Supondo que você tenha um middleware para autenticação que adiciona o usuário ao objeto de requisição (req.user)
      const { name, limit } = req.body;

      const newCreditCard = new CreditCard({
        name,
        limit,
        user: userId
      });

      await newCreditCard.save();

      return res.status(201).json(newCreditCard);
    } catch (error) {
      console.error('Error in CreditCardController.createCreditCard:', error);
      return res.status(500).json({ error: 'Failed to create credit card' });
    }
  },

  async getAllCreditCards(req, res) {
    try {
      const { userId } = req.user; // Supondo que você tenha um middleware para autenticação que adiciona o usuário ao objeto de requisição (req.user)

      const creditCards = await CreditCard.find({ user: userId });

      return res.json(creditCards);
    } catch (error) {
      console.error('Error in CreditCardController.getAllCreditCards:', error);
      return res.status(500).json({ error: 'Failed to fetch credit cards' });
    }
  },

  async getCreditCardById(req, res) {
    try {
      const { userId } = req.user; // Supondo que você tenha um middleware para autenticação que adiciona o usuário ao objeto de requisição (req.user)
      const { id } = req.params;

      const creditCard = await CreditCard.findOne({ _id: id, user: userId });

      if (!creditCard) {
        return res.status(404).json({ error: 'Credit card not found' });
      }

      return res.json(creditCard);
    } catch (error) {
      console.error('Error in CreditCardController.getCreditCardById:', error);
      return res.status(500).json({ error: 'Failed to fetch credit card' });
    }
  },

  async updateCreditCard(req, res) {
    try {
      const { userId } = req.user; // Supondo que você tenha um middleware para autenticação que adiciona o usuário ao objeto de requisição (req.user)
      const { id } = req.params;
      const { name, limit } = req.body;
        
      const updatedCreditCard = await CreditCard.findOneAndUpdate(
      { _id: id, user: userId },
      { name, limit },
      { new: true }
      );
        
      if (!updatedCreditCard) {
        return res.status(404).json({ error: 'Credit card not found' });
      }  
      return res.json(updatedCreditCard);
    } 
    catch (error) {
      console.error('Error in CreditCardController.updateCreditCard:', error);
        return res.status(500).json({ error: 'Failed to update credit card' });
      }
  },
        
  async deleteCreditCard(req, res) {
      try {
        const { userId } = req.user; // Supondo que você tenha um middleware para autenticação que adiciona o usuário ao objeto de requisição (req.user)
        const { id } = req.params;
        
        const deletedCreditCard = await CreditCard.findOneAndDelete({ _id: id, user: userId });
        
        if (!deletedCreditCard) {
          return res.status(404).json({ error: 'Credit card not found' });
        }
        
        return res.json({ message: 'Credit card deleted successfully' });
      } 
      catch (error) {
        console.error('Error in CreditCardController.deleteCreditCard:', error);
        return res.status(500).json({ error: 'Failed to delete credit card' });
      }
  }
        
};
        
module.exports = CreditCardController;
