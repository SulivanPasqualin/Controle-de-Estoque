const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconnections');

const UnidadeMedida = sequelize.define('UnidadeMedida', {
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
    await UnidadeMedida.sync({ force: false }); //{ force: true }
    console.log('Tabela de unidadeMedida criada com sucesso.');

  } catch (error) {
    console.error('Não foi possível conectar-se ao banco de dados:', error);
  }
})();

module.exports = UnidadeMedida;