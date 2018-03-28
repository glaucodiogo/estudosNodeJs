module.exports = function(application) {
    application.get('/noticias', function(req, res) {
        //Executa a conexao apartir do require
        var conexao = application.config.db();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticias(conexao, function(error, result) {
            res.render("noticias/noticias", { noticias: result });
        });

    });
}