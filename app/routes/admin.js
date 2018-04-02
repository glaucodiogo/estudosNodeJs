module.exports = function(application) {
    //organizando as rotas
    application.get('/admin', function(req, res) {
        res.render("admin/index");
    });
    application.post('/admin/login', function(req, res) {
        res.redirect("/admin/dashboard/");
    });
    application.get('/admin/dashboard', function(req, res) {
        application.app.controllers.admin.dashboard(application, req, res);
    });

    //Amostras    
    application.get('/admin/amostras', function(req, res) {
        application.app.controllers.admin.amostras(application, req, res);
    });
    application.get('/admin/amostra/create', function(req, res) {
        application.app.controllers.admin.createAmostra(application, req, res);
    });
    application.post('/admin/amostra/save', function(req, res) {
        application.app.controllers.admin.saveAmostra(application, req, res);
    });

    application.put('/admin/amostra/edit', function(req, res) {
        application.app.controllers.admin.saveAmostra(application, req, res);
    });

    application.get('/admin/perguntas', function(req, res) {
        application.app.controllers.admin.perguntas(application, req, res);
    });


    //Relatórios        
    application.get('/admin/relatorios/export', function(req, res) {
        application.app.controllers.admin.exportCSV(application, req, res);

    });


}