  var mysql = require('mysql');
  //criando a conexao
  module.exports = function() {
      return mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: 'root',
          database: 'portal_noticias'
      });
  }