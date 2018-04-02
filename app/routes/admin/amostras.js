module.exports = function(application) {
    //organizando as rotas
    application.get('/admin/amostras', function(req, res) {        
        application.app.controllers.admin.amostras.getAmostras(application,req,res);
    });

    application.get('/amostras', function(req, res) {
        //application.app.controllers.admin.testes.testes(application,req,res);
    });

    application.put('/amostra', function(req, res) {
        res.send('editar amostra');
       // application.app.controllers.admin.testes.testes(application,req,res);
    });

    application.delete('/amostra', function(req, res) {
        res.send('deletar amostra');
        //application.app.controllers.admin.testes.testes(application,req,res);
    });

    
}