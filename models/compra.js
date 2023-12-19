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
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
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
      await Compra.sync({ force: true }); // true para forçar gerar uma tabela no banco ao iniciar (apaga dados existentes se houver), mantenha false caso já exista a tabela e deseje manter os dados
      console.log('Tabela de categoriaProduto criada com sucesso.');
  
    } catch (error) {
      console.error('Não foi possível conectar-se ao banco de dados:', error);
    }
  })();

module.exports = Compra;