const Sequelize = require('sequelize')

const sequelize = new Sequelize('libert_testes', 'postgres','dwpq2jnza4', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize;