const express  = require('express');
const app = express();

//meus módulos
require('./src/databases/index')
const Router = require('./Router')

app.use(express.json())
app.use(express.urlencoded({ extended:true }))



app.use(Router)

app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000')
})

