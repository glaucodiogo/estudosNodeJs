module.exports = function(app) {
    app.get('/noticias', function(req, res) {
        //o render irá buscar o arquivo ejs, podendo separar os htmls
        res.render('noticias/noticias');
    });
}