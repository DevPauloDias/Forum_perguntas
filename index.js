//const { application } = require('express')
const express = require('express')
const server = express()
const routes = require('./routes')
const connection = require('./database/database.js')


connection.authenticate().then(()=>{
    console.log('conexão feita com sucesso!')
}).catch((erro)=>{
    console.log('erro de conexão'+ erro)
})



server.use(routes)

// habilitando o ejs no projeto
server.set('view engine', 'ejs')
server.use(express.static('public'))


server.listen(3333, ()=>{
    console.log('Servidor rodando!')
})