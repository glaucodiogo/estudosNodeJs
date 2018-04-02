module.exports = function(application) {
    //organizando as rotas
    application.get('/participante', function(req, res) {
        //application.app.controllers.admin.testes.teste(application,req,res);
    });

    application.get('/participantes', function(req, res) {
        //application.app.controllers.admin.testes.testes(application,req,res);
    });

    application.put('/participante', function(req, res) {
        res.send('editar participante');
       // application.app.controllers.admin.testes.testes(application,req,res);
    });

    application.delete('/participante', function(req, res) {
        res.send('deletar participante');
        //application.app.controllers.admin.testes.testes(application,req,res);
    });

    
}