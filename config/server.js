//Quando for trabalhar com recursos específicos , é ideal que seja adicionado aqui
var express = require('express');
//Este modulo serve para controlar as rotas
var consign = require('consign');

var app = express();
//vincular express com EJS
app.set('view engine', 'ejs');
//Indica para o express que as views devem ser buscadas em outra página
app.set('views', './app/views');

consign().include('app/routes').into(app);

module.exports = app;