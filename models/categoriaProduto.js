const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconnections');

const CategoriaProduto = sequelize.define('CategoriaProduto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nomeCategoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Opções adicionais do modelo, se necessário
  timestamps: false,
  freezeTableName: true,
});

(async () => {
  try {
    await CategoriaProduto.sync({ force: false }); //{ force: true }
    console.log('Tabela de categoriaProduto criada com sucesso.');

  } catch (error) {
    console.error('Não foi possível conectar-se ao banco de dados:', error);
  }
})();

module.exports = CategoriaProduto;