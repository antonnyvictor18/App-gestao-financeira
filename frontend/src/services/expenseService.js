// Simulação de dados de despesas
const expenses = [
    { id: 1, userId: 1, category: 'Alimentação', amount: 50 },
    { id: 2, userId: 1, category: 'Transporte', amount: 30 },
  ];
  
  // Função para obter as despesas de um usuário
  export const getExpenses = async (userId) => {
    try {
      // Simulação de chamada assíncrona para obter as despesas
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const userExpenses = expenses.filter((expense) => expense.userId === userId);
          resolve(userExpenses);
        }, 1000);
      });
  
      return response;
    } catch (error) {
      throw new Error('Erro ao obter as despesas');
    }
  };
  
  // Função para adicionar uma nova despesa
  export const addExpense = async (userId, category, amount) => {
    try {
      // Simulação de chamada assíncrona para adicionar a despesa
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          const newExpense = { id: Date.now(), userId, category, amount };
          expenses.push(newExpense);
          resolve(newExpense);
        }, 1000);
      });
  
      return response;
    } catch (error) {
      throw new Error('Erro ao adicionar a despesa');
    }
  };
  
  // Função para excluir uma despesa
  export const deleteExpense = async (expenseId) => {
    try {
      // Simulação de chamada assíncrona para excluir a despesa
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const index = expenses.findIndex((expense) => expense.id === expenseId);
          if (index !== -1) {
            expenses.splice(index, 1);
            resolve({ success: true });
          } else {
            reject(new Error('Despesa não encontrada'));
          }
        }, 1000);
      });
  
      return response;
    } catch (error) {
      throw new Error('Erro ao excluir a despesa');
    }
  };
  