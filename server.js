// const express = require("express");
// const servidor = express();
// const path = require('path');

// servidor.set('view engine', 'ejs'); // Definir EJS como o mecanismo de visualização
// servidor.set('views', path.join(__dirname, 'views')); // Define o diretório onde os arquivos de visualização serão armazenados
// servidor.use(express.static(path.join(__dirname, 'public'))); // Servir arquivos estáticos

// // Rota login
// servidor.get("/login", function(req, res) {
//     res.render('pages/login/form'); // Renderizar o arquivo EJS em vez de enviar o HTML diretamente
// });

// // Rota cadastro de usuário
// servidor.get("/cadastro", function(req, res) {
//     res.status(200).render('pages/login/cadastro');
// });

// // Rota index (home)
// servidor.get("/index", function(req, res) {
//     res.status(200).render('pages/index/form')
// });

// // Rota clientes
// servidor.get("/clientes", function(req, res) {
//     res.status(200).render('pages/clientes/form');
// });

// // Rota cadastro de clientes
// servidor.get("/cadastrodecliente", function(req, res) {
//     res.status(200).render('pages/clientes/cadastro');
// });

// // Rota fornecedores
// servidor.get("/fornecedores", function(req, res) {
//     res.status(200).render('pages/fornecedores/form');
// });

// // Rota cadastro de fornecedores
// servidor.get("/cadastrodefornecedor", function(req, res) {
//     res.status(200).render('pages/fornecedores/cadastro');
// });

// // Rota estoque
// servidor.get("/estoque", function(req, res) {
//     res.status(200).render('pages/estoque/form');
// });

// // Rota produtos
// servidor.get("/produtos", function(req, res) {
//     res.status(200).render('pages/produtos/form');
// });

// // Rota cadastro de produtos
// servidor.get("/cadastrodeprodutos", function(req, res) {
//     res.status(200).render('pages/produtos/cadastro');
// });

// // Rota compras
// servidor.get("/compras", function(req, res) {
//     res.status(200).render('pages/compras/form');
// });

// // Rota vendas
// servidor.get("/vendas", function(req, res) {
//     res.status(200).render('pages/vendas/form');
// });

// // Rota fluxo de caixa
// servidor.get("/fluxodecaixa", function(req, res) {
//     res.status(200).render('pages/fluxodecaixa/form');
// });

// // Rota relatórios
// servidor.get("/relatorios", function(req, res) {
//     res.status(200).render('pages/relatorios/form');
// });

// // Servidor escutando na porta 3000
// servidor.listen(3000, function() {
//     console.log(`Servidor executando...`);
// });

const express = require("express");
const app = express();
const path = require('path');
const routes = require('./routes/routes'); // Arquivo de rotas

app.set('view engine', 'ejs'); // Definir EJS como o mecanismo de visualização
app.set('views', path.join(__dirname, 'views')); // Define o diretório onde os arquivos de visualização serão armazenados
app.use(express.static(path.join(__dirname, 'public'))); // Servir arquivos estáticos

// Use as rotas definidas no seu arquivo routes.js
app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});