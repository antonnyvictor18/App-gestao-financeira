// Simulação de dados de receitas
const incomes = [
    { id: 1, userId: 1, category: 'Salário', amount: 2000 },
    { id: 2, userId: 1, category: 'Investimentos', amount: 500 },
  ];
  
  // Função para obter as receitas de um usuário
  export const getIncomes = async (userId) => {
    try {
      // Simulação de chamada assíncrona para obter as receitas
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const userIncomes = incomes.filter((income) => income.userId === userId);
          resolve(userIncomes);
        }, 1000);
      });
  
      return response;
    } catch (error) {
      throw new Error('Erro ao obter as receitas');
    }
  };
  
  // Função para adicionar uma nova receita
  export const addIncome = async (userId, category, amount) => {
    try {
      // Simulação de chamada assíncrona para adicionar a receita
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          const newIncome = { id: Date.now(), userId, category, amount };
          incomes.push(newIncome);
          resolve(newIncome);
        }, 1000);
      });
  
      return response;
    } catch (error) {
      throw new Error('Erro ao adicionar a receita');
    }
  };
  
  // Função para excluir uma receita
  export const deleteIncome = async (incomeId) => {
    try {
      // Simulação de chamada assíncrona para excluir a receita
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const index = incomes.findIndex((income) => income.id === incomeId);
          if (index !== -1) {
            incomes.splice(index, 1);
            resolve({ success: true });
          } else {
            reject(new Error('Receita não encontrada'));
          }
        }, 1000);
      });
  
      return response;
    } catch (error) {
      throw new Error('Erro ao excluir a receita');
    }
  };
  