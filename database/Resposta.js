const Sequelize = require('sequelize');
const connection = require('./database.js');


const Resposta = connection.define('respostas', {
    corpo: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false


    }

});

Resposta.sync({firce: false})
module.exports = Resposta

    
    