module.exports = function(app) {
    app.get('/noticia', function(req, res) {
        var conexao = app.config.db();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(conexao, function(error, result) {
            console.dir(result);
            res.render("noticias/noticia", { noticia: result });
        });
    });
};