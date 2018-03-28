module.exports = function(application) {
    //organizando as rotas
    application.get('/formulario_inclusao_noticia', function(req, res) {
        //envia código html direto para a página        
        res.render("admin/form_add_noticia")
    });

    application.post('/noticias/salvar', function(req, res) {
        //envia código html direto para a página
        //res.send("<html><body><title>Portal de notícias</title></body></html>");

        var noticia = req.body;

        //conexao
        var conexao = application.config.db();

        //model
        var noticiasModel = application.app.models.noticiasModel;

        //enviar para uma função salvarNoticia
        noticiasModel.salvarNoticia(noticia, conexao, function(error, result) {
            res.render("noticias/noticias", { noticia: result });
        });

    });
}