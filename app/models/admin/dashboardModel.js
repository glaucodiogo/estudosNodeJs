function DashboardModel(connection) {
    this._connection = connection;
}

DashboardModel.prototype.contarTestesExecutados = function(callback) {
    this._connection.query('select count(*) from testes where status=e', callback);
}

DashboardModel.prototype.contarTestesAgendados = function(parameter,callback) {
    this._connection.query('select count(*) from testes where status=a', callback);    
}

DashboardModel.prototype.contarParticipantes = function(noticia, callback) {
    //o driver ja consegue pegar os valores em json e substitui pelo interrogação
    this._connection.query('select count(*) from participantes', callback);
}

DashboardModel.prototype.ultimosTestesCriados = function(callback){
    this._connection.query("select * frim testes order by data_criacao desc limit 15",callback)
}
module.exports = function() {
    return DashboardModel;
}
