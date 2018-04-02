function ParticipantesModel(connection) {
    this._connection = connection;
}

ParticipantesModel.prototype.insert = function(amostra,callback) {
    this._connection.query('Insert into participantes set ?', noticia,callback);
}

ParticipantesModel.prototype.delete = function(amostra,callback) {
    this._connection.query('delete from participantes where id='+amostra.id, callback);    
}

ParticipantesModel.prototype.update = function(amostra, callback) {
    //o driver ja consegue pegar os valores em json e substitui pelo interrogação
    this._connection.query('Update participantes set ?',amostra, callback);
}

ParticipantesModel.prototype.getParticipantes = function(callback){
    this._connection.query("select * from participantes",callback)
}
module.exports = function() {
    return ParticipantesModel;
}
