const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconnections');
const Produto = require('./produto');
const Cliente = require('./cliente');

const Venda = sequelize.define('Venda', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  quantidade_produto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  id_produto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Produto,
      key: 'id',
    },
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id',
    },
  },
}, {
  // Opções adicionais do modelo, se necessário
  timestamps: false,
  freezeTableName: true,
});

(async () => {
  try {
    await Venda.sync({ force: false }); //{ force: true }
    console.log('Tabela de categoriaProduto criada com sucesso.');

  } catch (error) {
    console.error('Não foi possível conectar-se ao banco de dados:', error);
  }
})();

module.exports = Venda;