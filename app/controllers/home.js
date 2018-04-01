module.exports.index = function(application, req, res) {
    //conexao
    var connection = application.config.db();
    //model
    var noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.getUltimasNoticias(function(error,result){        
        res.render("home/index",{noticias:result});
    });
};
