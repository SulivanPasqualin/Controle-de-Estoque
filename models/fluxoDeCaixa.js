const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconnections');

const FluxoDeCaixa = sequelize.define('FluxoDeCaixa', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  origem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destino: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tipoMovimento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoriaMovimento: {
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
      await FluxoDeCaixa.sync({ force: true }); // true para forçar gerar uma tabela no banco ao iniciar (apaga dados existentes se houver), mantenha false caso já exista a tabela e deseje manter os dados
      console.log('Tabela de categoriaProduto criada com sucesso.');
  
    } catch (error) {
      console.error('Não foi possível conectar-se ao banco de dados:', error);
    }
  })();

module.exports = FluxoDeCaixa;