 var mysql = require('mysql');

 var connMySQL = function() {
     var ambiente = "work";
     if (ambiente == "dev") {
         return mysql.createConnection({
             host: 'localhost',
             user: 'root',
             password: '1234',
             database: 'portal_noticias'
         });
     } else if (ambiente == "work") {
         return mysql.createConnection({
             host: 'localhost',
             user: 'root',
             password: 'root',
             database: 'teste_sensorial'
         });
     }
     console.log('Conexao com bd foi estabelecida');
 }

 module.exports = function() {
     console.log('O autoload carregou o módulo de conexão com bd');
     return connMySQL;
 }