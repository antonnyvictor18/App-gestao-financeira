import React from 'react';
import { getCreditCards, deleteCreditCard } from '../services/creditCardService';

const CreditCardList = () => {
  const [creditCards, setCreditCards] = React.useState([]);

  React.useEffect(() => {
    // Função para buscar os cartões de crédito do serviço
    const fetchCreditCards = async () => {
      try {
        const cards = await getCreditCards();
        setCreditCards(cards);
      } catch (error) {
        console.error('Erro ao buscar os cartões de crédito:', error);
      }
    };

    fetchCreditCards();
  }, []);

  const handleDelete = async (cardId) => {
    try {
      // Chamar a função para excluir o cartão de crédito do serviço
      await deleteCreditCard(cardId);

      // Atualizar a lista de cartões de crédito após a exclusão
      setCreditCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
    } catch (error) {
      console.error('Erro ao excluir o cartão de crédito:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Cartões de Crédito</h2>
      {creditCards.length === 0 ? (
        <p>Nenhum cartão de crédito encontrado.</p>
      ) : (
        <ul>
          {creditCards.map((card) => (
            <li key={card.id}>
              <p>Número do Cartão: {card.cardNumber}</p>
              <p>Titular: {card.cardHolder}</p>
              <p>Data de Expiração: {card.expirationDate}</p>
              <p>Limite: {card.limit}</p>
              <button onClick={() => handleDelete(card.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CreditCardList;
