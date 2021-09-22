module.exports.index=function(server, req, res) {	
	if (!req.session.loggedin)
	{
	    res.render('index.ejs');
	} 
	else 
	{
		res.redirect('/gestao');
	}
}

module.exports.login_usuario = function(server, req, res){
	var user = req.body.fq_name;
	console.log(user);
	var email = req.body.fq_email;
	console.log(email);
	if (user && email) {
		var connection = server.config.dbConnection();
		var usuario_Model = new server.model.loginDAO(connection);
		usuario_Model.loginUsuario(user, email, function(error, result){
			if (result.length > 0) {
				req.session.loggedin = true;
				req.session.user = user;
				res.redirect('/gestao');
			} 
			else {
				res.send('Usuário ou email incorretos!');
			}			
			res.end();
		});
	}
    else {
		res.send('Por favor, entre com o usuário e a email!');
		res.end();
	}
}