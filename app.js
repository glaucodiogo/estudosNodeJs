var express = require('express');
var app = express();
//vincular express com EJS
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    //o render irá buscar o arquivo ejs, podendo separar os htmls
    res.render('home/index');
});

//organizando as rotas
app.get('/formulario_inclusao_noticia', function(req, res) {
    //envia código html direto para a página
    //res.send("<html><body><title>Portal de notícias</title></body></html>");
    res.render("admin/form_add_noticia")
});

app.get('/noticias', function(req, res) {
    //o render irá buscar o arquivo ejs, podendo separar os htmls
    res.render('noticias/noticias');
});



app.listen(3000, function() {
    console.log("Servidor rodando com express, esperando requisições na porta 3000");
});