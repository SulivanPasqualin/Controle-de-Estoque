const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconnection');

const Produto = sequelize.define('Produto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  dataValidade: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  id_unMed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_catProd: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  // Opções adicionais do modelo, se necessário
  timestamps: false,
  freezeTableName: true,
});

(async () => {
    try {
        await Produto.sync({ force: false }); // true para forçar gerar uma tabela no banco ao iniciar (apaga dados existentes se houver), mantenha false caso já exista a tabela e deseje manter os dados
        console.log('Tabela produto criada com sucesso.');

    } catch (error) { 
        console.error('Não foi possível conectar-se ao banco de dados:', error);
    }
})(); 

module.exports = Produto;