const Sequelize = require('sequelize');
require('dotenv').config();

// const sequelize = new Sequelize("controledeestoque", process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.HOST,
//   port: process.env.DB_PORT,
//   dialect: "mysql",
//   define: {
//     timestamps: false, // Não utilizar campos created_at e updated_at
//     freezeTableName: true, // Não acrescentar "S" nas tabelas
//   },
// });

const sequelize = new Sequelize("controledeestoque", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false, // Não utilizar campos created_at e updated_at
    freezeTableName: true, // Não acrescentar "S" nas tabelas
  },
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com o banco de dados.');
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
};

module.exports = {
  sequelize,
  connection,
};