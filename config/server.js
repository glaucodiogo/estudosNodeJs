//Quando for trabalhar com recursos específicos , é ideal que seja adicionado aqui
var express = require('express');
var app = express();
//vincular express com EJS
app.set('view engine', 'ejs');
//Indica para o express que as views devem ser buscadas em outra página
app.set('views', './app/views');

module.exports = app;