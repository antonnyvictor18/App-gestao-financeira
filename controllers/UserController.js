const User = require('../models/User');

const UserController = {
  async createUser(req, res) {
    try {
      const { name, email, password } = req.body;

      // Verifique se o email já está em uso
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ error: 'Email already exists' });
      }

      // Crie um novo usuário
      const newUser = new User({ name, email, password });
      await newUser.save();

      return res.status(201).json(newUser);
    } catch (error) {
      console.error('Error in UserController.createUser:', error);
      return res.status(500).json({ error: 'Failed to create user' });
    }
  }
};

module.exports = UserController;