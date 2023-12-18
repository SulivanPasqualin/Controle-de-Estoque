const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconnections');
const Venda = require('./venda');
const Produto = require('./produto');

const Venda_Produto = sequelize.define('Venda_Produto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_venda: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Venda,
      key: 'id',
    },
  },
  id_produto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Produto,
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
      await Venda_Produto.sync({ force: false }); //{ force: true }
      console.log('Tabela de categoriaProduto criada com sucesso.');
  
    } catch (error) {
      console.error('Não foi possível conectar-se ao banco de dados:', error);
    }
  })();

module.exports = Venda_Produto;