# Sistema de Controle de Estoque e Fluxo de Caixa

Este projeto é uma aplicação Node.js desenvolvida para gerenciar fluxo de caixa, controle de estoque, cadastro de clientes e fornecedores, além de permitir o registro de produtos, compras, vendas e outras despesas.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **EJS**: Engine de templates para geração de páginas HTML.
- **HTML5 & CSS3**: Linguagens para estruturação e estilização das páginas.
- **Bulma**: Framework CSS para estilização.
- **Sequelize**: ORM para interação com o banco de dados.
- **MySQL**: Banco de dados utilizado.

## Funcionalidades Principais

### Cadastros
- **Clientes**: Registro e gerenciamento de informações.
- **Fornecedores**: Registro e gerenciamento de informações.
- **Produtos**: Registro e gerenciamento de informações.

### Operações
- **Compras**: Registro de compras para atualização do estoque.
- **Vendas**: Realização de vendas, atualizando o estoque.
- **Estoque**: Controle de itens em estoque.
- **Fluxo de Caixa**: Integração das operações para controlar entradas, saídas e demais despesas.

## Banco de Dados

A aplicação utiliza o MySQL como banco de dados. Certifique-se de ter o MySQL instalado e configurado corretamente antes de executar a aplicação.

### Configuração do Banco de Dados
1. Crie um banco de dados MySQL e configure as credenciais no arquivo `config/dbconnection.js`.

## Instalação e Execução    

### Pré-requisitos
- Node.js instalado.
- MySQL configurado.
- Clonar o repositório.

### Passos para Execução
1. Instale as dependências:
    - npm install

2. Execute a aplicação:
    - node server.js

3. Acesse a aplicação no navegador:
    - http://localhost:3000

## Autores
- **Evandro Ferreira Martins - evandro131@gmail.com      - N/A**
- **Sulivan Pasqualin        - sulivanpasqualin@live.com - (49) 99935-5266**

### Projeto Integrador - Instituto Federal de Santa Catarina - 2023