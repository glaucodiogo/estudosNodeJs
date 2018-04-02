module.exports = function(application) {
    //organizando as rotas
    application.get('/teste', function(req, res) {
        //application.app.controllers.admin.testes.teste(application,req,res);
    });

    application.get('/testes', function(req, res) {
        //application.app.controllers.admin.testes.testes(application,req,res);
    });

    application.put('/teste', function(req, res) {
        res.send('editar teste');
       // application.app.controllers.admin.testes.testes(application,req,res);
    });

    application.delete('/teste', function(req, res) {
        res.send('deletar teste');
        //application.app.controllers.admin.testes.testes(application,req,res);
    });

    
}