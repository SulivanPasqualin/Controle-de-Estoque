const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconnections');

const UnMedProduto = sequelize.define('UnMedProduto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nomeUnMed: {
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
    await UnMedProduto.sync({ force: true }); // true para forçar gerar uma tabela no banco ao iniciar (apaga dados existentes se houver), mantenha false caso já exista a tabela e deseje manter os dados
    console.log('Tabela de unidadeMedida criada com sucesso.');

  } catch (error) {
    console.error('Não foi possível conectar-se ao banco de dados:', error);
  }
})();

module.exports = UnMedProduto;