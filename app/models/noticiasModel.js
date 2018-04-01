function NoticiasModel(connection) {
    this._connection = connection;
}

NoticiasModel.prototype.getNoticias = function(callback) {
    this._connection.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasModel.prototype.getNoticia = function(parameter,callback) {
    this._connection.query('select * from noticias where id = '+ parameter.id, callback);
}

NoticiasModel.prototype.addNoticia = function(noticia, callback) {
    //o driver ja consegue pegar os valores em json e substitui pelo interrogação
    this._connection.query('Insert into noticias set ?', noticia);
}

NoticiasModel.prototype.getUltimasNoticias = function(callback){
    this._connection.query("select * frim noticias order by data_criacao desc limit 5",callback)
}
module.exports = function() {
    return NoticiasModel;
}