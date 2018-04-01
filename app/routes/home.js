module.exports = function(application) {
    application.get('/', function(req, res) {
        //o render irá buscar o arquivo ejs, podendo separar os htmls
        application.app.controllers.home.index(application,req,res);
    });
}  