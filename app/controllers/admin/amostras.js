
module.exports.amostras = function(application, req, res) {   
    //Executa a conexao apartir do require
    var connection = application.config.db();
    var amostrasModel = new application.app.models.admin.amostrasModel(connection);

    amostrasModel.getAmostras(function(error, result) {
        res.render("admin/amostras", { amostras: result });
    });
}