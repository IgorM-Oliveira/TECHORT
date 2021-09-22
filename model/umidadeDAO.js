function umidadeDAO(connection){//classe com objetivo de acesso a dados data acess object
	this._connection = connection;
}

umidadeDAO.prototype.getUmidade = function(callback){
	this._connection.query('select * from umid' , callback);
}

module.exports = function(){
	return umidadeDAO;
}