module.exports = function() {
    this.getNoticias = function(connection, callback) {
        connection.query('select * from noticias', callback);
    }

    this.getNoticia = function(connection, callback) {
        connection.query('select * from noticias where id = 1', callback);
    }

    this.salvarNoticia = function(noticia, connection, callback) {
        //o driver ja consegue pegar os valores em json e substitui pelo interrogação
        connection.query('Insert into noticias set ?', noticia);
    }
    return this;
}