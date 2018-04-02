function DashboardModel(connection) {
    this._connection = connection;
}

DashboardModel.prototype.contarTestesExecutados = function(callback) {
    this._connection.query('select count(id) AS total from testes ', callback);
}

DashboardModel.prototype.contarTestesAgendados = function(callback) {
    this._connection.query('select count(id) AS total from testes', callback);
}

DashboardModel.prototype.contarParticipantes = function(callback) {
    //o driver ja consegue pegar os valores em json e substitui pelo interrogação
    this._connection.query('select count(id) AS total from participantes', callback);
}

DashboardModel.prototype.ultimosTestesCriados = function(callback) {
    this._connection.query("select * frim testes order by data_criacao desc limit 15", callback)
}
module.exports = function() {
    return DashboardModel;
}