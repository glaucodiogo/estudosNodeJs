var dbConnection = require('../../config/db');
module.exports = function(app) {
    app.get('/noticias', function(req, res) {
        //Executa a conexao apartir do require
        var conexao = dbConnection();
        //Executando consultas, a função de callback retorna o resultado
        //sem travar  a aplicação
        conexao.query("select * from noticias", function(error, result) {
            //envia o resultado para a m
            res.render("noticias/noticias", { noticias: result });
        });



    });
}