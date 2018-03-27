module.exports = function(app) {
    //organizando as rotas
    app.get('/formulario_inclusao_noticia', function(req, res) {
        //envia código html direto para a página
        //res.send("<html><body><title>Portal de notícias</title></body></html>");
        res.render("admin/form_add_noticia")
    });
}