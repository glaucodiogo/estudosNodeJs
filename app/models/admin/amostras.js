function AmostrasModel(connection) {
    this._connection = connection;
}

AmostrasModel.prototype.insert = function(amostra,callback) {
    this._connection.query('Insert into amostras set ?', noticia,callback);
}

AmostrasModel.prototype.delete = function(amostra,callback) {
    this._connection.query('delete from amostras where id='+amostra.id, callback);    
}

AmostrasModel.prototype.update = function(amostra, callback) {
    //o driver ja consegue pegar os valores em json e substitui pelo interrogação
    this._connection.query('Update amostras set ?',amostra, callback);
}

AmostrasModel.prototype.getAmostras = function(callback){
    this._connection.query("select * from amostras",callback)
}
module.exports = function() {
    return AmostrasModel;
}
