module.exports = function(app) {
    app.get('/noticia', function(req, res) {
        var conexao = app.config.db();

        conexao.query('select * from noticias where id = 1', function(error, result) {
            res.render("noticias/noticia", { noticia: result });
        });
    });
};