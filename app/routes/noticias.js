module.exports = function(application) {
    application.get('/noticias', function(req, res) {
        //Executa a conexao apartir do require
        var conexao = application.config.db();
        var noticiasModel = new application.app.models.noticiasModel(conexao);

        noticiasModel.getNoticias(function(error, result) {
            res.render("noticias/noticias", { noticias: result });
        });

    });
    application.get('/noticia', function(req, res) {
        var connection = application.config.db();
        var noticiasModel = new application.app.models.noticiasModel(connection);

        noticiasModel.getNoticia(function(error, result) {

            res.render("noticias/noticia", { noticia: result });

        });
    });
}