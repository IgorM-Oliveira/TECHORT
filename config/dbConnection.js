var mysql = require('mysql');

const connMySQL = function(){
	return mysql.createConnection({
		host: 'localhost',
		user : 'root',
		password : 'root',
		database : 'tec_hort',
	});
}

module.exports = function () {
	return connMySQL;
}