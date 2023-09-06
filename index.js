 // Importando o modulo do express
const express = require('express');

// Cria uma instancia executavel do express
const app = express();

//rora raiz
app.get('/', (req, res)=>{
    res.send('ROTA RAIZ CLIENTES')
})

// rota de get clientes
app.get('/clientes', (req, res)=>{
    res.send('ROTA GET CLIENTES')
});

//ROTA DE CADASTRO (POST)
app.post('/cadastrar', (req, res)=>{
    res.send('ROTA DE CADASTRO')
})

//ROTA DE ALTERAÇÃO (PUT)
app.put('/alterar', (req, res)=>{
    res.send('ROTA PUT DE ALTERAÇÃO') 
})

//ROTA DE EXCLUIR (DELETE)
app.delete('/excluir', (req, res)=>{
    res.send('ROTA DELETE DE EXCLUSÃO')
})
  


// Servidor requisição/resposta
app.listen(3000, ()=>{
    console.log('Servidor rodando!')
});

//por ip config no powershell achando o ipv4 tem como acessar a url numa rede local e requisitar uma rota sem estar baixada