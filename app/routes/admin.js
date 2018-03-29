module.exports = function(application) {
    //organizando as rotas
    application.get('/formulario_inclusao_noticia', function(req, res) {
        application.app.controllers.admin /
    });

    application.post('/noticias/salvar', function(req, res) {
        var noticia = req.body;

        req.asset('titulo', 'Título é obrigatório').notEmpty();
        req.asset('resumo', 'Resumo é obrigatório').notEmpty();
        req.asset('resumo', 'Resumo deve conter entre 10 a 100 caracteres').len(10, 100);
        req.asset('autor', 'Autor é obrigatório').notEmpty();
        req.asset('data_noticia', 'Data é obrigatório').notEmpty().isDate({ format: 'YYYY-MM-DD' });
        req.asset('noticia', 'Notícia é obrigatório').notEmpty();

        var erros = req.validationErrors();

        if (erros) {
            res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
            return;
        }

        //conexao
        var connection = application.config.db();
        //model
        var noticiasModel = new application.app.models.noticiasModel(connection);

        //enviar para uma função salvarNoticia
        noticiasModel.addNoticia(noticia, function(error, result) {
            res.redirect('/noticias');
        });
    });
}