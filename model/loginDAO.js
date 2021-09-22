function loginDAO(connection){//classe com objetivo de acesso a dados data acess object
	this._connection = connection;
}

loginDAO.prototype.loginUsuario = function(user, email, callback){
	this._connection.query('select * from horta where fq_name = ? AND fq_email = ?', [user,email], callback);
}

module.exports = function(){
	return loginDAO;
}