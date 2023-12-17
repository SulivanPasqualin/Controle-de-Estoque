const CategoriaProduto = require("../models/categoriaProduto")
const Cliente_PF = require("../models/cliente_PF")
const Cliente_PJ = require("../models/cliente_PJ")
const Compra = require("../models/compra")
const Estoque = require("../models/estoque")
const FluxoDeCaixa = require("../models/fluxoDeCaixa")
const Fornecedor_PJ = require("../models/fornecedor_PJ")
const Fornecedor_PF = require("../models/fornecedor_PF")
const Produto = require("../models/produto")
const UnidadeMedida = require("../models/unidadeMedida")
const Usuario = require("../models/usuario")
const Venda = require("../models/venda")

const db = require("../config/dbconnection")


// Cliente_PJ.hasMany(Venda,{onDelete:"CASCADE"})
// Venda.belongsTo(Cliente_PJ,{foreingKey:"id_cliente"})

// Cliente_PF.hasMany(Venda,{onDelete:"CASCADE"})
// Venda.belongsTo(Cliente_PF,{foreingKey:"id_cliente"})

// Fornecedor_PJ.hasMany(Compra,{onDelete:"CASCADE"})
// Compra.belongsTo(Fornecedor_PJ,{foreingKey:"cnpj_fornecedor_pj"})

// Fornecedor_PF.hasMany(Compra,{onDelete:"CASCADE"})
// Compra.belongsTo(Fornecedor_PF,{foreingKey:"cpf_fornecedor_pf"})

CategoriaProduto.hasMany(Produto,{onDelete:"CASCADE"})
Produto.belongsTo(CategoriaProduto,{foreingKey:"id_catProd"})

UnidadeMedida.hasMany(Produto,{onDelete:"CASCADE"})
Produto.belongsTo(UnidadeMedida,{foreingKey:"id_unMed"})

Estoque.hasMany(Produto,{onDelete:"CASCADE"})
Produto.belongsTo(Estoque,{foreingKey:"id_estoque"})

Produto.belongsToMany(Compra,{through:"compra_produto",onDelete:"CASCADE"})
Compra.belongsToMany(Produto,{through:"compra_produto",onDelete:"CASCADE"})

Produto.belongsToMany(Venda,{through:"venda_produto",onDelete:"CASCADE"})
Venda.belongsToMany(Produto,{through:"venda_produto",onDelete:"CASCADE"})


db.sync({ force: true })  

module.exports = {CategoriaProduto, Cliente_PF, Cliente_PJ, Compra, Estoque, FluxoDeCaixa, Fornecedor_PF, Fornecedor_PJ, Produto, UnidadeMedida, Usuario, Venda}