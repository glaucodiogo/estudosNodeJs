module.exports.noticias = function(application, req, res) {   
    //Executa a conexao apartir do require
    var connection = application.config.db();
    var noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.getNoticias(function(error, result) {
        res.render("noticias/noticias", { noticias: result });
    });
}

module.exports.noticia = function(application, req, res) {  
    var connection = application.config.db();
    var noticiasModel = new application.app.models.noticiasModel(connection);

    var id_noticia = req.query;
    noticiasModel.getNoticia(id_noticia,function(error, result) {
        res.render("noticias/noticia", { noticia: result });
    });
}