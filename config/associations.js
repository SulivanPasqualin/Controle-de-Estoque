const Usuario = require("../models/usuario")
const Usuario_PF = require("../models/usuario_PF")
const Usuario_PJ = require("../models/usuario_PJ")
const Cliente_PF = require("../models/cliente_PF")
const Cliente_PJ = require("../models/cliente_PJ")
const Fornecedor_PF = require("../models/fornecedor_PF")
const Fornecedor_PJ = require("../models/fornecedor_PJ")
const Produto = require("../models/produto")
const CategoriaProduto = require("../models/categoriaProduto")
const UnMedProduto = require("../models/unMedProduto")
const Compra = require("../models/compra")
const Venda = require("../models/venda")
const Estoque = require("../models/estoque")
const FluxoDeCaixa = require("../models/fluxoDeCaixa")

const db = require("./dbconnection")

// Relacionamentos das tabelas

Usuario.hasOne(Usuario_PJ, { foreignKey: 'id' });
Usuario_PJ.belongsTo(Usuario, { foreignKey: 'id' });

Usuario.hasOne(Usuario_PF, { foreignKey: 'id' });
Usuario_PF.belongsTo(Usuario, { foreignKey: 'id' });

Cliente_PJ.hasMany(Venda,{onDelete:"CASCADE"})
Venda.belongsTo(Cliente_PJ,{foreingKey:"id_cliente"})

Cliente_PF.hasMany(Venda,{onDelete:"CASCADE"})
Venda.belongsTo(Cliente_PF,{foreingKey:"id_cliente"})

Fornecedor_PJ.hasMany(Compra,{onDelete:"CASCADE"})
Compra.belongsTo(Fornecedor_PJ,{foreingKey:"cnpj_fornecedor_pj"})

Fornecedor_PF.hasMany(Compra,{onDelete:"CASCADE"})
Compra.belongsTo(Fornecedor_PF,{foreingKey:"cpf_fornecedor_pf"})

CategoriaProduto.hasMany(Produto,{onDelete:"CASCADE"})
Produto.belongsTo(CategoriaProduto,{foreingKey:"id_catProd"})

UnMedProduto.hasMany(Produto,{onDelete:"CASCADE"})
Produto.belongsTo(UnMedProduto,{foreingKey:"id_unMed"})

Estoque.hasMany(Produto,{onDelete:"CASCADE"})
Produto.belongsTo(Estoque,{foreingKey:"id_estoque"})

// Relacionamento entre tabelas N para N com tabela intermediária

Produto.belongsToMany(Compra,{through:"compra_produto",onDelete:"CASCADE"})
Compra.belongsToMany(Produto,{through:"compra_produto",onDelete:"CASCADE"})

Produto.belongsToMany(Venda,{through:"venda_produto",onDelete:"CASCADE"})
Venda.belongsToMany(Produto,{through:"venda_produto",onDelete:"CASCADE"})


db.sync({ force: true }) // true para forçar gerar tabelas no banco ao iniciar (apaga dados existentes se houver), mantenha false caso já exista a tabela e deseje manter os dados

module.exports = {Usuario, Usuario_PF, Usuario_PJ, Cliente_PF, Cliente_PJ, Fornecedor_PF, Fornecedor_PJ, Produto, CategoriaProduto, UnMedProduto, Compra, Venda, Estoque, FluxoDeCaixa}