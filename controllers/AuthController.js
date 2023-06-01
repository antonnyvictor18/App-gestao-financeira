const User = require('../models/User');
const jwt = require('jsonwebtoken');

const AuthController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Verifique se o usuário existe no banco de dados
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Verifique se a senha está correta
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Gere um token de autenticação
      const token = jwt.sign({ userId: user._id }, 'seu-segredo-aqui');

      return res.json({ token });
    } catch (error) {
      console.error('Error in AuthController.login:', error);
      return res.status(500).json({ error: 'Failed to login' });
    }
  },

  logout(req, res) {
    // Lógica de logout do usuário, se necessário
    return res.json({ message: 'Logout successful' });
  }
};

module.exports = AuthController;
