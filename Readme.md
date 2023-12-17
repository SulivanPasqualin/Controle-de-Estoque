# Projeto Fluxo de Caixa e Controle de Estoque

Este projeto é uma aplicação Node.js desenvolvida para gerenciar fluxo de caixa, controle de estoque, cadastro de clientes e fornecedores, além de permitir o registro de produtos, compras, vendas e despesas da empresa.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **EJS**: Engine de templates para geração de páginas HTML.
- **HTML5 & CSS3**: Linguagens para estruturação e estilização das páginas.
- **Bulma**: Framework CSS para estilização.
- **MySQL**: Banco de dados utilizado.

## Funcionalidades Principais

### Cadastros
- **Clientes e Fornecedores**: Registro e gerenciamento de informações.
- **Produtos e Estoque**: Cadastro e controle de itens em estoque.

### Operações
- **Compras**: Registro de compras para atualização do estoque.
- **Vendas**: Realização de vendas, atualizando o estoque.
- **Fluxo de Caixa**: Integração das operações para controlar entradas, saídas e despesas da empresa.

A aplicação utiliza o MySQL como banco de dados. Certifique-se de ter o MySQL instalado e configurado corretamente antes de executar a aplicação.

## Banco de Dados

A aplicação utiliza o MySQL como banco de dados. Certifique-se de ter o MySQL instalado e configurado corretamente antes de executar a aplicação.

### Configuração do Banco de Dados
1. Configure as credenciais do banco de dados no arquivo `config/database.js`.
2. Importe o esquema do banco de dados executando o script SQL disponível em `scripts/esquema.sql`.

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