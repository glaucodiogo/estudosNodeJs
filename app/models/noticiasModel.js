function Noticias(connection) {
    this._connection = connection;
}

Noticias.prototype.getNoticias = function(callback) {
    this._connection.query('select * from noticias', callback);
}

Noticias.prototype.getNoticia = function(callback) {
    this._connection.query('select * from noticias where id = 1', callback);
}

Noticias.prototype.addNoticia = function(noticia, callback) {
    //o driver ja consegue pegar os valores em json e substitui pelo interrogação
    this._connection.query('Insert into noticias set ?', noticia);
}


module.exports = function() {
    return Noticias;
}