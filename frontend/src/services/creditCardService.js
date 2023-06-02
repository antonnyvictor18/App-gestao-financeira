// Simulação de dados de cartões de crédito
const creditCards = [
    { id: 1, userId: 1, cardNumber: '1234567890123456', limit: 5000, currentBalance: 2500 },
    { id: 2, userId: 1, cardNumber: '9876543210987654', limit: 3000, currentBalance: 1500 },
  ];
  
  // Função para obter os cartões de crédito de um usuário
  export const getCreditCards = async (userId) => {
    try {
      // Simulação de chamada assíncrona para obter os cartões de crédito
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const userCreditCards = creditCards.filter((card) => card.userId === userId);
          resolve(userCreditCards);
        }, 1000);
      });
  
      return response;
    } catch (error) {
      throw new Error('Erro ao obter os cartões de crédito');
    }
  };
  
  // Função para adicionar um novo cartão de crédito
  export const addCreditCard = async (userId, cardNumber, limit) => {
    try {
      // Simulação de chamada assíncrona para adicionar o cartão de crédito
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          const newCreditCard = { id: Date.now(), userId, cardNumber, limit, currentBalance: 0 };
          creditCards.push(newCreditCard);
          resolve(newCreditCard);
        }, 1000);
      });
  
      return response;
    } catch (error) {
      throw new Error('Erro ao adicionar o cartão de crédito');
    }
  };
  
  // Função para excluir um cartão de crédito
  export const deleteCreditCard = async (creditCardId) => {
    try {
      // Simulação de chamada assíncrona para excluir o cartão de crédito
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const index = creditCards.findIndex((card) => card.id === creditCardId);
          if (index !== -1) {
            creditCards.splice(index, 1);
            resolve({ success: true });
          } else {
            reject(new Error('Cartão de crédito não encontrado'));
          }
        }, 1000);
      });
  
      return response;
    } catch (error) {
      throw new Error('Erro ao excluir o cartão de crédito');
    }
  };
  