module.exports = function(application) {
    //organizando as rotas
    application.get('/admin', function(req, res) {
        res.render("admin/index");
    });
    application.post('/admin/login', function(req, res) {
        res.redirect("admin/dashboard/");
    });

    application.get('/admin/dashboard',function(req,res){
        res.render("admin/dashboard");
    });

    application.get('/formulario_inclusao_noticia', function(req, res) {
        application.app.controllers.admin.formulario_inclusao_noticia(application,req,res);
    });

    application.post('/noticias/salvar', function(req, res) {        
        application.app.controllers.admin.noticias_salvar(application,req,res);
    });
}