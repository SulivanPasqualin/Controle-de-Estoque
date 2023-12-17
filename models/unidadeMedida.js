const DataTypes = require("sequelize");
const db = require("../config/dbconnection")

const UnidadeMedida = db.define('unidadeMedida', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nomeUnMed: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

(async () => {
  try {
    await UnidadeMedida.sync({ force: false }); //{ force: true }
    console.log('Tabela de unidadeMedida criada com sucesso.');

  } catch (error) {
    console.error('Não foi possível conectar-se ao banco de dados:', error);
  }
})();

module.exports = UnidadeMedida