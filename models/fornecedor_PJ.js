const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconnections');
const { Fornecedor_PJ } = require('../config/associations');

const FornecedorPJ = sequelize.define('FornecedorPJ', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  razaoSocial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nomeFantasia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numEndereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
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
      await Fornecedor_PJ.sync({ force: false }); //{ force: true }
      console.log('Tabela de categoriaProduto criada com sucesso.');
  
    } catch (error) {
      console.error('Não foi possível conectar-se ao banco de dados:', error);
    }
  })();

module.exports = FornecedorPJ;