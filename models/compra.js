const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconnections');
const Produto = require('./produto');
const FornecedorPF = require('./fornecedor_PF');
const FornecedorPJ = require('./fornecedor_PJ');

const Compra = sequelize.define('Compra', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_produto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Produto, // Referência ao modelo Produto
      key: 'id', // Chave primária na tabela Produto
    },
  },
  cpf_fornecedor: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: FornecedorPF, // Referência ao modelo FornecedorPF
      key: 'cpf', // Chave primária na tabela FornecedorPF
    },
  },
  cnpj_fornecedor: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: FornecedorPJ, // Referência ao modelo FornecedorPJ
      key: 'cnpj', // Chave primária na tabela FornecedorPJ
    },
  },
}, {
  // Opções adicionais do modelo, se necessário
  timestamps: false,
  freezeTableName: true,
});

(async () => {
    try {
      await Compra.sync({ force: false }); //{ force: true }
      console.log('Tabela de categoriaProduto criada com sucesso.');
  
    } catch (error) {
      console.error('Não foi possível conectar-se ao banco de dados:', error);
    }
  })();

module.exports = Compra;