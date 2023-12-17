const DataTypes = require("sequelize");
const db = require("../config/dbconnection")

const Estoque = db.define('estoque', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_Produto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: "produto", key: "id" },
    onDelete: "CASCADE"
},
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

(async () => {
  try {
    await Estoque.sync({ force: false }); //{ force: true }
    console.log('Tabela de unidadeMedida criada com sucesso.');

  } catch (error) {
    console.error('Não foi possível conectar-se ao banco de dados:', error);
  }
})();

module.exports = Estoque