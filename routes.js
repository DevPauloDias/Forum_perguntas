const express = require('express')

const router = express.Router()
const bodyParser = require('body-parser')

// importa o model ta tabela perguntas
const Pergunta = require('./database/Pergunta')
const Resposta = require('./database/Resposta')

// configuração para acessar os dados enviados pelo formulário
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json());


router.get('/', (req, res)=>{
   
    
    Pergunta.findAll({raw: true, order:[
        ['id','DESC']
    ]}).then(perguntas=> {
        res.render('index', {
            perguntas: perguntas
        })

    })
})


router.get('/perguntar',(req, res)=>{
   
    res.render('perguntar')
})

router.post('/salvarpergunta',(req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

   Pergunta.create({
    titulo: titulo,
    descricao: descricao
   }).then(()=>{
    res.redirect('/');
   })
})

router.get('/pergunta/:id',(req, res)=>{
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta =>{

        if(pergunta!= undefined){ // pergunta encontrada
            
            Resposta.findAll({
                where: {perguntaId: id},
                order: [['id','DESC']]
            }).then(respostas =>{

                res.render('pergunta', {
                    pergunta: pergunta,
                    respostas: respostas
                });
            });
           
        }else{
            res.redirect('/')
        }
    })


})

router.post('/responder', (req, res )=>{
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta

    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId

    }).then(()=>{
        res.redirect('/pergunta/'+perguntaId)
    })


})





module.exports= router