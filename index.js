//IMPORTAÇÃO DO MODULO EXPRESS

const express = require("express");


//INSTANCIA DO MODULO EXPRESS   //PARA TRANSFORMAR EM FUNÇÃO PRECISA DO ()
const app = express();

//CONFIGURAÇÃO PARA LEITURA DE JSON
app.use(express.json())

//CONFIGURAÇÃO PARA O EXPRESS TRABALHAR COM DADOS DE FORMULARIO
app.use(express.urlencoded({extended:true}));

//CRIAÇÃO DO SERVIDOR WEB DE REQUISIÇÕES E RESPOSTAS
app.listen(3000, ()=>{
    console.log ('API LIVRARIA RODANDO EM: https://localhost:3000');
 
});