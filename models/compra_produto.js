const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconnections');
const Compra = require('./compra');
const Produto = require('./produto');

const Compra_Produto = sequelize.define('Compra_Produto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_compra: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Compra,
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
      await Compra_Produto.sync({ force: false }); //{ force: true }
      console.log('Tabela de categoriaProduto criada com sucesso.');
  
    } catch (error) {
      console.error('Não foi possível conectar-se ao banco de dados:', error);
    }
  })();

module.exports = Compra_Produto;