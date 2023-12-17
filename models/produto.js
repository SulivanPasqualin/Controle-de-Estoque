const DataTypes = require("sequelize");
const db = require("../config/dbconnection")

const Produto = db.define('produto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataValidade: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_UnMed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "unidadeMedida", key: "id" },
        onDelete: "CASCADE"
    },
    id_CatProd: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "categoriaProduto", key: "id" },
        onDelete: "CASCADE"
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
});

(async () => {
    try {
        await Produto.sync({ force: false }); //{ force: true }
        console.log('Tabela de Produto criada com sucesso.');

    } catch (error) { 
        console.error('Não foi possível conectar-se ao banco de dados:', error);
    }
})(); 

module.exports = Produto