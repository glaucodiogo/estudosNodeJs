//amostras controller

module.exports.amostras = function(application, req, res) {
    //Executa a conexao apartir do require
    var connection = application.config.db();
    var amostrasModel = new application.app.models.admin.amostrasModel(connection);

    amostrasModel.getAmostras(function(error, result) {
        res.render("admin/amostras", { amostras: result });
    });
}

//Dashboard
module.exports.dashboard = function(application, req, res) {

    var qtdTestesExecutados;
    var qtdTestesAgendados;
    //conexao
    var connection = application.config.db();
    //model
    var dashboardModel = new application.app.models.admin.dashboardModel(connection);

    dashboardModel.contarTestesExecutados(function(error, result) {
        qtdTestesExecutados = result;
    });

    dashboardModel.contarTestesAgendados(function(error, result) {
        qtdTestesAgendados = result;
    });

    dashboardModel.contarParticipantes(function(error, result) {
        res.render("admin/dashboard", { qtdParticipantes: result, qtdTestesExecutados, qtdTestesAgendados });
    });
}

//Amostras
module.exports.createAmostra = function(application, req, res) {

    res.render("admin/amostras/create", { validacao: {} });
}

module.exports.saveAmostra = function(application, req, res) {
    var amostra = req.body;

    req.assert('nome', 'Nome é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        console.log(erros);
        res.render("admin/amostra/create", { validacao: erros, amostra: amostra });
        return;
    } else {
        var connection = application.config.db();
        var amostrasModel = new application.app.models.admin.amostrasModel(connection);
        amostrasModel.insert(amostra, function(error, result) {
            res.redirect('/admin/amostras');
        });
    }
}
module.exports.getAmostras = function(application, req, res) {
    var connection = application.config.db();
    //model
    var amostraModel = new application.app.models.admin.amostraModel(connection);

    amostraModel.getAmostras(function(error, result) {
        res.render("admin/amostras/index", { amostras: result });
    });
}

//exporta para download um arquivo csv , com dados informados
module.exports.exportCSV = function(application, req, res) {
    const Json2csvParser = require('json2csv').Parser;
    const fields = ['car', 'price', 'color'];

    const myCars = [{
        "car": "Audi",
        "price": 40000,
        "color": "blue"
    }, {
        "car": "BMW",
        "price": 35000,
        "color": "black"
    }, {
        "car": "Porsche",
        "price": 60000,
        "color": "green"
    }];

    const json2csvParser = new Json2csvParser({ fields, delimiter: ';' });
    const csv = json2csvParser.parse(myCars);


    try {
        res.attachment('testeSensorial.csv');
        res.status(200).send(csv);
    } catch (err) {
        console.error(err);
    }
}
module.exports.noticias_salvar = function(application, req, res) {
    var noticia = req.body;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 a 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({ format: 'YYYY-MM-DD' });
    req.assert('noticia', 'Notícia é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
        return;
    }

    //conexao
    var connection = application.config.db();
    //model
    var dashboardModel = new application.app.models.admin.dashboardModel(connection);

    //enviar para uma função salvarNoticia
    dashboardModel.addNoticia(noticia, function(error, result) {
        console.log(result);
        res.redirect('/noticias');
    });
}