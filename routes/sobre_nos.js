module.exports = function(server){
	server.get('/sobre_nos',function(req,res){
		server.controllers.sobre_nos.sobre_nos(server,req,res)
	});
}