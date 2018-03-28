var app = require('./config/server');

//Chama os modulos que encapsulam as rotas
//var rotaNoticias = require('./app/routes/noticias');
//var rotaHome = require('./app/routes/home');
//var rotaInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');

//é possível fazer o require ja executando a função

//Desconsiderados pelo fato de usar o consign
//require('./app/routes/noticias')(app);
//require('./app/routes/home')(app);
//require('./app/routes/formulario_inclusao_noticia')(app);

//rotaNoticias(app);
//rotaHome(app);
//rotaInclusaoNoticia(app);


app.listen(3000, function() {
    console.log("Servidor rodando com express, esperando requisições na porta 3000");
});