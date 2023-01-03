const Sequelize = require('sequelize');
const connection = require('./database.js');
 
const Pergunta = connection.define('perguntas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
   
})
Pergunta.sync({force: false}).then(()=>{ console.log('tabela criada com sucesso')}).catch(()=>{ console.log('erro ao criar tabela')})
module.exports = Pergunta
 
