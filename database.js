//IMPORTAÇÃO MODULO SEQUELIZE

const sequelize = require("sequelize");

//CRIA A CONEXÃO COM O BANCO DE DADOS POR MEIO DO SEQUELIZE

// PARAMETROS: 1° NOME DE BANCO DE DADOS, 2° USUARIO DO BANCO DE DADOS, 3° A SENHA DO BANCO DE DADOS, 4° OBJETO JSON COM DADOS DE CONFIGURAÇÃO
// 1 - HOST DO BANCO DE DAODS, PORTA LOGICA DO BANCO DE DADOS, DIALETO SQL A SER UTILIZADO, TIMEZONE, 

const connection = new sequelize(

    "bd_api_livraria2",
     "root",
     "",
{
     host: "localhost",
     port: "3006",
     dialect: "mysql",
     timezone: "-03:00",
}
     );

     module.exports = connection;
    