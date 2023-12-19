const express = require("express");
const routes = express.Router();

const usuarioController = require('../controllers/usuarioController');

// Rota para lidar com o cadastro de usuários
routes.post('/cadastro', usuarioController.cadastrarUsuario);

// Rotas
routes.get("/login", function(req, res) {
    res.render('pages/login/form'); // Renderizar o arquivo EJS em vez de enviar o HTML diretamente
});

routes.get("/cadastro", function(req, res) {
    res.status(200).render('pages/login/cadastro');
});

routes.get("/index", function(req, res) {
    res.status(200).render('pages/index/form');
});

routes.get("/clientes", function(req, res) {
    res.status(200).render('pages/clientes/form');
});

routes.get("/cadastrodecliente", function(req, res) {
    res.status(200).render('pages/clientes/cadastro');
});

routes.get("/fornecedores", function(req, res) {
    res.status(200).render('pages/fornecedores/form');
});

routes.get("/cadastrodefornecedor", function(req, res) {
    res.status(200).render('pages/fornecedores/cadastro');
});

routes.get("/estoque", function(req, res) {
    res.status(200).render('pages/estoque/form');
});

routes.get("/produtos", function(req, res) {
    res.status(200).render('pages/produtos/form');
});

routes.get("/cadastrodeprodutos", function(req, res) {
    res.status(200).render('pages/produtos/cadastro');
});

routes.get("/compras", function(req, res) {
    res.status(200).render('pages/compras/form');
});

routes.get("/vendas", function(req, res) {
    res.status(200).render('pages/vendas/form');
});

routes.get("/fluxodecaixa", function(req, res) {
    res.status(200).render('pages/fluxodecaixa/form');
});

routes.get("/relatorios", function(req, res) {
    res.status(200).render('pages/relatorios/form');
});

module.exports = routes;

// const ProductController = require("../controllers/ProductController")
// // const PessoaController = require("../controllers/PessoaController")
// // const PedidoController = require("../controllers/PedidoController")
// // const {autenticado,admin,acessarProprioRecurso} = require("../security/authorization")

// //página inicial
// routes.get("/",(req,res)=>{
//     res.status(200).render("pages/index")
// })

// //rotas de produtos
// routes.get("/produtos/novo",ProductController.getRegisterPage)
// routes.get("/produtos/:produtoId/update",ProductController.getUpdatePage)

// routes.get("/produtos",ProductController.getAll)
// routes.get("/produtos/:produtoId",ProductController.getById)
// routes.post("/produtos",ProductController.create)
// routes.put("/produtos/:produtoId",ProductController.update)
// routes.delete("/produtos/:produtoId",ProductController.delete)

//rotas de pedidos
// routes.get("/pedidos/:pessoaId/:pedidoId/update",acessarProprioRecurso,PedidoController.getUpdatePage)
// routes.get("/pedidos",admin,PedidoController.getAllPedidos)
// routes.get("/pedidos/:pessoaId",acessarProprioRecurso,PedidoController.getAll)
// routes.get("/pedidos/:pessoaId/:pedidoId",acessarProprioRecurso, PedidoController.getById)
// routes.post("/pedidos/:pessoaId",acessarProprioRecurso,PedidoController.create)
// routes.put("/pedidos/:pessoaId/:pedidoId",acessarProprioRecurso,PedidoController.update)
// routes.delete("/pedidos/:pessoaId/:pedidoId",acessarProprioRecurso,PedidoController.delete)

// //rotas de pessoas
// routes.get("/form-login",PessoaController.getLoginPage)
// routes.post("/logar",PessoaController.logar)
// routes.get("/logout",PessoaController.logout)
// routes.get("/pessoas/novo",PessoaController.getRegisterPage)
// routes.get("/pessoas/:pessoaId/update",acessarProprioRecurso,PessoaController.getUpdatePage)

// routes.get("/pessoas",admin,PessoaController.getAll)
// routes.get("/pessoas/:pessoaId",acessarProprioRecurso,PessoaController.getById)
// routes.post("/pessoas",PessoaController.create)
// routes.put("/pessoas/:pessoaId",acessarProprioRecurso,PessoaController.update)
// routes.delete("/pessoas/:pessoaId",admin,PessoaController.delete)

// module.exports = routes