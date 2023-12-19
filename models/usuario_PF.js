const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconnection');
const Usuario = require('./usuario');

const Usuario_PF = sequelize.define('Usuario_PF', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  // Opções adicionais do modelo, se necessário
  timestamps: false,
  freezeTableName: true,
});

Usuario_PF.belongsTo(Usuario); // Relacionamento com a tabela Usuario

(async () => {
    try {
      await Usuario_PF.sync({ force: false }); // true para forçar gerar uma tabela no banco ao iniciar (apaga dados existentes se houver), mantenha false caso já exista a tabela e deseje manter os dados
      console.log('Tabela usuario_PF criada com sucesso.');
  
    } catch (error) {
      console.error('Não foi possível conectar-se ao banco de dados:', error);
    }
  })();

module.exports = Usuario_PF;
