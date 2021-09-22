module.exports = function(server){
	server.get('/',function(req,res){
		server.controllers.home.index(server, req, res)
	});
	
	server.post('/login', function(req, res) 
	{
		server.controllers.home.login_usuario(server, req, res);
	});
}