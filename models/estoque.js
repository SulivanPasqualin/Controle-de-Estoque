const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconnections');
const Produto = require('./produto');

const Estoque = sequelize.define('Estoque', {
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
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  // Opções adicionais do modelo, se necessário
  timestamps: false,
  freezeTableName: true,
});

(async () => {
  try {
    await Estoque.sync({ force: false }); //{ force: true }
    console.log('Tabela de unidadeMedida criada com sucesso.');

  } catch (error) {
    console.error('Não foi possível conectar-se ao banco de dados:', error);
  }
})();

(async () => {
  try {
    await Estoque.sync({ force: false }); //{ force: true }
    console.log('Tabela de categoriaProduto criada com sucesso.');

  } catch (error) {
    console.error('Não foi possível conectar-se ao banco de dados:', error);
  }
})();

module.exports = Estoque;