// // Simulação de dados de relatórios
// const reports = [
//     { id: 1, userId: 1, title: 'Resumo Mensal', data: 'Some data here' },
//     { id: 2, userId: 1, title: 'Despesas por Categoria', data: 'Some data here' },
//   ];
  
//   // Função para obter os relatórios de um usuário
//   export const getReports = async (userId) => {
//     try {
//       // Simulação de chamada assíncrona para obter os relatórios
//       const response = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//           const userReports = reports.filter((report) => report.userId === userId);
//           resolve(userReports);
//         }, 1000);
//       });
  
//       return response;
//     } catch (error) {
//       throw new Error('Erro ao obter os relatórios');
//     }
//   };
  
//   // Função para gerar um novo relatório
//   export const generateReport = async (userId, title) => {
//     try {
//       // Simulação de chamada assíncrona para gerar o relatório
//       const response = await new Promise((resolve) => {
//         setTimeout(() => {
//           const newReport = { id: Date.now(), userId, title, data: 'Some data here' };
//           reports.push(newReport);
//           resolve(newReport);
//         }, 1000);
//       });
  
//       return response;
//     } catch (error) {
//       throw new Error('Erro ao gerar o relatório');
//     }
//   };
  
//   // Função para excluir um relatório
//   export const deleteReport = async (reportId) => {
//     try {
//       // Simulação de chamada assíncrona para excluir o relatório
//       const response = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//           const index = reports.findIndex((report) => report.id === reportId);
//           if (index !== -1) {
//             reports.splice(index, 1);
//             resolve({ success: true });
//           } else {
//             reject(new Error('Relatório não encontrado'));
//           }
//         }, 1000);
//       });
  
//       return response;
//     } catch (error) {
//       throw new Error('Erro ao excluir o relatório');
//     }
//   };
  