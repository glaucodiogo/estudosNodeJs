module.exports = function(application) {
    application.get('/noticias', function(application, req, res) {
       application.app.controllers.noticias.noticias();

    });
    application.get('/noticia', function(application, req, res) {
        application.app.controllers.noticias.noticia();
    });
}