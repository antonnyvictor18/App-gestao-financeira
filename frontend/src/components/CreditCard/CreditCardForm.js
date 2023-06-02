import React, { useState } from 'react';
import { addCreditCard } from '../services/creditCardService';

const CreditCardForm = () => {
  const [creditCardData, setCreditCardData] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
    limit: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreditCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Chamar a função de adicionar cartão de crédito do serviço
      await addCreditCard(creditCardData);

      // Realizar qualquer ação necessária após adicionar o cartão de crédito
    } catch (error) {
      // Lidar com erros ao adicionar o cartão de crédito, como erros de validação ou conexão com o servidor
      console.error('Erro ao adicionar o cartão de crédito:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cardNumber">Número do Cartão:</label>
      <input
        type="text"
        id="cardNumber"
        name="cardNumber"
        value={creditCardData.cardNumber}
        onChange={handleInputChange}
        placeholder="Digite o número do cartão"
      />

      <label htmlFor="cardHolder">Nome do Titular:</label>
      <input
        type="text"
        id="cardHolder"
        name="cardHolder"
        value={creditCardData.cardHolder}
        onChange={handleInputChange}
        placeholder="Digite o nome do titular"
      />

      <label htmlFor="expirationDate">Data de Expiração:</label>
      <input
        type="text"
        id="expirationDate"
        name="expirationDate"
        value={creditCardData.expirationDate}
        onChange={handleInputChange}
        placeholder="Digite a data de expiração (MM/AA)"
      />

      <label htmlFor="cvv">CVV:</label>
      <input
        type="text"
        id="cvv"
        name="cvv"
        value={creditCardData.cvv}
        onChange={handleInputChange}
        placeholder="Digite o CVV"
      />

      <label htmlFor="limit">Limite:</label>
      <input
        type="text"
        id="limit"
        name="limit"
        value={creditCardData.limit}
        onChange={handleInputChange}
        placeholder="Digite o limite do cartão"
      />

      <button type="submit">Adicionar Cartão de Crédito</button>
    </form>
  );
};

export default CreditCardForm;
