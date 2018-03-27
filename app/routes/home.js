module.exports = function(app) {
    app.get('/', function(req, res) {
        //o render irá buscar o arquivo ejs, podendo separar os htmls
        res.render('home/index');
    });
}