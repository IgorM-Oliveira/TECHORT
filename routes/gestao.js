module.exports = function(server){
	server.get('/gestao',function(req,res){
		if (req.session.loggedin) {
			server.controllers.gestao.gestao(server,req,res)
		}
		else {
			res.redirect('/');
		}
	});


	server.post('/sair', function(req,res){
		server.controllers.gestao.logout(server, req, res);
	});
}