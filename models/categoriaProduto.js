const DataTypes = require("sequelize");
const db = require("../config/dbconnection")

const CategoriaProduto = db.define('categoriaproduto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // pedidoId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: { model: "pedido", key: "id" },
  //   onDelete: "CASCADE"
  // },
  // produtoId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: { model: "produto", key: "id" },
  //   onDelete: "CASCADE"
  //},
  nomeCategoria: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

(async () => {
  try {
    await CategoriaProduto.sync({ force: false }); //{ force: true }
    console.log('Tabela de categoriaProduto criada com sucesso.');

  } catch (error) {
    console.error('Não foi possível conectar-se ao banco de dados:', error);
  }
})();

module.exports = CategoriaProduto
