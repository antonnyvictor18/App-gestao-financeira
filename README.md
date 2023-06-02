# Financeiro App

Este é um aplicativo de organização financeira que permite aos usuários controlar suas receitas, despesas e cartões de crédito.

## Funcionalidades

- Autenticação de usuário (login e signup)
- Cadastro de dados pessoais
- Cadastro de receitas
- Cadastro de despesas
- Cadastro de cartões de crédito com faturas e limites
- Geração de relatórios com gráficos ilustrativos
- Sugestões com base nos relatórios

## Tecnologias Utilizadas

- React
- Node.js
- Express
- MongoDB (utilizando Mongoose)
- Bcrypt.js
- JSON Web Token (JWT)
- Cors

## Instalação

1. Clone o repositório: `git clone https://github.com/seu-usuario/financeiro-app.git`
2. Navegue para o diretório do projeto: `cd financeiro-app`
3. Instale as dependências: `npm install`

## Configuração do Banco de Dados

1. Certifique-se de ter o MongoDB instalado e em execução localmente.
2. No diretório do projeto, crie um arquivo `.env` e defina as variáveis de ambiente necessárias:
3. MONGODB_URI= 'sua-uri-do-mongodb'
4. SECRET_KEY='sua-chave-secreta-para-jwt'

## Executando o Projeto

- Para executar o servidor backend e o cliente frontend (modo de desenvolvimento): `npm run dev`
- O servidor backend estará disponível em `http://localhost:5000`
- O cliente frontend estará disponível em `http://localhost:3000`

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias, correções ou novas funcionalidades.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
