//Quando for trabalhar com recursos específicos , é ideal que seja adicionado aqui
var express = require('express');
//Este modulo serve para controlar as rotas
var consign = require('consign');

var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
//vincular express com EJS
app.set('view engine', 'ejs');
//Indica para o express que as views devem ser buscadas em outra página
app.set('views', './app/views');
//O body parser cuida das requisições 
//Passando extended true , permite uma abrangencia maior das urls
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('config/db.js')
    .then('app/models')
    .into(app);

module.exports = app;