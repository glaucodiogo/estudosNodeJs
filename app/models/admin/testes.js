function TestesModel(connection) {
    this._connection = connection;
}

TestesModel.prototype.insert = function(amostra,callback) {
    this._connection.query('Insert into testes set ?', noticia,callback);
}

TestesModel.prototype.delete = function(amostra,callback) {
    this._connection.query('delete from testes where id='+amostra.id, callback);    
}

TestesModel.prototype.update = function(amostra, callback) {
    //o driver ja consegue pegar os valores em json e substitui pelo interrogação
    this._connection.query('Update testes set ?',amostra, callback);
}

TestesModel.prototype.getTestes = function(callback){
    this._connection.query("select * from testes",callback)
}
module.exports = function() {
    return TestesModel;
}
